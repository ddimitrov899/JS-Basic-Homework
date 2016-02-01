function solve(arr) {
	var input,
		result = {};
	for (var index in arr) {
		input = arr[index].split(' & ');
		var name = input[0];
		var type = input[1];
		var taskNumber = 'Task ' + input[2];
		var score = Number(input[3]);
		var lineCode = Number(input[4]);
		var goddnesTaskNumber = null;
		for (var i in result) {
			var current = result[i];
			if (i === taskNumber) {
				goddnesTaskNumber = current;
				
				result[i].averig += score;
				result[i].line += lineCode;
			}
		}
		if (goddnesTaskNumber === null) {
			goddnesTaskNumber = goddnesObj();
			result[taskNumber] = goddnesTaskNumber;
			result[taskNumber].task[name] = name;
			result[taskNumber].averig = score;
			result[taskNumber].line = lineCode;
		}
		if (!result[taskNumber].task[name]) {
			var task = 
 {
				name: name,
				type: type
			};
			result[taskNumber].task.push(task);

		}
	}
	for (var j in result) {
		result[j].averig = result[j].averig / result[j].task.length;
	}
    var sort = Object.valueOf(result.averig).sort();
    
	
	console.log(sort);
	console.log(JSON.stringify(result));
	function goddnesObj() {
		return {
			task: [],
			averig: 0,
			line: 0
		};
	}
	
}

var arr = [
	'Array Matcher & strings & 4 & 100 & 38',
	'Magic Wand & draw & 3 & 100 & 15',
	'Dream Item & loops & 2 & 88 & 80',
	'Knight Path & bits & 5 & 100 & 65',
	'Basket Battle & conditionals & 2 & 100 & 120',
	'Torrent Pirate & calculations & 1 & 100 & 20',
	'Encrypted Matrix & nested loops & 4 & 90 & 52',
	'Game of bits & bits & 5 & 100 & 18',
	'Fit box in box & conditionals & 1 & 100 & 95',
	'Disk & draw & 3 & 90 & 15',
	'Poker Straight & nested loops & 4 & 40 & 57',
	'Friend Bits & bits & 5 & 100 & 81'
];

solve(arr);
