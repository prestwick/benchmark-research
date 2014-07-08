/*global $, document*/
/*jshint unused: false */

//This module should be used to explor the need to keep track of DOM IDs in a generated file
//rather than hardcoding these IDs into the javascript code that is designed to be reusable.
//In a code-gen case the DOM ID should likely be GUIDs or similar.

//$(document).ready(function () {
//    'use strict';
//    var domIdRegistryModule = (function () {
//        var numericInput = $('#numericInput'),
//            gaugeContainer1 = $('#gaugeContainer1'),
//            gaugeContainer2 = $('#gaugeContainer2'),
//            rateSlider = $('#rateSlider'),
//            registry = [
//                {
//                    id: numericInput,
//                    type: numeriType
//                },
//                {
//                    id: gaugeContainer1
//                    type: gaugeType
//                },
//                {id: gaugeContainer2},
//                {id: rateSlider}
//            ];
//        return registry;
//    }());
//});