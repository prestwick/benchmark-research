/*global $, document*/
/*jshint unused: false */
    
var domIdRegistryModule = (function () {
    'use strict';
    var numericInputs = $('.lv-numericinput'),
        gaugeOutputs = $('.lv-gauge'),
        sliderInputs = $('.lv-slider'),
        domIdLookup,
        domIdCache = {};
    
    domIdLookup = function (domId) {
        var tempSelector;
        if (!domIdCache[domId]) {
            tempSelector = ($('#' + domId));
            if (tempSelector.length === 0) {
                return false;
            } else {domIdCache[domId] = tempSelector; }
        }
        return domIdCache[domId];
    };
    
    return {
        numericInputs: numericInputs,
        gaugeOutputs: gaugeOutputs,
        sliderInputs: sliderInputs,
        domIdLookup: domIdLookup
    };
}());