/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let len = nums.length;
    let result = [];
    let map = new Map();

    for (let i=0; i<len; i++){
        let missing = target - nums[i];

        if(map.has(missing)){
            result[0] = i;
            result[1] = map.get(missing);
        }else {
            map.set(nums[i], i);
        }
    }
    console.log(map);
    return result;
};