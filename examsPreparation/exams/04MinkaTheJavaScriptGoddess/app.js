function solve(arr) {
    var input = [],
        goddessObj = {},
        name,
        type,
        task,
        averageNumber,
        linesNumber,
        isExist,
        index,
        i;
    for (index in arr) {
        input[index] = arr[index].split(' & ');
    }
    for (i in input) {
        name = input[i][0];
        type = input[i][1];
        task = 'Task ' + input[i][2];
        averageNumber = Number(input[i][3]);
        linesNumber = Number(input[i][4]);
        isExist = false;
        for (index in goddessObj) {
            if (index === task) {
                goddessObj[index].tasks.push({name: name, type: type});
                goddessObj[index].average += averageNumber;
                goddessObj[index].lines += linesNumber;
                isExist = true;
            }
        }
        if (!isExist) {
            goddessObj[task] = taskGoddess();
            goddessObj[task].tasks.push({name: name, type:type});
            goddessObj[task].average = averageNumber;
            goddessObj[task].lines = linesNumber;
        }

    }
    for (index in goddessObj) {
        goddessObj[index].average = goddessObj[index].average / goddessObj[index].tasks.length;
        goddessObj[index].average = Number(goddessObj[index].average.toFixed(2).toString());
        goddessObj[index].tasks.sort(function(a, b){
           return a.name.localeCompare(b.name);
        });
    }

    var keySorted = Object.keys(goddessObj).sort(function (a, b) {
        if (goddessObj[b].average === goddessObj[a].average) {
            return goddessObj[a].lines - goddessObj[b].lines;
        }

        return goddessObj[b].average - goddessObj[a].average;
    });
    var objSort = {};
    keySorted.forEach(function (a) {
        objSort[a] = goddessObj[a];
    });

    console.log(JSON.stringify(objSort));

    function taskGoddess() {
        return {
            tasks: [],
            average: 0,
            lines: 0
        };
    }
}

arr = ['Array Matcher & strings & 4 & 100 & 38',
    'Magic Wand & draw & 3 & 100 & 15',
    'Dream Item & loops & 2 & 88 & 80',
    'Knight Path & bits & 5 & 100 & 65',
    'Basket Battle & conditionals & 2 & 100 & 120',
    'Torrent Pirate & calculations & 1 & 100 & 20',
    'Encrypted Matrix & nested loops & 4 & 90 & 52',
    'Game of bits & bits & 5 & 100 & 18',
    'Fit box in box & conditionals & 1 & 100 & 95',
    'Disk & draw & 3 & 90 & 15',
    'Poker Straight & nested loops & 4 & 40 & 57',
    'Friend Bits & bits & 5 & 100 & 81'];
solve(arr);