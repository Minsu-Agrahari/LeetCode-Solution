/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findErrorNums = function(nums) {
    
    const set = new Set();
    const result = [];
    let uniSum = 0, totalSum = 0, len = nums.length;

    for (let i=0; i<nums.length; i++) {
        if (set.has(nums[i])) {
            result.push(nums[i]); // repeated element
        }else{
            uniSum += nums[i];
            set.add(nums[i]);
        }

    }

    totalSum = (len * (len+1))/2;
    const uniElem = totalSum - uniSum;
    
    result.push(uniElem);

    return result;
};