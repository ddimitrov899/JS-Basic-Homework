function solve(arr) {
	var directions = arr[0].split(', ');
	var garden = [];
	for (var index = 1; index < arr.length; index++) {
		garden.push(arr[index].split(', '));
	}
	var row = 0, col = 0, wallNumberHit = 0;
	var carrots = 0, cabbage = 0, lettuce = 0, turnip = 0;
    var passed = [];
	for (var direction in directions) {
		var wallHit = false;
		switch (directions[direction]) {
			case 'up':
				row--;
				if (row < 0) {
					wallHit = true;
					row = 0;
				}
				break;
			case 'down':
				row++;
				if (row > garden.length - 1) {
					wallHit = true;
					row = garden.length - 1;
				}
				break;
			case 'right':
				col++;
				if (col > garden[0].length - 1) {
					wallHit = true;
					col = garden[0].length - 1;
				}
				break;
			case 'left':
				col--;
				if (col < 0) {
					wallHit = true;
					col = 0;
				}
				break;
            
		}
		if (wallHit) {
			wallNumberHit++;
		} else {
			if (garden[row][col].indexOf('{!}') !== -1) {
				carrots = eate('{!}', carrots, row, col, garden);
			}
			if (garden[row][col].indexOf('{#}') !== -1) {
				turnip = eate('{#}', turnip, row, col, garden);
			}
			if (garden[row][col].indexOf('{*}') !== -1) {
				cabbage = eate('{*}', cabbage, row, col, garden);
			}
			if (garden[row][col].indexOf('{&}') !== -1) {
				lettuce = eate('{&}', lettuce, row, col, garden);
			}
		        passed.push(garden[row][col]);
		    
		    
		}

	}
	
	console.log('{"&":' + lettuce + ',"*":' + cabbage + ',"#":' + turnip + ',"!":' + carrots + ',"wall hits":' + wallNumberHit + '}');
    if (passed.length === 0) {
        console.log('no');
    } else {
        console.log(passed.join('|'));
    }
	
	function eate(charakter, vegetubles, row, col, garden) {

	     
		while (garden[row][col].indexOf(charakter) !== -1) {
			vegetubles++;
			var feald = garden[row][col];
			garden[row][col] = feald.replace(charakter, "@");
		}
		return vegetubles;
	}
}

var arr = ['right, up, up, down',
	'asdf, as{#}aj{g}dasd, kjldk{}fdffd, jdflk{#}jdfj',
	'tr{X}yrty, zxx{*}zxc, mncvnvcn, popipoip',
	'poiopipo, nmf{X}d{X}ei, mzoijwq, omcxzne'];

//arr = ['up, right, left, down', 'as{!}xnk'];

solve(arr);
