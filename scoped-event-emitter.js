var EventEmitter = require("events").EventEmitter;

/**
 * EventEmitter which binds a source object to the scope of executed listeners.
 * @param {object} source
 * @constructor
 */
function ScopedEventEmitter(source) {
    var onceList = {};

    EventEmitter.call(this);
    
    this.once = function(event, listener) {
        if (!(event in onceList)) onceList[event] = [listener];
        else onceList[event].push(listener);
    }
    
    this.emit = function(event, arg1) {
        var listeners = this.listeners(event),
            args = Array.prototype.slice.call(arguments, 1);
        
        if (event in onceList) {
            listeners = listeners.concat(onceList[event]);
            delete onceList[event];
        }
        
        listeners.forEach(function(listener) {
            listener.apply(source, args);
        })
    }
}

/** extend EventEmitter */
ScopedEventEmitter.prototype = new EventEmitter();

/** export the ScopedEventEmitter class */
module.exports = ScopedEventEmitter;
