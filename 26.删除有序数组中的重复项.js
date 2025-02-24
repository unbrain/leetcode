/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // const len = nums.length;
  // if (len === 0) return 0;
  // const map = new Map();
  // let i = 0;
  // while (i < nums.length) {
  //   if (map.has(nums[i])) {
  //     nums.splice(i, 1);
  //   } else {
  //     map.set(nums[i], 1);
  //     i++;
  //   }
  // }
  // return nums.length;
  // [0,0,1,1,1,2,2,3,3,4]
  let slow = 0;
  let fast = 1;

  while (fast < nums.length) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
    }
    fast++;
  }

  return slow + 1
};
// @lc code=end

