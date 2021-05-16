const Stack = require("../../requires/stack");
const LinkedList = require("../../requires/LinkedList");

class Node {
    constructor(data = null){
        this.data = data;
        this.next = null;
    }
}

function main(){
    const ll = new LinkedList();
    ll.append("m");
    ll.append("a");
    ll.append("d");
    ll.append("a");
    ll.append("a");
    ll.retrieve();
    console.log(isPalindrome(ll));
}

main();

/**
 * 연결리스트가 회문인지 확인하는 알고리즘: 거꾸로 정렬해서 비교하기
 * 시간복잡도: O(n)
 * 공간복잡도: O(1)
 */
function isPalindrome(head){
    let reversed = reverseAndClone(head);
    return isEqual(head, reversed);
}

//  노드를 거꾸로 만들어 반환하는 함수
function reverseAndClone(node){
    let head = null;
    while(node != null){
        let n = new Node(node.data);
        n.next = head;
        head = n;
        node = node.next;
    }
    return head;
}

//  두 연결리스트가 같은지 확인하는 함수
function isEqual(node01, node02){
    while(node01 != null && node02 != null){
        if(node01.data != node02.data){
            return false;
        }
        node01 = node01.next;
        node02 = node02.next;
    }
    return node01 == null && node02 == null;
}


/**
 * 연결리스트가 회문인지 확인하는 알고리즘: 두개의 포인트 토끼와 거북이
 * 시간복잡도: O(n)
 * 공간복잡도: O(n)
 */
function isPalindromeRabbitAndTurtle(head){
    let slow = head;
    let fast = head;
    let stack = new Stack();
    while(fast != null && fast.next != null){
        stack.push(slow.data);
        slow = slow.next;
        fast = fast.next.next;
    }
    if(fast != null){
        slow = slow.next;
    }
    while(slow != null){
        if(slow.data != stack.pop()){
            return false;
        }
        slow = slow.next;
    }
    return true;
}

/**
 * 연결리스트가 회문인지 확인하는 알고리즘: 재귀 호출
 * 시간복잡도: O(n)
 * 공간복잡도: O(n)
 */
function isPalindromeRecursive(head){
    let length = getListLength(head);
    let storage = isPalindromeRecursiveCurrent(head, length);
    return storage.result;
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

//  실제 재귀호출 될 함수
function isPalindromeRecursiveCurrent(head, length){
    if(head == null || length <= 0){
        return {
            node: head,
            result: true
        };
    } else if(length == 1){
        return {
            node: head.next,
            result: true
        };
    }

    let storage = isPalindromeRecursiveCurrent(head.next, length - 2);

    if(!storage.result || storage.node == null){
        return storage
    }

    storage.result = (head.data == storage.node.data);

    storage.node = storage.node.next;

    return storage;
}