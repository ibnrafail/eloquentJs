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

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
