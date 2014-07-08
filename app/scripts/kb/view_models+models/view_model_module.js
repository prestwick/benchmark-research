/*global kb, socketModule, utilConstantsModule */
/*jshint unused: false */
    
// In this module there is one view model constructor for each type of widget. 
var viewModelModule = (function () {
    'use strict';
    var GaugeViewModel = function (model) {
            this.value = kb.observable(model, 'value');
            this.min = kb.observable(model, 'min');
            this.max = kb.observable(model, 'max');
            this.disabled = kb.observable(model, 'disabled');
        },
        NumericInputViewModel = function (model) {
            this.value = kb.observable(model, 'value');
            this.disabled = kb.observable(model, 'disabled');
        },
        SliderViewModel = function (model, socket) {
            this.value = kb.observable(model, 'value');
            this.min = kb.observable(model, 'min');
            this.max = kb.observable(model, 'max');
            this.disabled = kb.observable(model, 'disabled');
            this.emitData = function (data, event) {
                var value = event.args.value;
                socketModule.socket.emit(utilConstantsModule.OUTGOING_DATA, {rate: value});
            };
        };
    return {
        GaugeViewModel: GaugeViewModel,
        NumericInputViewModel: NumericInputViewModel,
        SliderViewModel: SliderViewModel
    };
}());