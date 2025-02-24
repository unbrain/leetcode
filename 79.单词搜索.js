/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

/**
输入：board = [
["A","B","C","E"],
["S","F","C","S"],
["A","D","E","E"]
], 
word = "ABCCED"
输出：true
*/
var exist = function(board, word) {
  if(board.length === 0) return false;
  if(word.length === 0) return true;

  const rows = board.length;
  const cols = board[0].length;

  const find = (i, j, k) => {
    if(i < 0 || i > rows - 1 ||j <0 || j > cols-1 || board[i][j] !== word[k]) return false;
    const cur = board[i][j];
    if(k === word.length - 1) return true;
    board[i][j] = '';
    const res = find(i+1, j, k+1) || find(i-1, j, k+1) || find(i, j+1, k+1) || find(i, j-1, k+1)
    board[i][j] = cur;
    return res;
  }

  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      const res = find(i, j, 0);
      if(res) return true;
    }
  }
  return false;
};
// @lc code=end

