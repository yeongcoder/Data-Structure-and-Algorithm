const MultiStack = require("../requires/MultiStack");

function test(){
    //  기본사이즈가 5인 스택을 3개 가지고 있는 멀티 스택 자료구조
    const ms = new MultiStack(3, 5);
    try {
        ms.push(0, 1);
        ms.push(0, 2);
        ms.push(0, 3);
        ms.push(0, 4);
        ms.push(0, 5);
        ms.push(0, 6);
        ms.push(0, 7);
        ms.push(0, 8);
        ms.push(0, 9);

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
        console.log("Stack #0: " + ms.pop(0));
        console.log("Stack #0: " + ms.pop(0));
        console.log("Stack #0: " + ms.pop(0));
        console.log("Stack #0: " + ms.pop(0));
        console.log("Stack #0: " + ms.pop(0));
        console.log("Stack #0: " + ms.pop(0));
        console.log("Stack #0: " + ms.pop(0));

        console.log("Stack #1: " + ms.pop(1));
        console.log("Stack #1: " + ms.pop(1));
        console.log("Stack #1: " + ms.pop(1));
        console.log("Stack #1: " + ms.pop(1));
        console.log("Stack #1: " + ms.pop(1));
    } catch (error) {
        console.log("It's empty");
    }
}

test();
