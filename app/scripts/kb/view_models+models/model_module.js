/*global Backbone, domIdRegistryModule*/
/*jshint unused: false */

//In the module there is one Model for each unique widget instance.
var modelModule = (function () {
    'use strict';
    var i,
        gaugeModels = [],
        numericInputModels = [],
        sliderModels = [];
    
    for (i = 0; i < domIdRegistryModule.gaugeOutputs.length; i += 1) {
        gaugeModels.push(new Backbone.Model({
            value: 0,
            min: 0,
            max: 100,
            disabled: false,
            id: domIdRegistryModule.gaugeOutputs[i].id
        }));
    }
    
    for (i = 0; i < domIdRegistryModule.numericInputs.length; i += 1) {
        numericInputModels.push(new Backbone.Model({
            value: 0,
            disabled: false,
            id: domIdRegistryModule.numericInputs[i].id
        }));
    }
    
    for (i = 0; i < domIdRegistryModule.sliderInputs.length; i += 1) {
        sliderModels.push(new Backbone.Model({
            value: 1000,
            min: 0,
            max: 1000,
            disabled: false,
            id: domIdRegistryModule.sliderInputs[i].id
        }));
    }

    return {
        gaugeModels: gaugeModels,
        numericInputModels: numericInputModels,
        sliderModels: sliderModels
    };
}());