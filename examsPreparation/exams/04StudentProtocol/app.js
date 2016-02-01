// Not Work TODO: FIX IT;
function solve(arr) {
	var exams = {},
		input,
		name,
		subject,
		points,
		i,
		persen = {},
		index;
	for (index in arr) {
		input = arr[index].replace(/\s+/, ' ').split('-');
		name = input[0].trim();
		input = input[1].split(':');
		subject = input[0].trim();
		points = parseInt(input[1].trim());
		if (points > 400) {
			continue;
		}
		var isFound = false;
	    var result = false;
		if (!exams[subject]) {
			exams[subject] = [
				{
					name: name,
					result: points,
					makeUpExams: 0
				}];
		} else {
			for (i in exams) {
				if (i === subject ) {
					for (var j = 0; j < exams[i].length ; j++) {
						 isFound = exams[i][j].name === name && name !== null ;
					     result = exams[i][j].result < points;
					}
					if (isFound && result) {
					            exams[i][j].result = points;
					            exams[i][j].makeUpExams++;
					            break;
					        } else if (isFound) {
					            persen[i] = {
					                name: name,
					                result: points,
					                makeUpExams: 0
					            };
					            exams[i].push(persen[i]);
					            break;
					        }
				}
				
	            
			}
		}
	}
    for (i in exams) {
         exams[i].sort(function(a, b) {
            if (b.result === a.result) {
               if (b.makeUpExams === a.makeUpExams) {
                   a.name.localeCompare(b.name);
               }
                return b.makeUpExams - a.makeUpExams;
            }
			return b.result - a.result;
        });
    }
	console.log(JSON.stringify(exams));
}

var arr = [
'Selena Gomez - HTML & CSS : 400',
'Vanessa Hudgens - HTML & CSS : 300 ',
'Vanessa Hudgens            -      HTML & CSS       :    300',
'Vanessa Hudgens-HTML & CSS : 250',
'Vanessa Hudgens -HTML & CSS: 350 '
];

//arr = [
//	'Simon Cowell - PHP : 100',
//	'Simon Cowell-PHP: 500',
//	'Peter Jackson - PHP: 350',
//	'Simon Cowell - PHP : 400'
//];


solve(arr);