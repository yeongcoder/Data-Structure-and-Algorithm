const Stack = require("../../requires/Stack");

/**
 * Stack을 구현하는데 push와 pop과 더불어 가장 작은 값을 반환하는 min함수를 같이 구현하시오
 * (단, 모든 함수들은 O(1)의 시간복잡도를 가져야 함)
 */

function main(){
    // const stack = new StackWithMin();
    // stack.push(3);
    // stack.push(5);
    // stack.push(1);
    // stack.push(2);
    // console.log("min: " + stack.min());
    // console.log(stack.pop().value);
    // console.log(stack.pop().value);
    // console.log("min: " + stack.min());

    const stack = new StackWithMin2();
    stack.push(3);
    stack.push(5);
    stack.push(1);
    stack.push(2);
    console.log("min: " + stack.min());
    console.log("pop: " + stack.pop());
    console.log("min: " + stack.min());
    console.log("pop: " + stack.pop());
    console.log("min: " + stack.min());
    console.log("pop: " + stack.pop());
    console.log("min: " + stack.min());
}

/**
 * Stac의 작은값 찾기: 작은값을 저장하는 노드객체로 구현
 * 시간복잡도: O(1)
 * 공간복잡도: O(n)
 */
class NodeWithMin {
    constructor(v, min){
        this.value = v;
        this.min = min;
    }
}

class StackWithMin extends Stack{
    constructor(){
        super()
    }

    min(){
        if(this.isEmpty()){
            return Number.MAX_SAFE_INTEGER;
        } else {
            return this.peek().min;
        }
    }

    push(value){
        const newMin = Math.min(value, this.min());
        super.push(new NodeWithMin(value, newMin));
    }
}

/**
 * Stac의 작은값 찾기: 작은값을 저장하는 별도의 스택으로 구현
 * 시간복잡도: O(1)
 * 공간복잡도: O(n)
 */
class StackWithMin2 extends Stack{
    constructor(){
        super();
        this.s2 = new Stack();
    }

    min(){
        if(this.s2.isEmpty()){
            return Number.MAX_SAFE_INTEGER;
        } else {
            return this.s2.peek();
        }
    }

    push(value){
        if(value < this.min()){
            this.s2.push(value);
        }
        super.push(value);
    }

    pop(){
        const value = super.pop();
        if(value == this.min()){
            this.s2.pop();
        }
        return value;
    }
}

main();
