// class EventEmitter {
//     constructor() {
//         this.events = {}   // 所有的事件监听函数在这这里保存
//     }
//     on(type, listener) {
//         if(this.events[type]) {
//             this.events[type].push(listener)
//         }else {
//             this.events[type] = [listener]
//         }
//     }
//     addListener (type, listener) {
//         this.on(type, listener)
//     }
//     emit(type,...rest) {
//         this.events[type] || this.events[type].forEach(listener => listener.apply(this,rest))
//     }
// }
function EventEmitter() {
    this.events = {
        // 'click' : [fn1,fn2,fn3]
    }
}
EventEmitter.prototype.on = EventEmitter.prototype.addListener = function (type, listener) {
    if (this.events[type]) {
        this.events[type].push(listener)
    } else {
        this.events[type] = [listener]
    }
}
EventEmitter.prototype.emit = function (type, ...rest) {
    this.events[type] && this.events[type].forEach(listener => {
        // 注意箭头函数会保持this指向EventEmitter的实例
        listener.apply(this, rest)
    });
}
EventEmitter.prototype.once = function(type,listener) {
    // 使用箭头函数，保持this指向EventEmitter的实例
    let wrapper = (...rest) => {
        listener.apply(this,rest) 
        this.removeListener(type,wrapper)
    }
    this.on(type,wrapper)
}
EventEmitter.prototype.removeListener = function (type,listener) {
    if(this.events[type]) {
        this.events[type] = this.events[type].filter(l => l != listener)
    } 
}
EventEmitter.prototype.removeAllListener = function(type) {
    delete this.events[type]
}




module.exports = EventEmitter
