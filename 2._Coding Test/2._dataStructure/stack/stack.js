let stack = [];

stack.push(5);
stack.push(2);
stack.push(3);
stack.push(7);
stack.pop();
stack.push(1);
stack.push(4);
stack.pop();
console.log(stack);
let reversed = stack.reverse();
console.log(reversed);