/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
function simplifyPath(path) {
  // 1. 使用栈
  const stack = []
  const paths = path.split('/')

  for (const path of paths) {
    if (path === '..') {
      stack.pop()
    }
    else if (path && path !== '.') {
      stack.push(path)
    }
  }

  return `/${stack.join('/')}`
}
// @lc code=end

/**
思路：
1. 使用栈
2. 遍历路径，如果是 '..' 则出栈，否则入栈
3. 最后返回 '/' + 栈.join('/')
*/
