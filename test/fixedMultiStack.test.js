let FixedMultiStack = require("../requires/FixedMultiStack");

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