/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0
}
// @lc code=end

/**
思路：
1. 2 的幂的二进制表示只含有一个 1
2. n & (n - 1) 可以去掉最低位的 1

*/
