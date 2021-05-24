class Node {
    constructor(data = null){
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.size = 0;
    }
    pop(){
        if(this.top == null){
            throw new Error("Stack Empty Error");
        }
        let item = this.top.data;
        this.top = this.top.next;
        this.size--;
        return item;
    }
    push(data){
        let node = new Node(data);
        node.next = this.top;
        this.top = node;
        this.size++;
    }
    peek(){
        if(this.top == null) {
            throw Error("Stack Empty Error");
        }
        return this.top.data;
    }
    isEmpty(){
        return this.top == null;
    }
}

module.exports = Stack;