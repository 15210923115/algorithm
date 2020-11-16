/**
 * 双向链表
 */

function Node (element) {
    this.element = element;
    this.next = null;
    this.prev = null;
}

function DoublyLinkedList () {
    this.length = 0;
    this.head = null;// 头节点
    this.tail = null;// 尾节点
}

DoublyLinkedList.prototype.append = function (element) {
    let node = new Node(element);
    if (this.head === null) {
        this.head = node;// 头节点
    } else {
        this.tail.next = node;
        node.prev = this.tail;
    }

    this.tail = node;// 设置尾节点

    this.length++;
};

DoublyLinkedList.prototype.insert = function (position, element) {
    let node = new Node(element);
    let current = this.head;
    let previous = null;
    let index = 0;
    if (position > -1 && position <= this.length) {
        if (position === 0) {
            if (this.head === null) {
                this.head = node;
                this.tail = node;
            } else {
                
            }
        } else if (position === this.length) {
            current = this.tail;
            current.next = node;
            node.prev = current;

            this.tail = node;// 设置尾节点
        } else {
            
            while (index++ < position) {
                previous = current;
                current = current.next;
            }

            previous.next = node;
            node.prev = previous;
            current.prev = node;
            node.next = current;
        }

        this.length++;

        return true;
    } else {
        return false;
    }
};

DoublyLinkedList.prototype.removeAt = function (position) {
    if (position > -1 && position < this.length) {
        let current = this.head;
        let previous = null;
        let index = 0;
        if (position === 0) {// 移除第0项
            this.head = current.next;

            if (this.length === 1) {
                this.tail = null;
            } else {
                this.head.prev = null;
            }
        } else if (position === this.length - 1) {// 移除最后一项
            current = this.tail;
            this.tail = current.prev;
            this.tail.next = null;
        } else {// 移除中间项
            while (index++ < position) {
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
            current.next.prev = previous;
        }

        this.length--;

        return current.element;

    } else {
        return null;
    }
};

DoublyLinkedList.prototype.print = function () {
    let current = this.head;
    let result = [];
    while (current) {
        result.push(current.element);
        current = current.next;
    }
    console.log(result);
};

let doubly = new DoublyLinkedList();
doubly.append('1');// 0
doubly.append('2');// 1
doubly.append('3');// 2
doubly.append('4');// 3
doubly.append('5');// 4
doubly.print();

doubly.removeAt(3);
doubly.print();

doubly.insert(3, 'x');
doubly.print();
