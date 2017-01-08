/**
 * @file contains the example code from the ch. 5.
 */

console.log("Abstracting array traversal.");

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

/* ================================ */
console.log("Higher-order functions.");

/** Creates new function */
function greaterThan(n) {
	return function(m) { return m > n; };
}

var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

/** Indroduces additional behavior */
function noisy(f) {
	return function(arg) {
		console.log("calling with", arg);
		var val = f(arg);
		console.log("called with", arg, "- got", val);
		return val;
	};
}
noisy(Boolean)(0);

/** Provide new types of control flow */
function unless(test, then) {
	if (!test) then();
}

function repeat(times, body) {
	for (var i = 0; i < times; i++) body(i);
}

repeat(10, function(n) {
	unless(n % 2, function() {
		console.log(n, "is even");
	});
});

/* ================================ */
console.log("Passing along arguments.");

function transparentWrapping(f) {
  return function() {
    return f.apply(null, arguments);
  };
}

var f = transparentWrapping(function(a, b) {
  if (a == b) return true;
  else return false;
});

console.log(f(1, 2));

/** Passing array to Math.max function using apply */
console.log(Math.max.apply(null, [99, 8, 12]));

/* ================================ */
console.log("JSON");

var string = JSON.stringify({name: "X", born: 1980});
console.log(string);
console.log(JSON.parse(string).born);


var ancestry = JSON.parse(ANCESTRY_FILE);
console.log(ancestry.length);

/* ================================ */
console.log("Filtering an array");

/**
 * Filters out the elements in an array that don’t pass a test.
 * @param {object} array - array of elements.
 * @param {function} test - test function.
 * @returns array of elements that passed the test.
 */
function filter(array, test) {
	var passed = [];
	for (var i = 0; i < array.length; i++) {
		if (test(array[i]))
			passed.push(array[i]);
	}
	return passed;
}

console.log(filter(ancestry, function(person) {
	return person.born > 1900 && person.born < 1925;
}));

/** Using built-in filter function */
console.log(ancestry.filter(function(person) {
	return person.father == "Carel Haverbeke";
}));

/* ================================ */
console.log("Transforming with map.");

function map(array, transform) {
	var mapped = [];
	for (var i = 0; i < array.length; i++)
		mapped.push(transform(array[i]));
	return mapped;
}

var overNinety = ancestry.filter(function(person) {
	return person.died - person.born > 90;
});

console.log(map(overNinety, function(person) {
	return person.name;
}));

/** Using built-in map function */
console.log(overNinety.map(function(person) {
	return person.name;
}));

/* ================================ */
console.log("Summarizing with reduce.");

function reduce(array, combine, start) {
	var current = start;
	for (var i = 0; i < array.length; i++)
		current = combine(current, array[i]);
	return current;
}

console.log(reduce([1, 2, 3, 4], function(a, b) {
	return a + b;
}, 0));

/** Using built-in reduce function */
console.log(ancestry.reduce(function(min, cur) {
	if (cur.born < min.born) return cur;
	else return min;
}));
