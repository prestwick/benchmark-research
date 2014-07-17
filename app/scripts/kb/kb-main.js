/*global $, document, ko, modelModule, viewModelModule, socketModule, utilConstantsModule, domIdRegistryModule*/

$(document).ready(function () {
    'use strict';
    var i,
        j,
        socket = socketModule.socket,
        mm = modelModule,
        vmm = viewModelModule,
        utilConst = utilConstantsModule,
        instanceGaugeViewModels = [],
        instanceNumericInputViewModels = [],
        instanceSliderViewModels = [];
        
//setup View Models
    for (i = 0; i < mm.gaugeModels.length; i += 1) {
        instanceGaugeViewModels.push(new vmm.GaugeViewModel(mm.gaugeModels[i]));
    }
    
    for (i = 0; i < mm.numericInputModels.length; i += 1) {
        instanceNumericInputViewModels.push(new vmm.NumericInputViewModel(mm.numericInputModels[i]));
    }
    
    for (i = 0; i < mm.sliderModels.length; i += 1) {
        instanceSliderViewModels.push(new vmm.SliderViewModel(mm.sliderModels[i]));
    }
    
//bind ViewModels to View
    for (i = 0; i < instanceGaugeViewModels.length; i += 1) {
        ko.applyBindings(instanceGaugeViewModels[i], domIdRegistryModule.gaugeOutputs[i]);
    }
    
    for (i = 0; i < instanceNumericInputViewModels.length; i += 1) {
        ko.applyBindings(instanceNumericInputViewModels[i], domIdRegistryModule.numericInputs[i]);
    }
    
    for (i = 0; i < instanceSliderViewModels.length; i += 1) {
        ko.applyBindings(instanceSliderViewModels[i], domIdRegistryModule.sliderInputs[i]);
    }
    
//update models with incoming Web socket data
    socket.on(utilConst.INCOMING_DATA, function (o) {
        for (i = 0; i < o.length; i += 1) {
            switch (o[i].widgetType) {
            case 'gauge':
                for (j = 0; j < mm.gaugeModels.length; j += 1) {
                    if (mm.gaugeModels[j].id === o[i].id) {
                        mm.gaugeModels[j].set({'value': o[i].value});
                    }
                }
                break;
            case 'numericInput':
                for (j = 0; j < mm.numericInputModels.length; j += 1) {
                    if (mm.numericInputModels[j].id === o[i].id) {
                        mm.numericInputModels[j].set({'value': o[i].value});
                    }
                }
                break;
            }
        }
    });
});