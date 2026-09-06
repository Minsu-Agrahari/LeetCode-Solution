/**
 * @param {number[]} nums
 * @return {number}
 */

function prefixSumCal (nums) {
    let sumArr = [];
    let sum = 0;

    for (let elem of nums) {
        sum = sum + elem;
        sumArr.push(sum);
    }
    console.log(sumArr);
    return sumArr;
};

var pivotIndex = function(nums) {

    let prefixSum = [];
    let leftSum = 0, rightSum = 0;
    // const pivotIdx = 0;
    
    prefixSum = prefixSumCal (nums);
    const len = prefixSum.length;
    
    for (let idx = 0; idx<=len-1; idx++) {

        if (idx+1 >= len) {
            rightSum = 0;
        }else {
            rightSum = prefixSum[len-1] - prefixSum[idx];
        }
        
        if (idx - 1 <= -1) {
            leftSum = 0;
        }else {
            leftSum = prefixSum[idx-1];
        }

        // console.log(`element --> ${prefixSum[idx]} \n RightSum --> ${rightSum} \n LeftSum --> ${leftSum} \n`);

        if (leftSum === rightSum) {
            return idx;
        }
    }

    return -1;
};