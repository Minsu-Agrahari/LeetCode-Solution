/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
    let len = height.length;

    let maxLeft_Ht = new Array(len).fill(0); maxLeft_Ht[0] = height[0];
    let maxRight_Ht = new Array(len).fill(0); maxRight_Ht[len-1] = height[len-1];

    // populate the max left/right Array
    for(let i=1; i<len; i++){
        maxLeft_Ht[i] = Math.max(maxLeft_Ht[i-1], height[i]);
    }

    for(let i=len-2; i>=0; i--){
        maxRight_Ht[i] = Math.max(height[i], maxRight_Ht[i+1]);
    }

    // water fill
    let waterLevel = 0;
    for(let i=1; i<len-1; i++) {
        waterLevel += Math.min(maxLeft_Ht[i], maxRight_Ht[i]) - height[i];
    }

    return waterLevel;
};