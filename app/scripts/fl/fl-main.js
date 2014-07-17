/*global $, document, io, utilConstantsModule, domIdRegistryModule*/

$(document).ready(function () {
    'use strict';
    var socket = io.connect('http://localhost:1337'),
        i,
        utilConst = utilConstantsModule;
    

//setup jqxWidgets
    domIdRegistryModule.numericInputs.jqxNumberInput({ width: '250px', height: '25px',  spinButtons: true});
    domIdRegistryModule.sliderInputs.jqxSlider({ min: 0, max: 1000, ticksFrequency: 100, value: 1000, step: 5});
    domIdRegistryModule.gaugeOutputs.jqxGauge({
        ranges: [{ startValue: 0, endValue: 55, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 5, startWidth: 1 },
                         { startValue: 55, endValue: 110, style: { fill: '#fbd109', stroke: '#fbd109' }, endWidth: 10, startWidth: 5 },
                         { startValue: 110, endValue: 165, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 13, startWidth: 10 },
                         { startValue: 165, endValue: 220, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 16, startWidth: 13 }],
        ticksMinor: { interval: 5, size: '5%' },
        ticksMajor: { interval: 10, size: '9%' },
        value: 0,
        colorScheme: 'scheme05',
        animationDuration: 100
    });
    
//event handlers
    domIdRegistryModule.sliderInputs.on('slideEnd', function (event) {
        var value = event.args.value;
        socket.emit(utilConst.OUTGOING_DATA, {rate: value});
    });
    
//websocket implementation
    socket.on(utilConst.INCOMING_DATA, function (o) {
        for (i = 0; i < o.length; i += 1) {
            if ($(o[i].id)) {
                $('#' + o[i].id).val(o[i].value);
            }
        }
    });
});