let { FullStackExcetion, EmptyStackException } = require('../shared/constants');

class FixedMultiStack {
    
    constructor(stackSize){

        // 스택의 개수
        this.numOfStacks = 3; 

        // 스택의 사이즈
        this.stackSize = stackSize 

        // 스택의 데이터를 저장할 배열
        this.values = new Array(this.numOfStacks * this.stackSize).fill(0);

        // 각스택의 현재 사이즈를 저장할 배열
        this.sizes = new Array(this.numOfStacks).fill(0); 

    }
    
    isEmpty(stackNum){
        return this.sizes[stackNum] == 0;
    }

    isFull(stackNum){
        return this.sizes[stackNum] == this.stackSize;
    }

    getTopIndex(stackNum){
        const offset = this.stackSize * stackNum;
        const size = this.sizes[stackNum];
        return offset + size - 1;
    }

    push(stackNum, data){
        if (this.isFull(stackNum)){
            throw new FullStackExcetion();
        }

        this.values[this.getTopIndex(stackNum) + 1] = data;
        this.sizes[stackNum]++;
    }

    pop(stackNum){
        if(this.isEmpty(stackNum)){
            throw new EmptyStackException();
        }
        const top = this.getTopIndex(stackNum);
        const data = this.values[top];
        this.values[top] = 0;
        this.sizes[stackNum]--;
        return data;
    }

    peek(stackNum){
        if(this.isEmpty(stackNum)){
            throw new EmptyStackException();
        }
        return this.values[this.getTopIndex(stackNum)]
    }
}

module.exports = FixedMultiStack;

function test(){
    const ms = new FixedMultiStack(5);
    try {
        ms.push(0, 1);
        ms.push(0, 2);
        ms.push(0, 3);
        ms.push(0, 4);
        ms.push(0, 5);

        ms.push(1, 11);
        ms.push(1, 12);
        ms.push(1, 13);
        ms.push(1, 14);
        ms.push(1, 15);
    } catch (error) {
        console.log("It's full");
    }

    try {
        console.log("Stack #0: " + ms.pop(0));
        console.log("Stack #0: " + ms.pop(0));
        console.log("Stack #0: " + ms.peek(0));
        console.log("Stack #0: " + ms.pop(0));
        console.log("Stack #0: " + ms.isEmpty(0));
        console.log("Stack #0: " + ms.pop(0));
        console.log("Stack #0: " + ms.pop(0));
        console.log("Stack #0: " + ms.isEmpty(0));

        console.log("Stack #1: " + ms.pop(1));
        console.log("Stack #1: " + ms.pop(1));
        console.log("Stack #1: " + ms.peek(1));
        console.log("Stack #1: " + ms.pop(1));
        console.log("Stack #1: " + ms.isEmpty(1));
        console.log("Stack #1: " + ms.pop(1));
        console.log("Stack #1: " + ms.pop(1));
        console.log("Stack #1: " + ms.isEmpty(1));
    } catch (error) {
        console.log("It's empty");
    }
}

test();