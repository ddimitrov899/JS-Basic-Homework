function solve(input) {
    var coint = 0;
    var gold = 0;
    var silver = 0;
    var bronze = 0;
    for (var i = 0; i < input.length; i++) {
        var coin = input[i].split(' ');
        if (parseInt(coin[1]) !== Number(coin[1]) || parseInt(coin[1]) < 0) {
            continue;
        }
        if (coin[0].toLowerCase() === 'coin' ) {
            coint += parseInt(coin[1]);
        }
        else if(coin[0].toLowerCase() === 'silver'){
            silver += parseInt(coin[1]);
        }
        else if(coin[0].toLowerCase() === 'gold'){
            gold += parseInt(coin[1]);
        }
        else {
            bronze += parseInt(coin[1]);
        }
    }

    if (coint >= 100) {
        gold = coint / 100;
        coint %= 100;
    }
    if (parseInt(coint) >= 10) {
        silver = parseInt(coint) / 10;
        coint %= 10;
    }
    bronze = parseInt(coint);
    return 'gold : ' + parseInt(gold) + '\nsilver : ' + parseInt(silver) + '\nbronze : ' + bronze;
}

var bag = ['coin 1','coin 2', 'coin 5', 'coin 10', 'coin 20', 'coin 50', 'coin 100', 'coin 200', 'coin 500','cigars 1'];

console.log(solve(bag));

bag = ['coin one', 'coin two', 'coin five', 'coin ten', 'coin twenty', 'coin fifty', 'coin hundred', 'cigars 1'];

console.log(solve(bag));

bag = ['coin 1', 'coin two', 'coin 5', 'coin 10.50', 'coin 20', 'coin 50', 'coin hundred', 'cigars 1'];

console.log(solve(bag));