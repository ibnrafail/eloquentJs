/**
 * @file contains functionality for deep objects comparison.
 * Write a function, deepEqual, that takes two values
 * and returns true only if they are the same value or
 * are objects with the same properties whose values are
 * also equal when compared with a recursive call to deepEqual.
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
 * Checks whether 2 objects are fully equal or not.
 * @param {Object} obj1 - first object.
 * @param {Object} obj2 - second object.
 * @returns true if obj1 && obj2 have the same
 * amount of properties and they are identically equal.
 * @returns false otherwise. 
 */
function deepEqual(obj1, obj2) {
	if (obj1 === obj2) return true;	
	if (typeof obj1 == "object" && obj1 != null &&
		typeof obj2 == "object" && obj2 != null) {
		var propObj1 = 0, propObj2 = 0;
		for (var p in obj1) propObj1 += 1;
		for (var p in obj2) {
			if (!(p in obj1) || !deepEqual(obj1[p], obj2[p]))
				return false;
			propObj2 += 1;
		}
		if (propObj1 != propObj2) return false;
		return true;
	}
	else return false;
}

/** Checking @ref deepEqual(obj1, obj2) */
assert(deepEqual([1, 2, 3], [1, 3, 2]) == true);
assert(deepEqual([1, 2, 3], [1, 2, 3]) == false);
assert(deepEqual({color: "red", shape: "triangle"}, {shape: "triangle", color: "red"}) == true);

var obj = {here: {is: "an"}, object: 2};
assert(deepEqual(obj, obj) == true);
assert(deepEqual(obj, {here: 1, object: 2}) == false);
assert(deepEqual(obj, {here: {is: "an"}, object: 2}) == true);
