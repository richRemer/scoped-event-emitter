var EventEmitter = require("events").EventEmitter,
    ScopedEventEmitter = require(".."),
    expect = require("expect.js");

describe("ScopedEventEmitter", function() {
    it("should extend EventEmitter", function() {
        var emitter = new ScopedEventEmitter({});
        expect(emitter).to.be.an(EventEmitter);
        expect(emitter).to.be.a(ScopedEventEmitter);
    });
    
    it("should call listeners with source scope", function() {
        var obj = {},
            emitter = new ScopedEventEmitter(obj);
        
        emitter.on("foo", function() {expect(this).to.be(obj);});
        emitter.emit("foo");
    });
});
