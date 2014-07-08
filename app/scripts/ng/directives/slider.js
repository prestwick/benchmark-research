/*global $, jQuery, document, io, angular, utilConstantsModule*/

angular.module('slider-directive', [])
    .directive('lvSlider', function ($rootScope, socket) {
        "use strict";
        return {
            link: function (scope, $element, attributes) {
                $rootScope.domIdRegistry[attributes.id] = $element;
                $element.jqxSlider({ min: 0, max: 1000, ticksFrequency: 100, value: 1000, step: 5});
                $element.on('slideEnd', function (event) {
                    var value = event.args.value;
                    socket.emit(utilConstantsModule.OUTGOING_DATA, {rate: value});
                });
            }
        };
    });