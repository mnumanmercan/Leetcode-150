var productExceptSelf = function (nums) {
  let zeroIndex,
    iterator = 1,
    zeroCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      zeroCount = zeroCount + 1;
      zeroIndex = i;
      nums[i] = 1;
    } else {
      iterator = iterator * nums[i];
    }
  }
  if (zeroIndex >= 0 && zeroCount == 1) {
    for (let i = 0; i < nums.length; i++) {
      if (zeroIndex == i) {
        nums[i] = iterator;
      } else {
        nums[i] = 0;
      }
    }
  } else if (zeroCount > 1) {
    for (let i = 0; i < nums.length; i++) {
      nums[i] = 0;
    }
  } else {
    for (let i = 0; i < nums.length; i++) {
      nums[i] = iterator / nums[i];
    }
  }
  return nums;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
console.log(productExceptSelf([0, 0]));
console.log(productExceptSelf([0, 2, 3, 4]));
