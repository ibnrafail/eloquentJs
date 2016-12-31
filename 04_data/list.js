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
