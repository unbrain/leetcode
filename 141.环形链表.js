/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
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
function hasCycle(head) {
  let fast = head; let slow = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (fast === slow)
      return true
  }
  return false
}
// @lc code=end

/**
思路：
1. 快慢指针
2. 如果有环，快指针会追上慢指针
3. 时间复杂度 O(n)
4. 空间复杂度 O(1)
*/
