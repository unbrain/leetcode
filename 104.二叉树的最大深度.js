/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
  const res = 0
  if (!root)
    return res
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
// @lc code=end

/**
思路：
1. 递归
2. 递归终止条件是 root 为空
3. 返回左右子树的最大深度 + 1
4. 时间复杂度 O(n)
5. 空间复杂度 O(n)
*/
