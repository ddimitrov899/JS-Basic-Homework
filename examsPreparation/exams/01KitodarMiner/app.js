function solve(arr) {
	var i,
		line,
		isMane,
		products,
		value,
		gold = 0,
		silver = 0,
		diamond = 0;
	
	for (i in arr) {
		line = arr[i].split('-');
		if (line.length < 2) {
			continue;
		}
		isMane = line[0].split(' ');
		isMane = (isMane[0].toLowerCase()).trim() === 'mine';
		if (isMane) {
			products = line[1].split(':');
		    value = parseInt(products[1]);
			switch (products[0].toLowerCase().trim()) {
				case 'gold':
					if ( value > 0) {
						gold += value;
					}
					break;
				case 'silver':
					if (value > 0) {
						silver += value;
					}
					break;
				case 'diamonds':
					if (value > 0) {
						diamond += value;
					}
					break;
			}
		}
		
	}
	console.log('*Silver: ' + silver + '\n*Gold: ' + gold + '\n*Diamonds: ' + diamond);

}
var arr = ['mine bobovDol - gold : 10',
	'mine medenRudnik - silver : 22',
	'mine chernoMore - shrimps : 24',
	'gold:50'];
//arr = [
//	'mine bobovdol - gold : 10',
//	'mine - diamonds : 5',
//	'mine colas - wood : 10',
//	'mine myMine - silver :  14',
//	'mine silver:14 - silver : 14'
//];
solve(arr);

