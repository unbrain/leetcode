/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  // 1. 使用栈
  const stack = []

  // 用来存储括号对应关系
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  for (const cur of s) {
    if (map[cur]) {
      stack.push(cur)
    }
    else {
      if (cur !== map[stack.pop()]) {
        return false
      }
    }
  }
  return stack.length === 0
}
// @lc code=end

/**
思路：
1. 使用栈
2. 遍历字符串，如果是左括号则入栈，否则出栈并判断是否匹配
3. 最后判断栈是否为空
*/
