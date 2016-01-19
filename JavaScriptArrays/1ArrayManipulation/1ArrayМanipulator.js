function solve(input) {
    var minNum= Number.MAX_VALUE;
    var maxNum = Number.MIN_VALUE;
    var sortingDesending = [];
    for (var i = 0; i < input.length; i++) {
        if(minNum > input[i]){
            minNum = input[i];
        }
        if(maxNum < input[i]){
            maxNum = input[i];
        }
        if(parseInt(input[i]) === input[i]){
            sortingDesending.push(input[i])
            sortingDesending.sort(function(a, b){return b-a});
        }
    }
    var mostFrequentNumber = modeArray(input);
    function modeArray(array)
    {
        if (array.length == 0)
            return null;
        var modeMap = {},
            maxCount = 1,
            modes = [array[0]];

        for(var i = 0; i < array.length; i++)
        {
            var el = array[i];

            if (modeMap[el] == null)
                modeMap[el] = 1;
            else
                modeMap[el]++;

            if (modeMap[el] > maxCount)
            {
                modes = [el];
                maxCount = modeMap[el];
            }
            else if (modeMap[el] == maxCount)
            {
                modes.push(el);
                maxCount = modeMap[el];
            }
        }
        return modes;
    }
    return 'Min Number: ' + minNum + '\nMax Number: ' + maxNum + '\nMost Frequent Number: ' + mostFrequentNumber +'\n'+'['+ sortingDesending.join(', ') + ']';
}
console.log(solve(["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]]));
