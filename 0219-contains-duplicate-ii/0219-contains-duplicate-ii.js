/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function(nums, k) {

    const len = nums.length;
    const map = new Map ();

    for (let i=0; i<len; i++) {

        let elem = nums[i];

        if (map.has(elem)) {
            const prevIdx = map.get(elem);

            if ((i - prevIdx) <= k) {
                return true;
            }
        }

        map.set(elem, i);
    }    

    return false;
};