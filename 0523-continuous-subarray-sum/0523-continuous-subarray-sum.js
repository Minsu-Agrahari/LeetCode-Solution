/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    
    const len = nums.length;
    const map = new Map();
    let sum = 0;

    map.set(0, -1); // edge case

    for (let i=0; i<len; i++) {
        
        sum = sum + nums[i];
        let remainder = sum % k;

        if (map.has(remainder)) {
            let idx = map.get(remainder);
            if ((i - idx) >= 2) {
                return true;
            }
        }else 
            map.set(remainder, i);
    }

    return false;
};