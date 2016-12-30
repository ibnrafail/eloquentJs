/**
 * @file contains functionality for reversing arrays.
 * Write two functions, reverseArray and reverseArrayInPlace.
 * The first, reverseArray, takes an array as argument and
 * produces a new array that has the same elements in the inverse order.
 * The second, reverseArrayInPlace, does what the reverse method does:
 * it modifies the array given as argument in order to reverse its elements.
 * Neither may use the standard reverse method.
 */

/**
 * Overriding existing equals method.
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
 * Reverses an array looping it in the back order.
 * @param {Object} array - initial array.
 * @returns {Object} resulting reversed array.
 */
function reverseArray(array) {
	var resArray = [];
	for (var idx = array.length - 1; idx >= 0; idx--)
		resArray.push(array[idx]);
	return resArray;
}

/**
 * Reverses an array looping it in the forward order.
 * @param {Object} array - initial array.
 * @returns {Object} resulting reversed array.
 */
function revArrayUsingUnshift(array) {
	var resArray = [];
	for (var idx = 0; idx < array.length; idx++)
		resArray.unshift(array[idx]);
	return resArray;
}

/**
 * Reverses an array modifying the param itself.
 * @param {Object} array - array to be modified.
 */
function reverseArrayInPlace(array) {
	var temp = undefined;
	for (var idx = 0; idx < Math.floor(array.length / 2); idx++) {
		temp = array[idx];
		array[idx] = array[array.length - 1 - idx];
		array[array.length - 1 - idx] = temp;
	}
}

var testMap = {1: {"initial": [5, 4, 3, 2, 1],           "expected": [1, 2, 3, 4, 5]},
			   2: {"initial": [-4, 13, -17, 9, -1],      "expected": [-1, 9, -17, 13, -4]},
			   3: {"initial": ['a', 'b', 'c', 'd', 'e'], "expected": ['e', 'd', 'c', 'b', 'a']}};

/** Checking @ref reverseArray(array) */
for (var idx = 1; idx <= 3; idx++) {
	assert(reverseArray(testMap[idx].initial).equals(testMap[idx].expected));
}

/** Checking @ref reverseArray(array) */
for (var idx = 1; idx <= 3; idx++) {
	assert(revArrayUsingUnshift(testMap[idx].initial).equals(testMap[idx].expected));
}

/** Checking @ref reverseArray(array) */
for (var idx = 1; idx <= 3; idx++) {
	reverseArrayInPlace(testMap[idx].initial);
	assert(testMap[idx].initial.equals(testMap[idx].expected));
}
