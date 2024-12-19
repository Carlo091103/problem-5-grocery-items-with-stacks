// groceryStacks.js

class Stack {
  constructor() {
    this.items = [];
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  push(item) {
    this.items.push(item);
    console.log("Stack after push:", this.items);
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty. Cannot pop.");
      return null;
    }
    const poppedItem = this.items.pop();
    console.log("Stack after pop:", this.items);
    return poppedItem;
  }
}


const groceryStack = new Stack();

for (let i = 0; i < 5; i++) {
  const item = prompt(Enter grocery item ${i + 1}:);
  if (item) { //add check for empty input
    groceryStack.push(item);
  } else {
    console.log("Invalid input. Skipping this item.");
  }
}

console.log("\nFinal Stack:", groceryStack.items);

//Example of pop operation
groceryStack.pop();
