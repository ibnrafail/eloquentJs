/*
	Write a function min that takes
	two arguments and returns their minimum.
*/

function min(a, b){
	return a < b ? a : b;
}

function max(a, b){
	return a > b ? a : b;
}

function abs(num){
	return num > 0 ? num : -num;
}

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