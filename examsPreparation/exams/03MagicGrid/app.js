function solve(arr) {
	var word = arr[0].split(''),
		output,
		row,
		col,
		i,
		j,
		index,
		magicSum = parseInt(arr[1]),
		isMeets,
		sum,
		sumPosition = 0,
		matrix = [];
	for (i = 2, j = 0; i < arr.length; i++, j++) {
		matrix[j] = arr[i].split(' ');
	}
	for (row = 0; row < matrix.length; row++) {
		for (col = 0; col < matrix[row].length; col++) {
			for (index = 0; index < matrix[row].length; index++) {
				for (i = 1; i < matrix[row].length; i++) {
					sum = parseInt(matrix[row][col]) + parseInt(matrix[index][i]);
					isMeets = sum === magicSum;
					if (isMeets && col !== i) {
						sumPosition += row + col + index + i;
						break;
					}
				}
			    if (isMeets) {
			        break;
			    }
			}
		    if (isMeets) {
		        break;
		    }
		}
	    if (isMeets) {
	        break;
	    }
	}
	
	for (i = 0; i < word.length; i++) {
		if (i % 2 === 0) {
		    if (word[i] !== ' ') {
		        word[i] = word[i].charCodeAt() + sumPosition;
			word[i] = String.fromCharCode(word[i]);
		    }
			
		} else {
			if (word[i] !== ' ') {
				word[i] = word[i].charCodeAt() - sumPosition;
				word[i] = String.fromCharCode(word[i]);
			}
		}
	}
    output = word.join('');
	console.log(output);
    
}

arr = [
    'Vi`ujr!sihtudts',
    '0',
    '0 0 120 300',
    '100 9 300 100',
    '1 290 370 100',
    '10 11 100 550'
];

solve(arr);