/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let five = 0, ten = 0;
  for(let i = 0; i < bills.length; i++) {
    const cur = bills[i];
    if(cur === 5) {
      five++;
    } else if(cur === 10) {
      if(five === 0) return false;
      five--;
      ten++;
    } else {
      if(five > 0 && ten > 0) {
        five--;
        ten--;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false
      }
    }
  }
  return true
};
// @lc code=end

