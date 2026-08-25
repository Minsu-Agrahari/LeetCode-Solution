/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// Transpose: swap matrix[i][j] with matrix[j][i] for the upper triangle
function transport(matrix) {
    let n = matrix.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
}

// Reverse each row in place
function swap_ij(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < Math.floor(col / 2); j++) {
            [matrix[i][j], matrix[i][col - j - 1]] = [matrix[i][col - j - 1], matrix[i][j]];
        }
    }
}

var rotate = function(matrix) {
    transport(matrix);
    swap_ij(matrix);
};