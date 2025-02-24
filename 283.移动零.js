/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 0 1
// [0,1,0,3,12]
// 1 2
// [1,0,0,3,12]
// 1 3
// [1,0,0,3,12]
// 2 4
// [1,3,0,0,12]
// 3 5
// [1,3,12,0,0]
var moveZeroes = function(nums) {
  let fast = 0;
  let slow = 0;

  while(fast < nums.length) {
    if(nums[fast]) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++
    }
    fast++;
  }
};
// @lc code=end

