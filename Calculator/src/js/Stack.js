class Stack{

    constructor(){
      this.store = []
      this.top = -1
    }
    push(element){
      this.store.push(element)
      this.top = this.top +1
    }
    pop(){
      if(this.top <0){
        return 0
    }else{
        return this.store.pop()
        this.top = this.top -1
    }
  }
  Top(){
    if(top >= 0 ){
      return this.store.get(top)
    }else{
      return 0
    }
  }
}
module.exports.Stack = Stack
