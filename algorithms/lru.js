// https://leetcode.com/problems/lru-cache/

// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// - LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// - int get(int key) Return the value of the key if the key exists, otherwise return -1.
// - void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// - The functions get and put must each run in O(1) average time complexity.


export class LRU {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  getItem(key) {
    const item = this.cache.get(key);

    // Map keeps track of insertion order, this will refresh the item
    if (item) {
      this.cache.delete(key);
      this.cache.set(key, item);
    }
    return item;
  }

  putItem(key, val) {
    // delete to refresh the insertion order
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    // evict the oldest item in the cache
    else if (this.cache.size == this.capacity) {
      this.cache.delete(this.oldestItem);
    }

    this.cache.set(key, val);
  }

  get oldestItem() {
    return this.cache.keys().next().value;
  }
}

const cache = new LRU(5);
cache.putItem('a', 1);
cache.getItem('a');

