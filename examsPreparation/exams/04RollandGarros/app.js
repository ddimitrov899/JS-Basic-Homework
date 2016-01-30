function solve(arr) {
	var result = [];
	for (var index in arr) {
		var line = arr[index];
		line = line.replace('vs.', ' vs. ');
		line = line.replace(':', ' : ');
		var pattern = /\s{1,}/g;
		line = line.replace(pattern, ' ');
		line = line.trim();
		
		var info = line.split(' ');
		var firstPlayerName = info[0] + ' ' + info[1];
		var secondPlayerName = info[3] + ' ' + info[4];
		var player1 = null, player2 = null;
		for (var i in result) {
			var current = result[i];
			if (current.name === firstPlayerName) {
				player1 = current;
			}
			if (current.name === secondPlayerName) {
				player2 = current;
			}
		}
		
		if (player1 == null) {
			player1 = createTennisObj(firstPlayerName);
			result.push(player1);
		}
		if (player2 == null) {
			player2 = createTennisObj(secondPlayerName);
			result.push(player2);

		}
		
		var player1Sets = 0, player2Sets = 0;
		for (var i = 6; i < info.length; i++) {
			var score = info[i].split('-');
			
			if (parseInt(score[0]) > parseInt(score[1])) {
				player1Sets++;
				player1.setsWon++;
				player2.setsLost++;
			} else {
				player2Sets++;
				player1.setsLost++;
				player2.setsWon++;
			}
			
			player1.gamesWon += parseInt(score[0]);
			player2.gamesLost += parseInt(score[0]);
			player2.gamesWon += parseInt(score[1]);
			player1.gamesLost += parseInt(score[1]);
		}
		
		if (player1Sets > player2Sets) {
			player1.matchesWon++;
			player2.matchesLost++;
		} else {
			player2.matchesWon++;
			player1.matchesLost++;
		}
	    
	    
	} result.sort(function (a, b) {
		if (b.matchesWon === a.matchesWon) {
			if (b.setsWon === a.setsWon) {
				var aRatio = 1, bRatio = 1;
				if (a.matchesLost !== 0) {
					var aRatio = a.matchesWon / a.matchesLost;
				}
				if (b.matchesLost !== 0) {
					var bRatio = b.matchesWon / b.matchesLost;
				}
				
				if (aRatio === bRatio) {
					if (b.gamesWon === a.gamesWon) {
						
						return a.name.localeCompare(b.name);
					}
					
					return b.gamesWon - a.gamesWon;
				}
				
				return bRatio - aRatio;
			    //return b.matchesWon - a.matchesWon;
			}
			return b.setsWon - a.setsWon;
		}
		return b.matchesWon - a.matchesWon;
	});
	console.log(JSON.stringify(result));
	function createTennisObj(name) {
		return {
			name: name,
			matchesWon : 0,
			matchesLost : 0,
			setsWon : 0,
			setsLost : 0,
			gamesWon : 0,
			gamesLost : 0
		};
	}
}

var arr = [
	'Novak Djokovic vs. Roger Federer : 6-3 6-3',
	'Roger    Federer    vs.        Novak Djokovic    :         6-2 6-3',
	'Rafael Nadal vs. Andy Murray : 4-6 6-2 5-7',
	'Andy Murray vs. David Ferrer : 6-4 7-6',
	'Tomas Bedrych vs. Kei Nishikori : 4-6 6-4 6-3 4-6 5-7',
	'Grigor Dimitrov vs. Milos Raonic : 6-3 4-6 7-6 6-2',
	'Pete Sampras vs. Andre Agassi : 2-1',
	'Boris Beckervs.Andre        \t\t\tAgassi:2-1'
];
solve(arr);