/**
 * @file Contains functionality of list DS.
 * Write a function arrayToList that builds up a data structure
 * like var list = {value: 1, next: {value: 2, next: null}};
 * when given [1, 2, 3] as argument, and write a listToArray
 * function that produces an array from a list.
 * Also write the helper functions prepend, which takes an element
 * and a list and creates a new list that adds the element to
 * the front of the input list, and nth, which takes a list and
 * a number and returns the element at the given position in the list,
 * or undefined when there is no such element.
 * If you haven’t already, also write a recursive version of nth.
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
 * Appends the next node to the end of a list.
 * @param {Object} list - list to be modified.
 * @param {number} value - the value to be set.
 */
function append(list, value) {
	for (var node = list;;) {
		if (node.next == null) {
			node.next = {"value": value, next: null};
			break;
		}
		else {
			node = node.next;
		}
	}
}

/**
 * Creates a new list that adds the element
 * to the front of the input list.
 * @param {Object} list - input list.
 * @param {number} value - the value to be set.
 */
function prepend(list, value) {
	return {"value": value, next: list};
}

/**
 * Returns the element at the @ref index position in the list.
 * @param {Object} list - list of elements.
 * @param {number} index - index of the element to return.
 * @returns value property of the list at the given position.
 */
function nth(list, index) {
	for (var node = list; node != null; node = node.next, index--) {
		if (index == 0) return node.value; 
	}
	return undefined;
}

/**
 * Returns the element at the @ref index position in the list.
 * @param {Object} list - list of elements.
 * @param {number} index - index of the element to return.
 * @returns value property of the list at the given position.
 */
function nthRecursive(list, index) {
  	if(index == 0) return list.value;
	return list.next != null ? nth(list.next, index - 1) : undefined;
}

/**
 * Transforms an array into a list.
 * @param {Object} array - an array to be transformed.
 * @returns a list like @example var list = {value: 1, next: {value: 2, next: null}};
 */
function arrayToList(array) {
	var head = {"value": array[0], next: null}, curr = head;
	for (var idx = 1; idx < array.length; idx++) {
		curr.next = {"value": array[idx], next: null};
		curr = curr.next;
	}
	return head;
}

/**
 * Produces an array from a list.
 * @param {Object} list - a list to be transformed.
 * @returns array of elements.
 */
function listToArray(list) {
	var array = [];
	for (var node = list; node != null; node = node.next) {
		array.push(node.value);
	}
	return array;
}

/**
 * Compares to lists.
 * @param {Object} list1 - first list.
 * @param {Object} list2 - second list.
 * @returns true if both lists are equal.
 * @returns false if the lists are different.
 */
function compare(list1, list2) {
	var node1 = undefined, node2 = undefined;
	for (node1 = list1, node2 = list2;
		 node1 || node2;
		 node1 = node1.next, node2 = node2.next)
	{
		if (node1.value == node2.value) continue;
		else return false;
	}
	return node1 && node2 ? false : true;
}

/** Testing the functionality */
var testMap = {
			/** arrayToList, listToArray */
			1: {list: {value: 1, next: null},
				array: [1]},
			2: {list: {value: 12, next: {value: -12, next: null}},
				array: [12, -12]},
			/** append, prepend */
			3: {list: {value: 1, next: {value: 2, next: null}},
				append: {value: 1, next: {value: 2, next: {value: 3, next: null}}},
                prepend: {value: 3, next: {value: 1, next: {value: 2, next: {value: 3, next: null}}}}},
};

/** Testing @ref arrayToList(array) */
for (var idx = 1; idx <= 2; idx++) {
	assert(compare(arrayToList(testMap[idx].array), testMap[idx].list));
}

/** Testing @ref listToArray(list) */
for (var idx = 1; idx <= 2; idx++) {
	assert(listToArray(testMap[idx].list).equals(testMap[idx].array));
}

/** Testing @ref append(value) */
append(testMap[3].list, 3);
assert(compare(testMap[3].list, testMap[3].append));

/** Testing @ref prepend(value) */
var tempList = prepend(testMap[3].list, 3);
assert(compare(tempList, testMap[3].prepend));

/** Testing @ref nth(index) */
assert(nth(arrayToList([10, 20, 30]), 1) == 20);
assert(nth(arrayToList([10, 20, 30]), 0) == 10);
assert(nth(arrayToList([10, 20, 30]), 2) == 30);

/** Testing @ref nthRecursive(index) */
assert(nth(arrayToList([-1, 0, 1]), 1) == 0);
assert(nth(arrayToList([-1, 0, 1]), 0) == -1);
assert(nth(arrayToList([-1, 0, 1]), 2) == 1);


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
