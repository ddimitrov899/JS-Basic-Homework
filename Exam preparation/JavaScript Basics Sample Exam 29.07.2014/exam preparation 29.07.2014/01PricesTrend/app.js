function solve(input) {
	var numbers = [];
	for (var i = 0; i < input.length; i++) {
		numbers.push(Number(Number(input[i]).toFixed(2)));
	}
	
	console.log('<table>');
	console.log('<tr><th>Price</th><th>Trend</th></tr>');
	if (numbers.length > 0) {
		console.log('<tr><td>' + numbers[0].toFixed(2) + '</td><td><img src="fixed.png"/></td></td>');
		var image = '';
		for (var j = 1; j < numbers.length; j++) {
			numbers[j - 1] > numbers[j] ? image = 'down' : numbers[j - 1] < numbers[j] ? image = 'up' : image = 'fixed';
			console.log('<tr><td>' + numbers[j].toFixed(2) + '</td><td><img src=\"' + image + '.png\"/></td></td>');
		}
	}
	
	console.log('</table>');
}

solve(['36.333', '36.5', '37.019', '35.4', '35', '35.001', '36.225']);