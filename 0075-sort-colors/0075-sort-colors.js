/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function countZero (nums){
    let zero = 0;
    for (let num of nums) {
        if (num === 0){
            zero++;
        }
    }
    return zero;
}

function countOne (nums){
    let one = 0;
    for (let num of nums) {
        if (num === 1){
            one++;
        }
    }
    return one;
}

function countTwo (nums){
    let two = 0;
    for (let num of nums) {
        if (num === 2){
            two++;
        }
    }
    return two;
}

function fillArray (elem, counts, result){
    for(let i=0; i<counts; i++) {
        result.push(elem);
    }
}

var sortColors = function(nums) {
    const zero = countZero(nums);
    const one = countOne(nums);
    const two = countTwo(nums);

    nums.length = 0;

    fillArray(0, zero, nums);
    fillArray(1, one, nums);
    fillArray(2, two, nums);
    
};