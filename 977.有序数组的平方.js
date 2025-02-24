/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const arr = [];
  let left = 0;
  let right = nums.length - 1;

  while(left <= right) {
    const leftNum = nums[left] ** 2;
    const rightNum = nums[right] ** 2;

    if(leftNum > rightNum) {
      arr.unshift(leftNum);
      left++;
    } else{
      arr.unshift(rightNum);
      right--;
    }
  }

  return arr;
};
// @lc code=end

