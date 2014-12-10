ScopedEventEmitter
==================
Extension to the standard EventEmitter which accepts a scope object during
construction.  This object will be set as the scope for all event listeners.

Using ScopedEventEmitter
------------------------
```js
var ScopedEventEmitter = require("scoped-event-emitter"),
    obj = {},
    emitter = new ScopedEventEmitter(obj);

emitter.on("foo", function() {
    assert(this === obj);
});

emitter.emit("foo");
```

