//const Stack = require("../../requires/Stack");
const { EmptyStackException, IndexOutOfBoundsException } = require("../../shared/constants");

/**
 * Stack에 데이터를 쌓다가 어느 지점에 이르면 새로운 스택에 저장하는 식으로 Set of Stacks을 구현하시오.
 * 내부적으로는 여러개의 스택으로 나뉘지만, push와 pop은 여전히 하나의 stack인것처럼 동작해야함
 * 추가적으로, 세트중 하나의 stack을 지정해서 데이터를 꺼내올 수 있는 popAt() 함수를 만드시오
 */

function main(){
    const sos = new SetOfStacks(3);
    sos.push(1);
    sos.push(2);
    sos.push(3);

    sos.push(4);
    sos.push(5);
    sos.push(6);
    
    sos.push(7);
    sos.push(8);

    console.log(sos.popAt(0));
    console.log(sos.popAt(1));
}


/**
 * Set of Stacks 구현: popAt()함수를 가지고있는 구조
 * 시간복잡도: O()
 * 공간복잡도: O()
 */
class Node {
    constructor(data){
        this.data = data;
        this.below = null;
        this.above = null;
    }
}

class Stack {
    constructor(capacity){
        this.capacity = capacity;
        this.size = 0;
        this.top = null
        this.bottom = null;
    }

    isEmpty(){return this.size == 0;}
    isFull(){return this.size == this.capacity;}
    //size(){return this.size;}

    push(data){
        if(this.isFull()){
            throw new FullStackExcetion();
        }
        const node = new Node(data);
        this._push(node);
    }
    _push(node){
        if(this.isFull()){
            throw new FullStackExcetion();
        }

        if(this.isEmpty()){
            this.top = node;
            this.bottom = node;
        } else {
            this.top.above = node;
            node.below = this.top;
            this.top = node;
        }
        this.size++;
    }
    pop(){
        if(this.isEmpty()){
            throw new EmptyStackException();
        }
        const data = this.top.data;
        this.top = this.top.below;
        if(this.top == null){
            this.bottom = null;
        } else {
            this.top.above = null;
        }
        this.size--;
        return data;
    }
    popBottom(){
        if(this.isEmpty()){
            throw new EmptyStackException();
        }
        const node = this.bottom;
        this.bottom = this.bottom.above;
        if(this.bottom == null) {
            this.top = null;
        } else {
            this.bottom.below = null;
        }
        this.size--;
        return node;
    }
}

class SetOfStacks {
    constructor(capacity){
        this.capacity = capacity;
        this.stacks = new Array();
    }

    getLastStack(){
        if(this.stacks.size == 0) return null;
        return this.stacks[this.stacks.length - 1];
    }

    addStack(){
        this.stacks.push(new Stack());
    }

    removeLastStack(){
        this.stacks.splice(this.stacks.length - 1, 1);
    }

    push(data){
        let last = this.getLastStack();
        if (last == null || last.size == this.capacity){
            this.addStack();
            last = this.getLastStack();
        }
        last.push(data);
    }

    pop(){
        const last = this.getLastStack();
        if(last == null || last.isEmpty()){
            throw new EmptyStackException();
        }
        const data = last.pop();
        if(last.isEmpty()){
            this.removeLastStack();
        }
        return data;
    }

    popAt(index){
        if(this.stacks.size <= 0){
            throw new EmptyStackException();
        }
        if(index < 0 || index >= this.stacks.size){
            throw new IndexOutOfBoundsException();
        }
        const stack = this.stacks[index];
        if(stack == null || stack.isEmpty()){
            throw new EmptyStackException();
        }
        const data = stack.pop();
        this.shiftLeft(index);
        return data;
    }

    shiftLeft(index){
        if(index < this.stacks.size - 1){
            const right = this.stacks[index + 1];
            const left = this.stacks[index];
            try {
                left.push(right.popBottom());
            } catch (error) {
                console.log(error.message);
            }
            if(right.isEmpty()){
                this.stacks.splice(index + 1, 1);
            }
            this.shiftLeft(index + 1);
        }
    }
}

main();
