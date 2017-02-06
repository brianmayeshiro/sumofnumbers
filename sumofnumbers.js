/**
 * PWOD 1
 * Created by brian on 2/5/2017.
 */

const nums = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFor(nums));

function sumWhile(nums){
  let total = 0;
  let i = 0;
  let end = nums.length;
  while (i < end) {
    total += nums[i];
    i++;
  }
  return total;
}

console.log(sumWhile(nums));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

console.log(sumRecursion(nums));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function memoize(memo, num){ return memo + num; }, 0);
}

console.log(sumTheSimpleWay(nums));
