/**
 * @param {number[]} nums
 * @return {number[][]}
 */


// sort arr

// for (i -> n-2)
// if (i>0 && a[i] === a[i+1])

// left = i+1, right = n-1
// while(left < right){
//   let sum = a[i] + a[left] + a[right]
//   if (sum === 0) return [i, left, right]
// if ( sum > 0) right--;
// else left++
// }


var threeSum = function(nums) {
    
    let len = nums.length;
    const result = [];

    // Sort the array
    nums.sort((a, b) => (a-b));

    for (let i=0; i<len-2; i++) {
        let left = i+1, right = len-1;

        if (i<0 && nums[i] === nums[i+1]) continue;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];


            if (sum === 0) {
                const zeroArray = [nums[i], nums[left], nums[right]];

                const isExist = result.some(
                items => 
                    items[0] === zeroArray[0] &&
                    items[1] === zeroArray[1] &&
                    items[2] === zeroArray[2] 
                );

                if(!isExist) {
                    result.push(zeroArray);
                }
            }

            if (sum > 0) right--;
            else left++;
        }
    }

    return result;
};