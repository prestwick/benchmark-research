/*global io, utilConstantsModule*/
/*jshint unused: false */

//In this module the web socket is setup up. 
var socketModule  = (function () {
    'use strict';
    var socket = io.connect(utilConstantsModule.SERVER_URL);
    return {socket: socket};
}());