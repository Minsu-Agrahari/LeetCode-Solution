/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    // Creating a HashMap
    const map = new Map();
    // Array of size 2
    const result = new Array(2);

    for(let i=0; i<numbers.length; i++) {

        let targetVal = target - numbers[i];

        if (map.has(targetVal)) {
            result[0] = map.get(targetVal) + 1;
            result[1] = (i+1);
            break;
        }else map.set(numbers[i], i);
    }

    return result;
};