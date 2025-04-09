function topKFrequent(nums, k) {
  let map = {};


  for (let i = 0; i <= nums.length - 1; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]] += 1;
    }
  }
  let keys = Object.keys(map);
   
  keys.sort((a, b) => map[b] - map[a]);
  console.log(keys);

  let result = keys.slice(0, k).map(Number);

  return result;
}

topKFrequent([ 3, 3,4,5,5], 1);
