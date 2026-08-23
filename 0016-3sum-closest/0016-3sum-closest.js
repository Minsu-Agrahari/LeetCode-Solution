/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

    const len = nums.length;
    if(len < 3) return closestSum; // edge case

    let closestSum = nums[0] + nums[1] + nums[2];
    nums.sort((a, b) => a-b); // sort

    for (let fix=0; fix<len-2; fix++) {

        let i=fix+1, j=len-1;

        while(i < j){ // 2 pointer

            let sum = nums[fix] + nums[i] + nums[j];

            if(Math.abs(target - sum) < Math.abs(target - closestSum)) {
                closestSum = sum;
            }

            if(sum > target){
                j--;
            }else{
                i++;
            }
        }
    }

    return closestSum;
};