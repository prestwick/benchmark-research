/*global Backbone*/
/*jshint unused: false */

//In the module there is one Model for each unique widget instance.
var modelModule = (function () {
    'use strict';
    var gaugeModelOne,
        gaugeModelTwo,
        numericInputModel,
        sliderModel;
    
    gaugeModelOne = new Backbone.Model({
        value: 0,
        min: 0,
        max: 100,
        disabled: false
    });
    
    gaugeModelTwo = new Backbone.Model({
        value: 0,
        min: 0,
        max: 250,
        disabled: false
    });
    
    numericInputModel = new Backbone.Model({
        value: 0,
        disabled: false
    });
    
    sliderModel = new Backbone.Model({
        value: 1000,
        min: 0,
        max: 1000,
        disabled: false
    });
    
    return {
        gaugeModelOne: gaugeModelOne,
        gaugeModelTwo: gaugeModelTwo,
        numericInputModel: numericInputModel,
        sliderModel: sliderModel
    };
}());