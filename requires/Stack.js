class Node {
    constructor(data = null){
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
    }
    pop(){
        if(this.top == null){
            throw new Error("Stack Empty Error");
        }
        let item = this.top.data;
        this.top = this.top.next;
        return item;
    }
    push(data){
        let node = new Node(data);
        node.next = this.top;
        this.top = node;
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