/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0)
    let current = dummyHead
    let carry = 0

    let p1 = l1 , p2 = l2

    while(p1 !== null || p2 !== null || carry !== 0){

        let val1 = (p1 !== null) ? p1.val : 0
        let val2 = (p2 !== null) ? p2.val : 0

        let sum = val1 + val2 + carry
        carry = Math.floor(sum/ 10)
        let digit = sum % 10

        current.next = new ListNode(digit)

        current = current.next
        if(p1 !== null) p1 = p1.next
        if(p2 !== null)  p2 = p2.next

    }

    return dummyHead.next
};