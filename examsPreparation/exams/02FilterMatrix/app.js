function solve(arr) {
    var matrix = [],
        matrixRemuve = [],
        index,
        curenChar,
        i = false,
		row,
		col,

		curentIndex = 0,
		isRepeet;
	for (index = 0; index < arr.length - 1; index++) {
		matrix[index] = arr[index].split(' ');
		matrixRemuve[index] = arr[index].split(' ');
	}
	
	for (row = 1; row < matrix.length; row++) {
		curentIndex = 0;
		
		
		for (col = 1; col < matrix[row - 1].length;) {
		    if (i) {
				col++;
		        curentIndex++;
			}
			curenChar = matrix[row - 1][curentIndex];
			isRepeet = curenChar === matrix[row - 1][col];
			
			if (isRepeet) {
				matrix[row - 1][curentIndex] = '';
				matrix[row - 1][col] = '';
				curentIndex += 2;
				col += 2;
			} else {
				curentIndex++;
				col++;
			}

		}
		if (curenChar === matrix[row][0]) {
			matrix[row - 1][curentIndex] = '';
			matrix[row][0] = '';
			i = true;
		}
		
	}
	
	for (row = 0; row < matrix.length; row++) {
		var output = '';
		for (col = 0; col < matrix[row].length; col++) {
			output = matrix[row].join('');
		}
		console.log(output);
	}
	
}

arr = [
	'3 3 3 2 5 9 9 9 9 1 2',
	'1 1 1 1 1 2 5 8 1 1 7',
	'7 7 1 2 3 5 7 4 4 1 2',
	'2'
];
solve(arr);