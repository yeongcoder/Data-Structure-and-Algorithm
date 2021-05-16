const LinkedList = require("../../requires/LinkedList");

class Node {
    constructor(data = null){
        this.data = data;
        this.next = null;
    }
}

function main(){
    
}

main();

/**
 * digit 합산 알고리즘:
 * 숫자가 거꾸로 담긴 두개의 연결리스트가 있다 
 * 두 연결리스트의 숫자를 정방향으로 합한뒤 같은 방법의 연결리스트로 반환해라.
 * (7) -> (4) -> (5) => 547
 * (5) -> (2) -> (3) => 325
 * ========================
 * (2) -> (7) -> (8) => 882
 * 시간복잡도: O(n)
 * 공간복잡도: O(n)
 */
function sumListsReverse(n1, n2, carry = 0){
    if(n1 == null && n2 == null && carry == 0){
        return null;
    }
    let result = new Node();
    let value = carry;
    if(n1 != null){
        value += n1.data;
    }
    if(n2 != null){
        value += n2.data;
    }
    result.data = value % 10;
    if(n1 != null || n2 != null){
        let next = sumListsReverse(
            n1 == null ? null : n1.next,
            n2 == null ? null : n2.next,
            value > 10 ? 1 : 0
        )
        result.next = next;
    }
    return result;
}

/**
 * digit 합산 알고리즘:
 * 숫자가 정방향으로 담긴 두개의 연결리스트가 있다.
 * 두 연결리스트의 숫자를 합한 결과를 연결리스트로 반환해라
 * (7) -> (4) -> (5) => 745
 * (5) -> (2) -> (3) => 523
 * ========================
 * (1) -> (2) -> (6) -> (8) => 1268
 */
function sumListsForward(n1, n2){
    let length1 = getListLength(n1);
    let length2 = getListLength(n2);

    if(length1 > length2){
        n2 = lPadList(n2, length1 - length2);
    } else {
        n1 = lPadList(n1, length2 - length1);
    }

    let storage = addList(n1, n2);
    if(storage.carry == 0){
        return storage.result;
    } else {
        storage.result = insertBefore(storage.result, storage.carry);
        return storage.result;
    }
}

// 노드를 계산하는함수
function addList(n1, n2){
    if(n1 == null && n2 == null){
        let storage = {
            carry: 0,
            result: null
        }
        return storage;
    }
    let storage = addList(n1.next, n2.next);
    let value = n1.data + n2.data + storage.carry;
    let data = parseInt(value % 10);
    storage.carry = parseInt(value / 10);
    storage.result = insertBefore(storage.result, data);

    return storage;
}

//  연결리스트의 길이를 반환하는 함수
function getListLength(node){
    let total = 0;
    while(node != null){
        total++;
        node = node.next;
    }
    return total;
}

//  새로운 노드를 생성하여 주어진 노드의 이전으로 추가하는 함수
function insertBefore(node, data){
    let before = new Node(data);
    if(node != null){
        before.next = node;
    }
    return before;
}

// 주어진 길이만큼 리스트 앞에 0을 데이터로 갖는 노드를 추가하는 함수
function lPadList(node, length){
    let head = node;
    for(let i = 0; i < length; i++){
        head = insertBefore(head, 0);
    }
    return head;
}