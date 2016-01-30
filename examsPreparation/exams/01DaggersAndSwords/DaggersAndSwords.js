function solve(arr) {
	var curentLenght = [];
	for (var index in arr) {
		curentLenght[index] = Math.floor(parseInt(arr[index]));
	}
	console.log('<table border="1">');
	console.log('<thead>');
	console.log('<tr><th colspan="3">Blades</th></tr>');
	console.log('<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>');
	console.log('</thead>');
	console.log('<tbody>');
	for (var i = 0; i < curentLenght.length; i++) {
		if (curentLenght[i] <= 10) {
			continue;
		}
		var typeBlade = 'dagger';
		if (curentLenght[i] > 40) {
			typeBlade = 'sword';
		}
		var curentIndex = curentLenght[i] % 10;
		var typeApplication = '';
		switch (curentIndex) {
			case 1:
				typeApplication = 'blade';
				break;
			case 2:
				typeApplication = 'quite a blade';
				break;
			case 3:
				typeApplication = 'pants-scraper';
				break;
			case 4:
				typeApplication = 'frog-butcher';
				break;
			case 5:
				typeApplication = '*rap-poker';
				break;
			case 6:
				typeApplication = 'blade';
				break;
			case 7:
				typeApplication = 'quite a blade';
				break;
			case 8:
				typeApplication = 'pants-scraper';
				break;
			case 9:
				typeApplication = 'frog-butcher';
				break;
			case 0:
				typeApplication = '*rap-poker';
				break;
		}
		console.log('<tr><td>' + curentLenght[i] + '</td><td>' + typeBlade + '</td><td>' + typeApplication + '</td></tr>');
	}
	console.log('</tbody>');
	console.log('</table>');
}

arr = ['17.8', '19.4', '13', '55.8', '126.96541651', '3'];
solve(arr);