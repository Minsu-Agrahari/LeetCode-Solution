/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

var diagonalSort = function(mat) {

    const row = mat.length;
    const col = mat[0].length;

    const map = new Map();

    populateMap (map, mat); // populate the map
    sortMap (map); // sort array in map
    sortMat (map, mat); // repopulate the matrix

    // console.log("Matrix -> ", mat);   
    // console.log("Map -> ", map); 

    return mat;
};

function populateMap (map, mat) {

    let row = mat.length;
    let col = mat[0].length;

    for (let i=0; i<row; i++) {
        for (let j=0; j<col; j++) {

            let diff = (i-j);

            if(!map.has(diff)){
                map.set(diff, [])
            }

            map.get(diff).push(mat[i][j]);
        }
    }
};

function sortMap (map) {
    for (let arr of map.values()){
        arr.sort((a, b) => a-b);
    }
};

function sortMat (map, mat) {
    let row = mat.length;
    let col = mat[0].length;

    for (let i=0 ; i<row; i++) {
        for (let j=0; j<col; j++) {

            let diff = i-j;

            mat[i][j] = map.get(diff).shift();
        }
    }
};
