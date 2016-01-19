function sove(args){
    var numbers = [];
    var sortNumber = [];
    for (var i = 0; i < args.length; i++) {
        if(!(args[i] < 0) && !(args[i] > 400)){
            numbers.push(args[i]);
        }
    }
    for(var i = 0; i < numbers.length; i++){
        var b = numbers[i] * 0.2;
        sortNumber.push(numbers[i] - b);
    }
    return '[' + sortNumber.sort(function(a, b){return a-b}).join(', ') + ']';
}
console.log(sove([200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1]));