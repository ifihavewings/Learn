class EventEmitter {
    constructor() {
        this.events = {}   // 所有的事件监听函数在这这里保存
    }
    on(type, listener) {
        if(this.events[type]) {
            this.events[type].push(listener)
        }else {
            this.events[type] = [listener]
        }
    }
    addListener (type, listener) {
        this.on(type, listener)
    }
    emit() {

    }
}
