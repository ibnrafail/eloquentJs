/**
 * @file contains the example code from the ch. 5.
 */

function logEach(array) {
	for (var idx = 0; idx < array.length; idx++)
		console.log(array[idx]);
}

function forEach(array, action) {
	for (var idx = 0; idx < array.length; idx++)
		action(array[idx]);
}

var array = [1, 2, 3];
for (var idx = 0; idx < array.length; idx++) {
	console.log(array[idx]);
}

var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers, function(number) {
	sum += number;
});

console.log(sum);
