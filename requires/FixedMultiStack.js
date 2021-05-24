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
