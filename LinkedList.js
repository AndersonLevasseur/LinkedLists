const Node = require('./Node.js');
class LinkedList {
  #head;
  #size;

  constructor() {
    this.#head = null;
    this.#size = 0;
  }

  // Adds an element to the head of the linked list and returns nothing
  push(element) {
    // element is the contents of the node
    let newNode = new Node(element);
    // link is the next node, but if there isn't one it needs to be null
    if (this.#head) {
      newNode.next = this.#head;
    }

    this.#head = newNode;
    this.#size++;
  }

  // Removes and returns the element at the head of the linked list
  pop() {
    let selectedNode = this.#head;
    if (!!this.#head) {
      // reassign this.haed
      this.#head = this.#head.next;
      // remove it 
    } else {
      throw "Nothing to Remove";
    }
    this.#size--
    return selectedNode;
  }

  // Returns the element at the head of the linked list without altering the list
  peek() {
    let firstNode = this.#head;
    if (!!this.#head) {
      return firstNode;
    } else {
      throw "Linked List Empty";
    }
    // copy firstNode

    // Return copy
  }

  // Adds an element to the point in the linked list defined by the zero 
  // indexed location parameter and returns nothing
  insertAt(element, location) {
    // count from #head
    // location = 'z'
    let newNode = new Node(element); 
    let count = 0;
    let currentNode = this.#head;
    let previousNode;
    while (count != location) {
      if (count < location) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        count++;
      } else {
        throw "location not found"
      }
    }
    // change previous link
    previousNode.next = element;
    // set link
    newNode.next = currentNode;
    // count goes up until it reaches location
    // as going up cylce through elements
    // breaks if you reach the end and count doesn't equal location
    this.#size++
  }

  // Removes the element at the point in the linked list defined by the zero 
  // indexed location parameter
  removeFrom(location) {
    this.#size--
  }

  // Removes and returns the first element that matches the element parameter
  // If no element is found, throws exception
  removeElement(element) {
    this.#size--
  }

  // Returns a comma and space separated list of values representing the contents of the
  // LinkedList. E.g. if I add the integers 1 through 4, it would return the following:
  // 1, 2, 3, 4
  // Empty LinkedLists return an empty string
  toString() {
    let results = "";
    let currentNode = this.#head;
    while (!!currentNode) {
      // look at contents of Node
      if (currentNode.next === null) {
        results = results.concat(currentNode.contents);
      } else {
        results = results.concat(currentNode.contents + ", ");
      }
      // append them to results
      currentNode = currentNode.next;
      // go to next Node
    }
    return results;
  }
}
module.exports = LinkedList;
