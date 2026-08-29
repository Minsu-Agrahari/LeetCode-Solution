/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let len = height.length;
    let start = 0;
    let end = len-1;

    let maxWaterFilled = 0;

    while(start < end){
        let width = (end - start);
        let maxHeight = Math.min(height[start], height[end]);
        let waterFilled = width * maxHeight;

        maxWaterFilled = Math.max(maxWaterFilled, waterFilled);

        if (height[start] < height[end]) {
            start++;
        }else end--;
    }  

    return maxWaterFilled;
};