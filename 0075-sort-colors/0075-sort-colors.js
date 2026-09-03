/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function swapElem (nums, idx1, idx2) {

    [nums[idx1], nums[idx2]] = [nums[idx2], nums[idx1]];

}; 

var sortColors = function(nums) {
    let i=0, j=0, k=nums.length-1;

    while (j <=  k) {
        
        if (nums[j] === 0) {
            
            swapElem (nums, j, i);
            
            i++;
            j++;

        } else if (nums[j] === 1) {
            
            j++;

        } else if (nums[j] === 2) {

            swapElem (nums, j, k);
            
            k--;
        }
    }
};