/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
function invertTree(root) {
  if (!root)
    return null;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
  return root
}
// @lc code=end
/**
思路：
1. 递归
2. 交换左右子树
3. 时间复杂度 O(n)
4. 空间复杂度 O(n)
*/
