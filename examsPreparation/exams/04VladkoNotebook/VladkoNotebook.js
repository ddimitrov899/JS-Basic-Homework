function solve(arr) {
	var result = {}, output = {}, i, tokens, color, prop, value;
	
	for (i in arr) {
		tokens = arr[i].split('|');
		color = tokens[0];
		prop = tokens[1];
		value = tokens[2];
		
		if (!result[color]) {
			result[color] = {
				age: '',
				name: '',
				opponents: [],
				win: 0,
				loss: 0,
				rank: 0
			};
		}
		
		switch (prop) {
			case 'age':
				result[color].age = value;
				break;
			case 'name':
				result[color].name = value;
				break;
			case 'win':
				result[color].win++;
				result[color].opponents.push(value);
				break;
			case 'loss':
				result[color].loss++;
				result[color].opponents.push(value);
				break;
		}
	    
	}
    var sortedKey = Object.keys(result).sort();
	for (i in sortedKey) {
		
		if (result[sortedKey[i]].age !== '') {
			if (result[sortedKey[i]].name !== '') {
				result[sortedKey[i]].rank = ((result[sortedKey[i]].win + 1) / (result[sortedKey[i]].loss + 1)).toFixed(2);
				output[sortedKey[i]] = {
					age: result[sortedKey[i]].age,
					name: result[sortedKey[i]].name,
					opponents: result[sortedKey[i]].opponents.sort(),
					rank: result[sortedKey[i]].rank
				}
			}
		}

	}
	console.log(JSON.stringify(output));
}

arr = ['purple|age|99',
	'red|age|44',
	'blue|win|pesho',
	'blue|win|mariya',
	'purple|loss|Kiko',
	'purple|loss|Kiko',
	'purple|loss|Kiko',
	'purple|loss|Yana',
	'purple|loss|Yana',
	'purple|loss|Manov',
	'purple|loss|Manov',
	'red|name|gosho',
	'blue|win|Vladko',
	'purple|loss|Yana',
	'purple|name|VladoKaramfilov',
	'blue|age|21',
	'blue|loss|Pesho'];
solve(arr);