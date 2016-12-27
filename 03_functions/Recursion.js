/*
	Define a recursive function isEven corresponding to this description.
	The function should accept a number parameter and return a Boolean.
*/
function isEven(number){
	var localNum = Math.abs(number);
	if (localNum == 0) return true;
	else if (localNum == 1) return false;
	return isEven(localNum - 2);
}

function assert(condition, message) {
    if (!condition) {
        throw message || "Assertion failed";
    }
}

assert(isEven(50) == true, "50 is even.");
assert(isEven(75) == false, "75 is odd.");
assert(isEven(-1) == false, "-1 is odd.");
assert(isEven(-98) == true, "-98 is even.");