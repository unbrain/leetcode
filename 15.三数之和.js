/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if(nums.length < 3) {
    return [];
  }
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    console.log('i', i)
    if (nums[i] > 0) {
      break;
    }
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if(sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while(nums[left] === nums[left + 1]) {
          left++;
        }
        while(nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (sum < 0) {
        while(nums[left] === nums[left + 1]) {
          left++;
        }
        left++;
      } else {
        while(nums[right] === nums[right - 1]) {
          right--;
        }
        right--;
      }
    }
  }
  return result;
};

// @lc code=end
/**
思路：
三个中先指定一个 i，然后用双指针 left 和 right 分别指向 i 的下一个和数组最后一个元素。

1. 先排序
2. 三个指针，i, left, right
3. 如果nums[i] > 0, 则不可能有三数之和为0
4. 如果nums[i] === nums[i - 1], 则跳过
5. 如果三数之和为0，则添加到result中
6. 如果三数之和小于0，则left++
7. 如果三数之和大于0，则right--
8. 注意去重
*/
