// let EventEmitter = require('events')
let EventEmitter = require('./2.events')
let util = require('util')

function Bell() {
    // Bell 继承EventEmitter的私有属性
    EventEmitter.call(this)
}
// 进行原型继承, 废弃的API
// Object.setPrototypeOf(sunC.prototype, superC.prototype)
// sun.prototype.__proto__ = super.prototype

// 原型继承
util.inherits(Bell,EventEmitter);

let sIn = (p1,p2)=> {
    console.log('sIn',p1,p2);
}
let tIn = (p1,p2)=> {
    console.log('tIn',p1,p2);
    
}
let kkk = ()=> {
    console.log('once')
}
let bell = new Bell()
bell.on('ring',sIn)
bell.on('ring',tIn)
bell.once('ring',kkk)

bell.emit('ring','param1','param2')
bell.removeAllListener('ring')
bell.emit('ring','param3','param4')
