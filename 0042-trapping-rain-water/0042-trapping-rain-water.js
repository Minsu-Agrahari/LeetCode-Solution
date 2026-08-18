/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function(height) {
    
    const len = height.length;

    const maxLeft = getMaxLeft(height);
    const maxRight = getMaxRight(height);

    return calculateWaterLevel(height, maxLeft, maxRight);
};

function getMaxLeft(height) {
    const len = height.length;
    const maxLeft = new Array(len).fill(0);

    maxLeft[0] = height[0];

    for (let i=1; i<len; i++) {
        maxLeft[i] = Math.max(maxLeft[i-1], height[i]);
    }

    return maxLeft;
}

function getMaxRight(height) {
    const len = height.length;
    const maxRight = new Array(len).fill(0)

    maxRight[len-1] = height[len-1];

    for (let i=len-2; i>=0; i--) {
        maxRight[i] = Math.max(maxRight[i+1], height[i]);
    }

    return maxRight;
}

function calculateWaterLevel(height, maxLeft, maxRight) {
    let waterLevel = 0;
    const len = height.length;

    for(let i=1; i<len-1; i++) {
        waterLevel += Math.min(maxLeft[i], maxRight[i]) - height[i];
    }

    return waterLevel;
}
