/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
  let pre = null; let cur = head
  while (cur.next) {
    if (cur.val === val) {
      if (pre) {
        pre.next = cur.next
      }
      else {
        head = cur.next
      }
    }
    else {
      pre = cur
      cur = cur.next
    }
  }

  return head
}
// @lc code=end
