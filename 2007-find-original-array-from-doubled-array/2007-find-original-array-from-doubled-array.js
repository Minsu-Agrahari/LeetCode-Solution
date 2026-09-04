/**
 * @param {number[]} changed
 * @return {number[]}
 */

// Populate frequency map
function mapPopulate(changed, map) {

    for (let elem of changed) {
        map.set(elem, (map.get(elem) || 0) + 1);
    }
}

// Build original array
function originalArr(changed, map, original) {

    for (let elem of changed) {

        // Already completely consumed
        if (!map.has(elem)) {
            continue;
        }

        // Special case: 0
        if (elem === 0) {

            // Need two 0s: 0 -> 0
            if (map.get(0) < 2) {
                return false;
            }

            original.push(0);

            map.set(0, map.get(0) - 2);

            if (map.get(0) === 0) {
                map.delete(0);
            }

            continue;
        }

        const double = elem * 2;

        // Double does not exist
        if (!map.has(double)) {
            return false;
        }

        // Add original element
        original.push(elem);

        // Consume one elem
        map.set(elem, map.get(elem) - 1);

        // Consume one double
        map.set(double, map.get(double) - 1);

        // Remove keys whose frequency becomes 0
        if (map.get(elem) === 0) {
            map.delete(elem);
        }

        if (map.has(double) && map.get(double) === 0) {
            map.delete(double);
        }
    }

    return true;
}

var findOriginalArray = function(changed) {

    // Odd length can never be a doubled array
    if (changed.length % 2 !== 0) {
        return [];
    }

    // Important: process smaller numbers first
    changed.sort((a, b) => a - b);

    const map = new Map();
    const original = [];

    mapPopulate(changed, map);

    const valid = originalArr(changed, map, original);

    if (!valid) {
        return [];
    }

    return original;
};
