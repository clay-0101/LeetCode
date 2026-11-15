/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {

    let cursor = head, count = 0

    while(cursor !== null && count < k){
        cursor = cursor.next
        count++
    }

    if(count < k){
        return head
    }

    let prev = null, curr = head , nextNode = null

    for(let i = 0 ; i < k ; i++){
        nextNode = curr.next
        curr.next = prev
        prev = curr
        curr = nextNode
    }

    head.next = reverseKGroup(curr , k)

    return prev
};