/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

    // Two Pointer
    let slow = head , fast = head
    
    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next

        if(fast === slow){
            return true
        }
    }
    return false

    //Brute Force
    // let temp = head
    // let set = new Set
  

    // while(temp !== null){
    //     if(set.has(temp)){
    //         return true
    //     }
    //     set.add(temp)
    //     temp = temp.next

    // }
    // return false

};