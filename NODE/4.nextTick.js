function Person() {
    this.speak()
}
Person.prototype.speak = (fn)=>{
    this.speak = fn
}

let p = new Person()
p.speak(()=>{
    console.log('hello');
    
})