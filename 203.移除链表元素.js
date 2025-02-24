/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
  // if (head === null) return head;
  // head.next = removeElements(head.next, val);
  // return head.val === val ? head.next : head
  // 使用哨兵节点 dummy 简化操作
  const dummy = new ListNode(0)
  dummy.next = head
  let cur = dummy
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
    }
    else {
      cur = cur.next
    }
  }

  return dummy.next
}
// @lc code=end
/**
思路：
1. 使用哨兵节点 dummy 简化操作
2. 遍历链表
3. 如果当前节点的下一个节点的值等于 val，删除下一个节点

*/
