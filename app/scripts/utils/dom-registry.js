/*global $, document*/
/*jshint unused: false */
    
var domIdRegistryModule = (function () {
    'use strict';
    var numericInputs = $('.lv-numericinput'),
        gaugeOutputs = $('.lv-gauge'),
        sliderInputs = $('.lv-slider');
    return {
        numericInputs: numericInputs,
        gaugeOutputs: gaugeOutputs,
        sliderInputs: sliderInputs
    };
}());