function solve(arr) {
	var matrix = [],
		fillMatrix = [],
		index,
		row,
		col,
		found,
		curentChar,
		output;
	
	for (index in arr) {
		matrix.push(arr[index].toLowerCase().split(''));
		fillMatrix.push(arr[index].split(''))
	}
	
	for (row = 0; row < matrix.length - 2; row++) {
		for (col = 0; col < matrix[row].length; col++) {
			curentChar = matrix[row][col];
			found = matrix[row + 2][col] === curentChar&&
                matrix[row][col + 2] === curentChar &&
                matrix[row + 2][col + 2] === curentChar&&
                matrix[row + 1][col + 1] === curentChar;
			if (found) {
				fillMatrix[row][col] = '';
				fillMatrix[row + 2][col] = '';
				fillMatrix[row][col + 2] = '';
				fillMatrix[row + 2][col + 2] = '';
				fillMatrix[row + 1][col + 1] = '';
			}
		}
	}
	for (row = 0; row < matrix.length; row++) {
		output = '';
		for (col = 0; col < matrix[row].length; col++) {
			output += fillMatrix[row][col];
		}
		console.log(output);
		
	}
	
}

var arr = ['abnbjs', 'xoBab', 'Abmbh', 'aabab', 'ababvvvv'];
arr = ['8888888', '08*8*80', '808*888', '0**8*8?'];
arr = ['^u^', 'j^l^a', '^w^WoWl', 'adw1w6', '(WdWoWgPoop)'];
solve(arr);