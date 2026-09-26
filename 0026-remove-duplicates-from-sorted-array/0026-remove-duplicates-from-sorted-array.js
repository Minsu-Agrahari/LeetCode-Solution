/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let i=0, j=(i+1), k=1;
    const len = nums.length;

    while (i <= j && j<len) {
        if (nums[i] !== nums[j]) {
            nums[i+1] = nums[j];
            i+=1;
            k+=1;
        }

        j++;
    }

    return k;
};