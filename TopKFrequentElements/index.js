var topKFrequent = function (nums, k) {
    if(nums.length == 1){
        return nums;
    }
    let frequent = {};
    let resultArr = [];
    for(let i = 0; i < nums.length; i++) {
        if(frequent[nums[i]]){
            frequent[nums[i]] += 1;
        }else{
            frequent[nums[i]] = 1;
        }
    }
    frequent = Object.entries(frequent).sort((a, b) => b[1] - a[1])
    for(let j = 0; j<k; j++){
        resultArr.push(Number(frequent[j][0]))
    }

    return resultArr;
};

console.log(topKFrequent([1,2,2,3,4,3,4], 2));