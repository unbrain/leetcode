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
var removeElements = function (head, val) {
  // if (head === null) return head;
  // head.next = removeElements(head.next, val);
  // return head.val === val ? head.next : head
  // 使用哨兵节点 dummy 简化操作 
  let dummy = new ListNode(0);
  dummy.next = head;
  let cur = dummy;
  while(cur.next) {
    if(cur.next.val === val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return dummy.next;
};
// @lc code=end


