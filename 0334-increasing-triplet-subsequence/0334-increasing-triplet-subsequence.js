/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    
    const len = nums.length;

    let num1 = Number.MAX_SAFE_INTEGER;
    let num2 = Number.MAX_SAFE_INTEGER;
    let num3 = 0;

    for (let i=0; i<len; i++) {

        num3 = nums[i];

        if(num1 >= num3) {
            num1 = num3
        }else if (num2 >= num3) {
            num2 = num3;
        }else {
            return true;
        }
    }

    return false;
};