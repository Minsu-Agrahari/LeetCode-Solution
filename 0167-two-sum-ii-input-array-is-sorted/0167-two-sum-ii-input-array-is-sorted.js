/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    let i=0, j=numbers.length-1;
    const idxArr = new Array(2);

    while (i < j) {

        let sum = numbers[i] + numbers[j];

        if(sum == target) {
            idxArr[0] = i+1;
            idxArr[1] = j+1;

            break;
        }else if (sum < target) {
            i++;
        }else {
            j--;
        }
    }

    return idxArr;
};