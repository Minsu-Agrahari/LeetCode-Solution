/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function getCharCount(word) {
    const count = new Array(26).fill(0);

    for (let char of word) {
        const index = char.charCodeAt(0) - 97;
        count[index] ++;
    }

    return count;
}

function getKey(word) {
    const count = getCharCount(word);

    return count.join('#');
}

var groupAnagrams = function(strs) {
    
    const map = new Map();

    for (let word of strs) {

        const key = getKey(word);

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(word);
    }

    return Array.from(map.values());
};