var productExceptSelf = function (nums) {
  let map = new Map();
  let mapArray = [];
  for (let i = 0; i < nums.length; i++) {
    let tempMul = 1;
    map[nums[i]] = nums
      .toSpliced(i,1)
      .map((item) => (tempMul *= item))
      .slice(-1)[0];
      if(tempMul === 0){
        tempMul = 0;
      }
      mapArray.push(tempMul);
  }

  return mapArray;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1,1,0,-3,3]));
console.log(productExceptSelf([0,0]));
