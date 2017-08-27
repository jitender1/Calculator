
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
        this.top = this.top -1
        return this.store.pop()

    }
  }
  isEmpty(){
    return this.top >=0 ? false : true
  }
  Top(){
    if(this.top >= 0 ){
      return this.store.slice(-1)[0]
    }else{
      return 0
    }
  }
  empty(){
    while(!this.isEmpty()){
      this.pop()
    }

  }
}

var operators = new Set()
operators.add('+')
operators.add('-')
operators.add('/')
operators.add('*')
var stack = new Stack()

var evaluateExpr = function(){
  if(operators.has(stack.Top())){
    stack.pop()
  }

  var operand1 = parseInt(stack.pop())
  while(true){

    if(stack.isEmpty()){
      return operand1
    }
    var operator = stack.pop()
    if(stack.isEmpty()){
      return operand1
    }
    var operand2 = parseInt(stack.pop())

    switch(operator){
      case '+':
        operand1 = operand1 + operand2
        break
      case '-':
        operand1 = operand2 - operand1
        break
      case '*':
        operand1 = operand1 * operand2
        break
      case '/':
        operand1 = operand2 / operand1
        break

    }
  }

}

var buttonPressed = function(){
  var text = document.getElementById("result").innerText
  var pressedText = event.target.innerText
  if(pressedText === 'C'){
      stack.empty()
      document.getElementById("result").innerText = null
  }else if (pressedText === '=') {
    result = evaluateExpr()
    stack.push(result)
    document.getElementById("result").innerText  = result
  }else{
    debugger
    if(operators.has(pressedText) || operators.has(stack.Top())){
      stack.push(pressedText)
    }else{
        stack.push(parseInt(stack.pop())*10+parseInt(pressedText))
    }
    document.getElementById("result").innerText = text + pressedText
  }

}

var stack = new Stack()
