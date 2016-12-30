function assignNext(list, value) {
	list.next = {"value": value, next: null};
}

function append(list, value) {
	var next = list.next;
  	if (next == null) assignNext(list, value);
  	else {
  		while (next.next != null) next = next.next;
      	assignNext(next, value);
    }
}

function arrayToList(array) {
	var head = {"value": array[0], next: null}, curr = head;
	for (var idx = 1; idx < array.length; idx++) {
		curr.next = {"value": array[idx], next: null};
		curr = curr.next;
	}
	return head;
}

function listToArray(list) {
	var array = [];
	var next = list;
	while (next) {
		array.push(next.value);
		next = next.next;
	}
	return array;
}