// 实验失败。。。
function Person() {
    process.nextTick(()=> {
        this.speak()

    })
}
Person.prototype.learn = (fn)=>{
    this.speak = fn
}

let p = new Person()
p.learn(()=>{
    console.log('hello');
    
})