function solve(arr) {
	var line = [],
		index,
		name,
		exam,
		sum,
		point,
		averige = 0,
		count = 0,
		nameAverigeExam = '',
		formula,
		pointNeedSix,
		greade;
	
	
	for (index = 0; index < arr.length; index++) {
		
		line[index] = arr[index].replace(/\s+/g,' ').trim().split(' ');
		if (line[index].length > 1) {
			name = line[index][0].trim();
			exam = line[index][1].trim();
			
			
			if (Number(line[index][2].trim()) < 100) {
				console.log(name + ' failed at "' + exam + '"');
				continue;
			}
			sum = Number(line[index][2].trim()) * 0.8;
			sum = Number(line[index][2].trim()) - sum;
			greade = Number(line[index][3].trim());
			point = greade + sum;
			point = point.toFixed(2).toString();
			point = Number(point);
			pointNeedSix = 80;
			formula = ((point / pointNeedSix) * 4) + 2;
			if (formula > 6) {
				formula = 6;
			}
			point = point % 1 === 0 ? parseInt(point) : point;
			console.log(name + ': Exam - "' + exam + '"; Points - ' + point + '; Grade - ' + formula.toFixed(2));
		}
	}
	for (var j in line) {
		if (line[j].length === 1) {
			exam = line[j][0];
		}
		if (line[j].length === 1) {
			for (var i = 0; i < arr.length; i++) {
				if (line[i].length > 1) {
					nameAverigeExam = line[i][1];
					if (nameAverigeExam === exam) {
						averige += Number(line[i][2]);
						count++;
					}

				}

			}
			var fixZeros = (averige / count).toFixed(2).toString();
			console.log('"' + exam + '" average points -> ' + Number(fixZeros));
		}
	}
}

var arr = ['Pesho C#-Advanced 100 3',
	'Gosho Java-Basics 157 3',
	'Tosho HTML&CSS 317 12',
	'Minka C#-Advanced 57 15',
	'Stanka C#-Advanced 157 15',
	'Kircho C#-Advanced 300 0',
	'Niki C#-Advanced 400 10',
	'C#-Advanced',
	'Java-Basics'
];
solve(arr);