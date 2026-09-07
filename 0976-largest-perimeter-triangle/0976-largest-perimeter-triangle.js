/**
 * @param {number[]} nums
 * @return {number}
 */

function checkTriangle (a, b, c) {
    return ((c+b) > a);
};

function trianglePrimeter (a, b, c) {
    return (a+b+c);
};

var largestPerimeter = function(nums) {

    // length of the array
    const len = nums.length;

    // sort the length
    nums.sort((a, b) => a-b);

    // console.log(nums);

    for (let i=(len-1); i>=2; i--) {

        let a = nums[i];
        let b = nums[i-1];
        let c = nums[i-2];

        if (checkTriangle(a, b, c)){
            result = trianglePrimeter(a, b, c);
            return result;
        }
    }

    return 0;
};