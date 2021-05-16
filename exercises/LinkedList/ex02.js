const LinkedList = require("../../requires/LinkedList");

function main(){
    
}

main();

/**
 * 뒤에서 k번째 노드를 반환하는 알고리즘: 반복문
 * 시간복잡도: O(n)
 * 공간복잡도: O(1)
 */
function kthToLastLoop(first, k){
    let node = first;
    let total = 0;
    while(node.next != null){
        total++;
        node = node.next;
    }
    node = header.next;
    for(let i = 1; i <= total - k + 1; i++){
        node = node.next;
    }
    return node;
}

/**
 * 뒤에서 k번째 노드를 반환하는 알고리즘: 재귀호출
 * 시간복잡도: O(n)
 * 공간복잡도: O(n)
 */
function kthToLastRecursive(node, k, refer = { count: 0 }){
    if(node == null){
        return null;
    }
    let found = kthToLastRecursive(node.next, k, refer);
    refer.count++;
    if(refer.count == k){
        return node;
    } else {
        return found;
    }
}

/**
 * 뒤에서 k번째 노드를 반환하는 알고리즘: 포인터
 * 시간복잡도: O(n)
 * 공간복잡도: O(1)
 */
function kthToLastPointer(node, k){
    let p1 = node;
    let p2 = node;
    for(let i = 1; i < k; i++){
        if(p1 == null) return null;
        p1 = p1.next;
    }
    while(p1.next != null){
        p1 = p1.next;
        p2 = p2.next;
    }
    return p2;
}