const LinkedList = require("../../requires/LinkedList");

function main(){
    const l1 = new LinkedList();
    const n1 = l1.append(1);
    const n2 = l1.append(2);
    const n3 = l1.append(3);
    const n4 = l1.append(4);
    const n5 = l1.append(5);
    const n6 = l1.append(6);
    const n7 = l1.append(7);
    const n8 = l1.append(8);
    l1.addNext(n4);

    const n = findLoop(l1.getFirst());

    if(n != null){
        console.log("Start of loop:", n.data);
    } else {
        console.log("Loop not found");
    }
}

main();

/**
 * 루프찾기 알고리즘: 플로이드의 토끼와 거북이
 * 시간복잡도: O(n)
 * 공간복잡도: O(n)
 */
function findLoop(head){
    let fast = head;
    let slow = head;

    //  먼저 출발할 토끼가 null이거나 끝노드에 도착하면 루프가 아니므로 해당 조건 추가
    while(fast != null && fast.next != null){
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow){
            break;
        }
    }

    //  먼저 출발할 토끼가 null이거나 끝노드에 도착하면 루프가 아니므로 null 반환
    if (fast == null || fast.next == null){
        return null;
    }

    fast = head;

    while(fast != slow){
        fast = fast.next;
        slow = slow.next;
    }

    return fast;
}