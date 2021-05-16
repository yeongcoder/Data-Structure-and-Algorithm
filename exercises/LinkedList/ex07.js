const LinkedList = require("../../requires/LinkedList");


function main(){
    const l1 = new LinkedList();
    const n1 = l1.append(5);
    const n2 = l1.append(7);
    const n3 = l1.append(9);
    const n4 = l1.append(10);
    const n5 = l1.append(7);
    const n6 = l1.append(6);

    const l2 = new LinkedList();
    const m1 = l2.append(6);
    const m2 = l2.append(8);
    const m3 = l2.addNext(n4);

    //  (5) -> (7) -> (9) -> (10) -> (7) -> (6)
    l1.retrieve();
    //  (6) -> (8) -> (10) -> (7) -> (6)
    l2.retrieve();

    const n = getIntersection(l1, l2);

    if(n != null) {
        console.log("Intersection: " + n.data);
    } else {
        console.log("Not Found");
    }
}

main();

/**
 * 교차점 찾기 알고리즘
 * 시간복잡도: O()
 * 공간복잡도: O()
 */
function getIntersection(l1, l2){
    var len1 = getListLength(l1.getFirst());
    var len2 = getListLength(l2.getFirst());

    if(len1 > len2){
        l1 = l1.get(len1 - len2 + 1);
        l2 = l2.getFirst();
    } else if(len1 < len2){
        l1 = l1.getFirst();
        l2 = l2.get(len2 - len1 + 1);
    }

    while(l1 != null && l2 != null){
        if(l1 == l2){
            return l1;
        }
        l1 = l1.next;
        l2 = l2.next;
    }
    return null;
}

//  리스트의 길이를 반환하는 함수
function getListLength(node){
    let total = 0;
    while(node != null){
        total++;
        node = node.next;
    }
    return total;
}