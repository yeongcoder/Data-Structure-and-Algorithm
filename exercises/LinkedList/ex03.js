const LinkedList = require("../../dataStructures/linkedList");

function main(){
    const ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    ll.retrieve();
    deleteNode(ll.get(3));
    ll.retrieve();
}

main();

/**
 * 중간 노드를 삭제하는 알고리즘
 * 시간복잡도: O(1)
 * 공간복잡도: O(1)
 */
function deleteNode(node){
    if(node == null || node.next == null) return null;
    let next = node.next;
    node.data = next.data;
    node.next = next.next;
    return;
}