//Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

function pairFinder(nums, sum) {
  var pairs = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] + nums[j] == sum) {
        pairs.push([nums[i], nums[j]]);
      }
    }
  }
  console.log(pairs);
  return pairs;
}

pairFinder([1, 2, 3, 4, 5, 6, 7, 8, 9], 10);
