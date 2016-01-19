function solve(args) {
    var uotput = [];
    var deleteItem = 0;
    for (var i = 0; i < args.length; i++) {
        args[i].score = (args[i].score / 0.9).toFixed(1);
        if (args[i].score < 100) {
            delete args[i];
            deleteItem++;
        }
    }
    var sorted = args.sort(function (a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });
    for (var i = 0; i < sorted.length - deleteItem; i++) {
        uotput[i] = '{\"name\":' + '\"' + sorted[i].name + '\",' + ' \"score\":' + sorted[i].score + ',' + ' \"hasPassed\":true}';
    }
    return '[' + uotput.join(',') + ']';
}

console.log(solve([
        {
            'name': 'Пешо',
            'score': 91
        },
        {
            'name': 'Лилия',
            'score': 290
        },
        {
            'name': 'Алекс',
            'score': 343
        },
        {
            'name': 'Габриела',
            'score': 400
        },
        {
            'name': 'Жичка',
            'score': 70
        }
    ]
));