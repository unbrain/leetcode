/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
function LRUCache(capacity) {
  this.cache = new Map()
  this.capacity = capacity
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    const value = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, value)
    return value
  }
  else {
    return -1
  }
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key)
    this.cache.set(key, value)
  }
  else if (this.cache.size < this.capacity) {
    this.cache.set(key, value)
  }
  else {
    this.cache.delete(this.cache.keys().next().value)
    this.cache.set(key, value)
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
/**
思路：
1. 使用 Map
2. get 时，如果有 key，先删除再添加，返回值
3. put 时，如果有 key，先删除再添加，如果没有 key，且缓存未满，直接添加，否则删除第一个 key，再添加
4. 时间复杂度 O(1)
5. 空间复杂度 O(n)
*/
