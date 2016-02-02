function solve(arr) {
	var exams = {},
		input,
		name,
		subject,
		points,
		i,
        j,
        isExist = false,
		index;
	for (index in arr) {
		input = arr[index].replace(/\s+/, ' ').trim().split('-');
		name = input[0].trim();
		input = input[1].split(':');
		subject = input[0].trim();
		points = parseInt(input[1].trim());
		if (points > 400) {
			continue;
		}

        for (i in exams) {
            isExist = false;
            if (i === subject) {
                for (j = 0; j < exams[i].length; j++) {
                    if (exams[i][j].name === name ) {
                        if(exams[i][j].result < points) {
                            exams[i][j].result = points;
                        }
                        exams[i][j].makeUpExams++;
                        isExist = true;
                        break;
                    }
                }
                if (!isExist) {
                    exams[i].push({name: name, result: points, makeUpExams: 0});
                }
            }
        }

		if (!exams[subject]) {
            exams[subject] = [
                {
                    name: name,
                    result: points,
                    makeUpExams: 0
                }];
        }
	}
    for (i in exams) {
         exams[i].sort(function(a, b) {
            if (b.result === a.result) {
               if (b.makeUpExams === a.makeUpExams) {
                  return a.name.localeCompare(b.name);
               }
                return a.makeUpExams - b.makeUpExams;
            }
			return b.result - a.result;
        });
    }
	console.log(JSON.stringify(exams));
}

var arr = [
'Mila Kunis - C# : 200',
'Mila Kunis - Java : 100',
'Mila Kunis                          -PHP : 350',
'Mila Kunis-HTML & CSS:400',
'Jessica Clement - C# : 200',
'Jessica Clement - Java : 100',
'Jessica Clement - Java : 100',
'Jessica Clement-PHP:300'
];

//arr = [
//	'Simon Cowell - PHP : 100',
//	'Simon Cowell-PHP: 500',
//	'Peter Jackson - PHP: 350',
//	'Simon Cowell - PHP : 400'
//];


solve(arr);