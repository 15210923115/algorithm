/**
 * 单链表
 */
function LinkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
    }

    let length = 0;// 列表长度
    let head = null;// 记录头节点（第一个元素的引用）

    // 向列表尾部添加一个新的项
    this.append = function (element) {
        let node = new Node(element);
        let current = undefined;
        if (head === null) {
            head = node;
        } else {
            current = head;
            // 循环列表，直到找到最后一项
            while(current.next) {
                current = current.next;
            }

            // 找到最后一项，将其next赋值为node，建立链接
            current.next = node;
        }

        length++;
    };
    
    // 向列表的特定位置插入一个新的项
    this.insert = function (position, element) {
        if (position > -1 && position <= length) {
            let node = new Node(element);
            let current = head;
            let previous = undefined;
            let index = 0;

            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }

            length++;

            return true;
        } else {
            return false;
        }
    };

    // 从列表的特定位置移除一项，并返回被移除的项
    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            
            let current = head;// 默认当前节点为头节点
            let previous = undefined;// 前一个节点
            let index = 0;
            
            if (position === 0) {
                // 移除第一项
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;// 最后一次循环的时候，previous指向的就是position位置元素的前一个元素
                    current = current.next;// 最后一次循环的时候，current指向的就是position位置的元素
                }

                // 将previous与current的下一项链接起来，跳过current，从而移除它（当前元素会被丢弃在内存中，等待被垃圾回收器清楚）
                previous.next = current.next;
            }

            length--;

            return current.element;

        } else {
            return null;
        }
    };
    
    // 从列表中移除一项
    this.remove = function (element) {
        let index = this.indexOf(element);
        return this.removeAt(index);
    };

    // 返回元素在列表中的索引，如果列表中没有该元素，则返回-1
    this.indexOf = function (element) {
        let current = head;
        let index = 0;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }

        return -1;
    };

    this.isEmpty = function () {
        return length === 0;
    };

    this.size = function () {
        return length;
    };

    // 获取第一个元素
    this.getHead = function () {
        return head;
    };

    this.toString = function () {
        let current = head;
        let string = '';

        while (current) {
            string += current.element + (current.next ? 'n' : '');
            current = current.next;
        }
        
        return string;
    };

    this.print = function () {
        let current = head;
        let result = [];
        while (current) {
            result.push(current.element);
            current = current.next;
        }
        
        console.log(result);
    };
}

let single = new LinkedList();
single.append('a');
single.append('b');
single.append('c');
console.log(single.indexOf('c'));
console.log(single.getHead());
single.insert(2, 'd');
single.print();