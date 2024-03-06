var topKFrequent = function (nums, k) {
    let frequent = {};

    for(let i = 0; i < nums.length; i++) {
        if(frequent[nums[i]]){
            frequent[nums[i]] += 1;
        }else{
            frequent[nums[i]] = 1;
        }
    }
    console.log(Object.keys(frequent))
};

console.log(topKFrequent([1,1,1,2,2,3], 2));