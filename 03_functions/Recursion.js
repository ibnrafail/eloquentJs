/**
 * @file Define a recursive function isEven corresponding to this description.
 * The function should accept a number parameter and return a Boolean.
 */

/**
 * Checks whether the number is even or not.
 * @param {number} number - input number.
 * @returns true if number is even.
 * @return false if number is odd.
 */
function isEven(number){
	var localNum = Math.abs(number);
	if (localNum == 0) return true;
	else if (localNum == 1) return false;
	return isEven(localNum - 2);
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

assert(isEven(50) == true, "50 is even.");
assert(isEven(75) == false, "75 is odd.");
assert(isEven(-1) == false, "-1 is odd.");
assert(isEven(-98) == true, "-98 is even.");
