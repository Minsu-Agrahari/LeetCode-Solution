/**
 * @param {number[][]} mat
 * @return {number[]}
 */

function populateMap (map, mat) {

    const row = mat.length;
    const col = mat[0].length;

    for (let i=0; i<row; i++) {
        for (let j=0; j<col; j++) {

            let loc = i + j;

            if (!map.has(loc)) {
                map.set(loc, []);
            }

            map.get(loc).push(mat[i][j]);
        }
    }
}

function digonalMatrix (map) {
    
    let result = [];

    for (let [key, value] of map) {
        if (key % 2 == 0) { // even
            result.push(value.reverse());
        }else{
            result.push(value);
        }
    }

    return result.flat();
}

var findDiagonalOrder = function(mat) {
    const map = new Map();

    populateMap (map, mat); 
    let result = digonalMatrix(map);

    return result; 
};