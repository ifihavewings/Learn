1. 报错 Class constructor EventEmitter cannot be invoked without 'new'
        当用ES6语法class关键字定义一个类，并且导出这个类。在另一个文件导入，直接EventEmitter.call(this)，报错
        如果携程ES5的语法，function EventEmitter去定义，则不会报错
        