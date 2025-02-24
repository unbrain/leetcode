/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let res;
  while(right < nums.length) {
    sum += nums[right];
    while(sum >= target) {
      res = right - left + 1;
      sum -= nums[left];
      left++ 
    }
  }

  return res > nums.length ? 0 : res;
};
// @lc code=end

