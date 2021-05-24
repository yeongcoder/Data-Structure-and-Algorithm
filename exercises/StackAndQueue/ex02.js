const Stack = require("../../requires/Stack");
const { EmptyStackException } = require("../../shared/constants");

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

    console.log(sos.pop());
    console.log(sos.pop());
    console.log(sos.pop());
    console.log(sos.pop());
}


/**
 * Set of Stacks 구현
 * 시간복잡도: O()
 * 공간복잡도: O()
 */
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
}

main();
