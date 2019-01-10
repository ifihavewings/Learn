function EventEmitter() {
    this.events = {
        // 'click' : [fn1,fn2,fn3]
    }
}
EventEmitter.prototype.on = EventEmitter.prototype.addListener = function(type,listener) {
    if(this.events[type]) {
        this.events[type].push(listener)
    }else {
        this.events[type] = [listener]
    }
}
EventEmitter.prototype.emit = function(type,...rest) {
    this.events[type] && this.events[type].forEach(listener => {
        listener.apply(this,rest)
    });
}
