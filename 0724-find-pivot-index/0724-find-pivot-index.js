/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
    const len = nums.length;
    let leftSum = 0;
    let totalSum = 0;
    let rightSum = 0;

    for (let elem of nums) {
        totalSum += elem;
    }

    for (let idx = 0; idx<len; idx++) {

        rightSum = totalSum - leftSum - nums[idx];

        if (leftSum === rightSum) {
            return idx;
        }

        leftSum += nums[idx];
    }

    return -1;
};