/**
 * @file The sum of a range exercise.
 * Write a range function that takes two arguments,
 * start and end, and returns an array containing all
 * the numbers from start up to (and including) end.
 *
 * Next, write a sum function that takes an array of
 * numbers and returns the sum of these numbers.
 *
 * As a bonus assignment, modify your range function
 * to take an optional third argument that indicates
 * the “step” value used to build up the array.
 * If no step is given, the array elements go up by
 * increments of one, corresponding to the old behavior.
*/

/**
 * Fails if condition is false.
 * @param {boolean} condition - condition to be checked.
 * @param {string} message - exception message.
 */
function assert(condition, message) {
	if (!condition) throw message || "Assertion failed";
}

/**
 * Returns array of values in the specified range.
 * @param {number} start - value from which to start.
 * @param {number} end - end value.
 * @returns {Object} resulting array.
 */
function range(start, end, step) {
	var resArray = [];
	if (step == 0 || start > end && step == undefined) return resArray;
	else if (step == undefined) step = 1;
	for (var value = start; step > 0 ? (value <= end) : value >= end; value += step) {
		resArray.push(value);
	}
	return resArray;
}

/**
 * Returns the sum of numbers in an array.
 * @param {Object} array - array of numbers.
 * @returns {number} sum.
 */
function sum(array) {
	var s = 0;
	for (var idx = 0; idx < array.length; idx++) s += array[idx];
	return s;
}

/**
 * Compares the values of two arrays.
 * @param {Object} array1 - first array to compare.
 * @param {Object} array2 - second array to compare.
 * @returns {boolean} true if array1 values == array2 values.
 * @returns {boolean} false if array2 values != array2 values.
 */
function compare2Arrays(array1, array2) {
	if (array1.length != array2.length) return false;
	for (var idx = 0; idx < array1.length; idx++)
		if (array1[idx] != array2[idx]) return false;
	return true;
}

/** Checking range function */
// positive step value
assert(compare2Arrays(range(0, 10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) == true);
assert(compare2Arrays(range(50, 63), [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63]) == true);
// step value out of scope
assert(compare2Arrays(range(5, 0, -10), [5]) == true);
assert(compare2Arrays(range(1, 10, 32), [1]) == true);
// negative step value
assert(compare2Arrays(range(5, 0, -1), [5, 4, 3, 2, 1, 0]) == true);
assert(compare2Arrays(range(10, 6, -3), [10, 7]) == true);

/** Checking sum function */
assert(sum(range(0, 10)) == 55);
assert(sum(range(5, 0, -1)) == 15);
assert(sum(range(10, 6, -3)) == 17);
assert(sum([-5, -99, 61, 323, -438, 19]) == -139);