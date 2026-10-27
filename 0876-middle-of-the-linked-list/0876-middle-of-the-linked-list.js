/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let temp = head
    let count = 0
    while(temp !== null){
        count++
        temp = temp.next
    }
    temp = head
    let mid = Math.floor(count / 2) + 1
   for(let i = 1 ; i <= mid ; i++){
        
        if(i === mid){
            return temp
        }
        temp = temp.next
   }
};