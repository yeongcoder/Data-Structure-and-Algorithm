/**
 * 가변적으로 길이가 변화하는 멀티스택 자료구조
 */
let { FullStackExcetion, EmptyStackException } = require("../shared/constants");


class MultiStack {

    constructor(numOfStacks, defaultSize){

        const that = this;

        class StackInfo {
            constructor(start, stackSize){
                this.start = start;
                this.dataSize = 0;
                this.stackSize = stackSize;
            }
        
            //  인자로 받은 인덱스가 현재 스택요소에 해당하는 인덱스인지 확인 하는 함수
            isWithinStack(index){
                if(index < 0 || index >= that.values.length){
                    return false;
                }
                const virtualIndex = index < this.start ? index + that.values.length :
                    index;
                const end = this.start + this.stackSize;
                return this.start <= virtualIndex && virtualIndex < end;
            }
        
            //  스택의 마지막 인덱스를 반환하는 함수
            getLastStackIndex(){
                return that.adjustIndex(this.start + this.stackSize - 1);
            }
        
            //  스택에 포함된 마지막 데이터의 인덱스를 반환하는 함수
            getLastDataIndex(){
                return that.adjustIndex(this.start + this.dataSize - 1);
            }
        
            //  새로운 데이터가 들어갈 인덱스를 반환하는 함수
            getNewDataIndex(){
                return that.adjustIndex(this.getLastDataIndex() + 1);
            }
        
            isFull(){
                return this.dataSize == this.stackSize;
            }
        
            isEmpty(){
                return this.dataSize == 0;
            }
        }

        // 스택정보를 저장할 배열
        this.info = new Array(numOfStacks);
        for(let i = 0; i < numOfStacks; i++){
            this.info[i] = new StackInfo(defaultSize * i, defaultSize);
        }
        this.values = new Array(numOfStacks * defaultSize).fill(0);

    }

    expand(stackNum){
        const nextStack = (stackNum + 1) % this.info.length;
        this.shift(nextStack);
        this.info[stackNum].stackSize++;
    }

    shift(stackNum){
        const stack = this.info[stackNum];
        if(stack.dataSize >= stack.stackSize){
            const nextStack = (stackNum + 1) % this.info.length;
            this.shift(nextStack);
            stack.stackSize++;
        }
        let index = stack.getLastStackIndex();
        while(stack.isWithinStack(index, this.values)){
            this.values[index] = this.values[this.previousIndex(index)];
            index = this.previousIndex(index);
        }
        this.values[stack.start] = 0;
        stack.start = this.nextIndex(stack.start);
        stack.stackSize--;
    }

    //  전체 배열의 데이터가 얼마나 쌓였는지 확인하는 함수
    numberOfElements(){
        let totalDataSize = 0;
        for (var sd of this.info){
            totalDataSize += sd.dataSize;
        }
        return totalDataSize;
    }

    //  전체스택이 가득 찼는지 알아보는 함수
    allStackAreFull(){
        return this.numberOfElements() == this.values.length;
    }

    //  인자로 받은 인덱스를 values배열의 범위를 벗어나지 않게 바꿔주는 함수
    adjustIndex(index){
        const max = this.values.length;
        return ((index % max) + max) % max;
    }

    //  인자로 받은 인덱스의 다음 인덱스를 반환하는 함수
    nextIndex(index){
        return this.adjustIndex(index + 1);
    }

    //  인자로 받은 인덱스의 이전 인덱스를 반환하는 함수
    previousIndex(index){
        return this.adjustIndex(index - 1);
    }

    push(stackNum, value){
        if(this.allStackAreFull()){
            throw new FullStackExcetion();
        }
        const stack = this.info[stackNum];
        if (stack.isFull()){
            this.expand(stackNum);
        }
        this.values[stack.getNewDataIndex()] = value;
        stack.dataSize++;
    }

    pop(stackNum){
        const stack = this.info[stackNum];
        if(stack.isEmpty()){
            throw new EmptyStackException();
        }
        const last = stack.getLastDataIndex();
        const value = this.values[last];
        this.values[last] = 0;
        stack.dataSize--;
        return value;
    }

    peek(stackNum){
        const stack = this.info[stackNum];
        if(stack.isEmpty()){
            throw new EmptyStackException();
        }
        return this.values[stack.getLastDataIndex()];
    }
}

module.exports = MultiStack;
