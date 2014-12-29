ScopedEventEmitter
==================
Extension to the standard EventEmitter which accepts a scope object during
construction.  This object will be set as the scope for all event listeners.

Using ScopedEventEmitter
------------------------
```js
var ScopedEventEmitter = require("scoped-event-emitter"),
    EventEmitter = require("events").EventEmitter,
    emitter = new ScopedEventEmitter(obj),
    obj = {};

assert(emitter instanceof ScopedEventEmitter);
assert(emitter instanceof EventEmitter);
assert(emitter !== obj);

emitter.on("foo", function() {
    assert(this === obj);
});

emitter.emit("foo");
```

