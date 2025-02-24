/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const result = [];
  const len = nums.length;
  const backtrack = (start) => {
    const usedSet = new Set();  // 用于去重
    if(start === len) {
      result.push([...nums])
      return ;
    }
    for(let i = start; i< len; i++) {
      if(usedSet.has(nums[i])) {
        continue;
      }
      usedSet.add(nums[i]);
      [nums[start], nums[i]] = [nums[i], nums[start]];
      backtrack(start + 1);
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }

  backtrack(0);

  return result;
};
// @lc code=end

/**
思路：
1. 回溯法
2. 交换数组元素
3. 递归
4. 注意交换后需要交换回来
5. 递归终止条件是 start === len
6. 时间复杂度 O(n!)
7. 空间复杂度 O(n)
8. 用一个 Set 去重
*/
