/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function swap (nums, i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}

function reverse (nums, target) {
    let left = target+1;
    let right = nums.length - 1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];

        left ++;
        right --;
    }
}

var nextPermutation = function(nums) {
    
    let len = nums.length;
    let target = -1;

    // nums(i-1) < nums (i)
    // Find target (i-1)
    for(let i=(len-1); i>=1; i--) {
        if (nums[i-1] < nums[i]) {
            target = (i-1);
            break;
        }
    }

    if (target != -1) {

        // next greater from the right (end of the array) of the target
        for (let i=(len-1); i>=(target+1); i--){
            if (nums[target] < nums[i]) {
                swap(nums, target, i);
                break;
            }
        }
    }

    reverse(nums, target);
};