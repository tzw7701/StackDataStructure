

// Stacks are data structures that follow the Last-In-First-Out (LIFO) principle
class Stack {

  constructor() {

    // Is an array in which we store the value
    this.data = [];
    // Points to the top element index
    this.top = 0;
  }

  // Add an element to the stack
  push(element) {
    this.data[this.top] = element;
    this.top = this.top + 1;
  }

  // Return the length of the stack
  length() {
    return this.top;
  }

  // Get the top element of the stack
  peek() {
    return this.data[this.top - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.top === 0;
  }

  // Delete an element from the stack
  pop() {
    if (this.isEmpty() === false) {
      this.top = this.top - 1;
      return this.data.pop(); // removes the last element
    }
  }

  // Print the elements of the stack
  print() {
    var top = this.top - 1; // because top points to index where new element to be inserted
    while (top >= 0) {
      // print upto 0th index
      console.log(this.data[top]);
      top--;
    }
    console.log('----');

  }

  reverse() {
    this._reverse(this.top - 1);
  }
  _reverse(index) {
    if (index != 0) {
      this._reverse(index - 1);
    }
    console.log(this.data[index]);
  }
}

export default Stack;
