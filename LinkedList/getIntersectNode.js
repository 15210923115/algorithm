/**
 * 判断两个单链表是否相交
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 双层循环寻址，逐一对比指针
// 方案1
var getIntersectionNode = function(headA, headB) {
    var value = null;
    var p1 = headA;
    
    while (p1) {
        var p2 = headB;
        while (p2) {
            if (p1 == p2) {
                value = p1;
                break;
            }
            p2 = p2.next;
        }

        if (value !== null) {
            break;
        }
        p1 = p1.next;
    }

    return value;
};

// 实际上，第 1 种实现方案还可以进一步优化。结合图 1②，2 个单链表相交有一个必然结果，即这 2 个链表的最后一个节点必定相同；反之，如果 2 个链表不相交，则这 2 个链表的最后一个节点必定不相同。
// 方案2
var getIntersectionNode_2 = function (headA, headB) {
    var p1 = headA;
    var p2 = headB;

    while(p1.next) {
        p1 = p1.next;
    }

    while(p2.next) {
        p2 = p2.next;
    }

    if (p1 === p2) {
        return true;
    }

    return false;
}