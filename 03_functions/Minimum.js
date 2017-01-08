/**
 * @file Write a function min that takes
 * two arguments and returns their minimum.
 */

/**
 * Returns the minimum of @ref a and @ref b.
 * @param {number} a - first number.
 * @param {number} b - second number.
 * @returns @ref a if a < b.
 * @returns @ref b if a >= b.
 */
function min(a, b){
	return a < b ? a : b;
}

/**
 * Returns the maximum of @ref a and @ref b.
 * @param {number} a - first number.
 * @param {number} b - second number.
 * @returns @ref a if a > b.
 * @returns @ref b if a <= b.
 */
function max(a, b){
	return a > b ? a : b;
}

/**
 * Returns the absolute value of @ref num.
 * @param {number} num - number.
 * @returns num if num >= 0.
 * @returns -num if num < 0.
 */
function abs(num){
	return num >= 0 ? num : -num;
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

assert(min(5, 10) == 5, "5 < 10");
assert(min(-2, -99) == -99, "-99 < -2");

assert(max(5, 10) == 10, "10 > 5");
assert(max(-2, -99) == -2, "-2 > -99");

assert(abs(5) == 5, "abs(5) == 5");
assert(abs(-2) == 2, "abs(-2) == 2");
