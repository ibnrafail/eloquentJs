/**
 * @file Write a function countBs that takes a string as its only argument
 * and returns a number that indicates how many uppercase “B” characters are in the string.
 * Next, write a function called countChar that behaves like countBs,
 * except it takes a second argument that indicates the character
 * that is to be counted (rather than counting only uppercase “B” characters).
 * Rewrite countBs to make use of this new function.
 */

/**
 * Counts the amount of B chars in string.
 * @param {string} str - input string.
 * @returns the amount of B chars.
 */
function countBs(str){
	return countChar(str, "B");
}

/**
 * Counts the amount of @ref ch in @str.
 * @param {string} str - input string.
 * @param {string} ch - char to count.
 * @returns the amount of @ref ch in @ref str.
 */
function countChar(str, ch){
	var chCounter = 0;
	for (var strIdx = 0; strIdx < str.length; strIdx++) {
		chCounter += str.charAt(strIdx) == ch ? 1 : 0;
	}
	return chCounter;
}

/**
 * Fails if condition is false.
 * @param {boolean} condition - condition to be checked.
 * @param {string} message - exception message.
 */
function assert(condition, message) {
    if (!condition) {
        throw message || "Assertion failed";
    }
}

assert(countBs("BBC") == 2, "There are 2 'B's in 'BBC'.");
assert(countChar("kakkerlak", "k") == 4, "There are 4 'k' in 'kakkerlak'.");
