function solve(args) {
	var jumpingDistance = parseInt(args[0]);
	var lenghtTrack = parseInt(args[1]);
	var players = [];
	for (var i = 2; i < args.length; i++) {
	    var player = args[i].split(', ');
		players.push({ name: player[0] , distance: parseInt(player[1]), curentDistance: 0});
		
	}
    var winDistance = -1;
	for(var jumps = 0; jumps < jumpingDistance; jumps++){
        for (var index in players) {
			players[index].curentDistance += players[index].distance;
            if (players[index].curentDistance >= lenghtTrack - 1) {
				winDistance = index;
				break;
            }
		}
	    if (winDistance !== -1) {
			players[winDistance].curentDistance = lenghtTrack - 1;
			break;
	    }
	}

    console.log(Array(lenghtTrack + 1).join('#'));
	console.log(Array(lenghtTrack + 1).join('#'));
    for (var index = 0; index < players.length; index++) {
		var winerPlace = Array(players[index].curentDistance + 1).join('.');
        winerPlace += players[index].name[0].toString().toUpperCase(function(x) { return x });
        winerPlace += Array(lenghtTrack - players[index].curentDistance).join('.');
		console.log(winerPlace);
    }
	console.log(Array(lenghtTrack + 1).join('#'));
	console.log(Array(lenghtTrack + 1).join('#'));
    if (winDistance !== -1) {
        console.log('Winner: ' + players[winDistance].name);
	} else {
		var winner = '';
        var maxlenhgtTrack = 0;
        for (var index in players) {
            if (players[index].curentDistance >= maxlenhgtTrack) {
				maxlenhgtTrack = players[index].curentDistance;
                winner = players[index].name;
            }
		}
		console.log('Winner: ' + winner);
    }
    
}

var arr = ['10', '19', 'angel, 9', 'Boris, 10', 'Georgi, 3', 'Dimitar, 7'];
solve(arr);
arr = ['3', '5', 'cura, 1', 'Pepi, 1', 'UlTraFlee, 1', 'BOIKO, 1'];
solve(arr);