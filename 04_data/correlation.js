/**
 * This is the example code from chapter 4
 * Data Structures: Objects and Arrays. It demonstrates
 * standard data structures usage for computing correlation between
 * entries from Jacques journal.
 */

function phi(table) {
	return (table[3] * table[0] - table[2] * table[1]) /
			Math.sqrt((table[2] + table[3]) *
					  (table[0] + table[1]) *
					  (table[1] + table[3]) *
					  (table[0] + table[2]));
}

function hasEvent(event, entry) {
	return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
	var table = [0, 0, 0, 0];
	journal.forEach(function(entry) {
		var index = 0;
		if (hasEvent(event, entry)) index += 1;
		if (entry.squirrel) index += 2;
		table[index] += 1;
	});
	return table;
}

function gatherCorrelations(journal) {
	var phis = {};
	journal.forEach(function(entry) {
		entry.events.forEach(function(event) {
			if (!(event in phis))
				phis[event] = phi(tableFor(event, journal));
		});
	});
	return phis;
}

var correlations = gatherCorrelations(JOURNAL);
for (var event in correlations){
	var correlation = correlations[event];
	if (correlation > 0.1 || correlation < -0.1)
		console.log(event + ": " + correlation);
}

for (var i = 0; i < JOURNAL.length; i++) {
	var entry = JOURNAL[i];
	if (hasEvent("peanuts", entry) && !hasEvent("brushed teeth", entry))
		entry.events.push("peanut teeth");
}

console.log(phi(tableFor("peanut teeth", JOURNAL)));
