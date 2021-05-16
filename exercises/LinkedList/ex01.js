const LinkedList = require("../../requires/LinkedList");

function main(){
    
}

main();

/**
 * 중복된 노드값을 지우는 알고리즘
 * 시간복잡도: O(n^2)
 * 공간복잡도: O(1)
 */
function removeDups(node){

    //마지막노드를 지워버리면 node가 null이 되어버려서 에러가남 따라서 방어코드로 node를 검사하는 조건추가
    while(node != null && node.next != null){
        let runner = node;
        while(runner.next != null){
            if(node.data == runner.next.data){
                runner.next = runner.next.next;
            } else {
                runner = runner.next;
            }
        }
        node = node.next;
    }
}