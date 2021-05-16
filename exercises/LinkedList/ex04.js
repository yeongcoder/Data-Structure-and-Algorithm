const LinkedList = require("../../requires/LinkedList");


function main(){
    
}

main();

/**
 * 특정 값에 따라 나누기: 두줄로 세우기
 * 시간복잡도: O(n)
 * 공간복잡도: O(1)
 */
function partitionTwoLine(n, x){
    let s1 = null;
    let e1 = null;
    let s2 = null;
    let e2 = null;

    while(n != null){
        let next = n.next;
        n.next = null;
        if(n.data < x){
            if(s1 == null){
                s1 = n;
                e1 = s1;
            } else {
                e1.next = n;
                e1 = n;
            }
        } else {
            if(s2 == null){
                s2 = n;
                e2 = s2;
            } else {
                e2.next = n;
                e2 = n;
            }
        }
        n = next;
    }

    if(s1 == null) return s2;

    e1.next = s2;
    return s1;
}

/**
 * 특정 값에 따라 나누기: 앞뒤로 붙이기
 * 시간복잡도: O(n)
 * 공간복잡도: O(1)
 */
function partitionAttach(n, x){
    let head = n;
    let tail = n;
    while(n != null){
        let next = n.next;
        n.next = null;
        if(n.data < x){
            n.next = head;
            head = n;
        } else {
            tail.next = n;
            tail = n;
        }
        n = next;
    }
    return head;
}