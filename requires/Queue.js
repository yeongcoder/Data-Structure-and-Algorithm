let { NoSuchElementException } = require('../shared/constants');

class Node {

    constructor(data = null){
        this.data = data;
        this.next = null;
    }

}

class Queue {

    constructor(){
        this.first = null;
        this.last = null;
    }

    add(item){
        const t = new Node(item);

        //  마지막 요소가 존재하는 경우
        if(last != null){
            this.last.next = t;
        }

        this.last = t;

        //  첫번째 요소가 없는 경우 즉 Queue가 비어있는 경우
        if(this.first == null){
            this.fisrt = this.last;
        }
    }

    remove(){
        if(this.first == null){
            throw new NoSuchElementException();
        }

        const data = this.first.data;
        this.first = first.next;

        if(this.first == null){
            this.last = null;
        }

        return data;
    }

    peek(){
        if (this.first == null){
            throw new NoSuchElementException(); 
        }
        return this.first.data;
    }

    isEmpty(){
        return this.first == null;
    }
}

module.exports = Queue;