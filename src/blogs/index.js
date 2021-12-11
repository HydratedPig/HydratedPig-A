
 var Node = function (val, next) {
  this.val = val || null;
  this.next = next || null;
}

var MyLinkedList = function() {
  this.head = new Node();
  this._size = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (this._size < index) return -1;
  let node = this.head;
  while(index--) {
    node = node.next
  }
  return node.next.val
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  let next = this.head.next;
  const node = new Node(val, next);
  this.head.next = node;
  this._size++;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  let node = this.head;
  while (node.next) {
    node = node.next;
  }
  node.next = new Node(val);
  this._size++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  let node = this.head;
  while (node.next && index--) {
    node = node.next;
  }
  let next = node.next;
  const newNode = new Node(val, next);
  node.next = newNode;
  this._size++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  let node = this.head;
  while (node.next && index--) {
    node = node.next;
  }
  if (!node.next) return;
  let tempNode = node.next;
  node.next = tempNode.next;
  tempNode.next = null;
  this._size--;
};
let linkedList = new MyLinkedList();
 linkedList.addAtHead(1);
 linkedList.addAtTail(3);
 linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
console.log(linkedList.get(1));            //返回2
linkedList.deleteAtIndex(1);  //现在链表是1-> 3
 console.log(linkedList.get(1));            //返回3
