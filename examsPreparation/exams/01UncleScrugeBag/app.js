function solve(args) {
	
    var coin = 0;
	for (var i = 0; i < args.length; i++) {
		var line = args[i].split(' ');
        if (line[0].toLocaleLowerCase() === 'coin') {
            if (Number(line[1]) === parseInt(line[1])) {
                if (parseInt(line[1]) > 0) {
					coin += parseInt(line[1]);
                }
				
            }
        }
	}
	var gold = 0;
	var silver = 0;
    var bronze = 0;
    if (coin / 100 > 0) {
		gold = coin / 100;
        coin %= 100;
	}
	if (coin / 10 > 0) {
		silver = coin / 10;
        coin %= 10;
    }
        bronze = coin;
	
	console.log('gold : ' + parseInt(gold) + '\nsilver : ' + parseInt(silver) + '\nbronze : ' + parseInt(bronze));
}

var arr = ['coin 1', 'coin two', 'coin 5', 'coin 10.50', 'coin 20', 'coin 50', 'coin hundred', 'cigars 1'];
solve(arr);