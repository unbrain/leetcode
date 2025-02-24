/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  let res = 0
  for (const num of nums) {
    res ^= num
  }
  return res
}
// @lc code=end
/**
思路：
1. 使用异或运算
2. 0 和任何数异或结果是这个数本身
3. 两个相同的数异或结果是 0
4. 时间复杂度 O(n)
5. 空间复杂度 O(1)
*/
