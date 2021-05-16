/**
 * 첫번째 노드와는 별도의 관리용 노드인 헤더노드를 가진 구조
 * 첫번째 노드를 지우더라도 관리용 헤더노드가 있어 다음 노드를 첫번째 노드로 참조가능
 * 
 * HEAD
 * () -> (1) -> (2) -> (3)
 */
class Node {
    constructor(data = null){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.header = new Node();
    }

    //  첫번째 노드를 반환하는 메서드
    getFirst(){
        return this.header.next;
    }

    //  인덱스에 해당하는 노드를 반환하는 메서드
    get(index){
        let node = this.header;
        for(let  i = 0; i < index; i++){
            node = node.next;
        }
        return node;
    }

    //  노드를 추가하는 메서드
    append(data){
        let endNode = new Node(data);
        let currentNode = this.header;
        while(currentNode.next != null){
            currentNode = currentNode.next;
        }
        currentNode.next = endNode;
        return endNode;
    }

    //  노드를 삭제하는 메서드
    delete(data){
        let currentNode = this.header;
        while(currentNode.next != null){
            if(currentNode.next.data == data){
                currentNode.next = currentNode.next.next;
            } else {
                currentNode = currentNode.next;
            }
        }
        return;
    }

    //  연결된 모든 노드를 출력하는 메서드
    retrieve(){
        let currentNode = this.header.next;
        while(currentNode.next != null){
            process.stdout.write("("+currentNode.data+")" + " -> ");
            currentNode = currentNode.next;
        }
        process.stdout.write(`(${currentNode.data})\n`);
        return;
    }

    //  인자로 받은 링크드리스트를 현재 리스트의 다음요소로 추가하는 함수
    addNext(node){
        let currentNode = this.header;
        while(currentNode.next != null){
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }
}

module.exports = LinkedList;