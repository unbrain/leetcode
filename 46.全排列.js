/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = [];
  const len = nums.length;
  const backtrack = (start) => {
    if(start === len) {
      result.push([...nums])
      return ;
    }
    for(let i = start; i< len; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]];
      backtrack(start + 1);
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }

  backtrack(0);

  return result;
};

console.log(permute([1, 1, 3]))
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

*/
