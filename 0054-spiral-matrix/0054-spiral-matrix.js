/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    
    let m = matrix.length; // rows
    let n = matrix[0].length; // columns

    let result = [];

    let top = 0, down = (m-1);
    let left = 0, right = (n-1);

    while (top <= down && left <= right) {
        
        // top 
        for (let i=left; i<=right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // right
        for (let i=top; i<=down; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // down
        if (top <= down) {
            for (let i=right; i>=left; i--) {
                result.push(matrix[down][i]);
            }
            down--;
        }

        if (left <= right) {
            for (let i=down; i>=top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
};