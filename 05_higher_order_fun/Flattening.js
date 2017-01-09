/**
 * Use the reduce method in combination with
 * the concat method to “flatten” an array of
 * arrays into a single array that has all
 * the elements of the input arrays.
 */

/**
 * Overriding existing equals method for array.
 */
Array.prototype.equals = function (array) {
    if (!array)
        return false; 
    if (this.length != array.length)
        return false;
    for (var idx = 0, len = this.length; idx < len; idx++) {
        if (this[idx] instanceof Array && array[idx] instanceof Array)
            if (!this[idx].equals(array[idx]))
				return false;        
        else if (this[idx] != array[idx])
			return false;          
    }       
    return true;
}
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

/**
 * Fails if condition is false.
 * @param {boolean} condition - condition to be checked.
 * @param {string} message - exception message.
 */
function assert(condition, message) {
	if (!condition) throw message || "Assertion failed";
}

/**
 * Takes array of arrays and flatens it into a single one.
 * @param {Object} array - array of arrays.
 * @returns flattened array if all elements of initial array are arrays.
 * @returns undefined otherwise.
 */
function flatten(array) {
	if (array.length == 0) return undefined;
	return array.reduce(function(a,b) {
		if (Array.isArray(a) && Array.isArray(b))
			return a.concat(b);
		else return undefined;
	});
}

assert(flatten([[1, 2], [3, 4, 5, 6], [7]]).equals([1, 2, 3, 4, 5, 6, 7]));
assert(flatten([[1], [2], [3]]).equals([1, 2, 3]));
assert(flatten([]) == (undefined));