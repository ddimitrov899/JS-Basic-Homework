function solve(input) {
    var line = input[0];
    var pattern = /[^A-Za-z]+/g;
    var match = line.split(pattern);
    match = match.filter(Boolean);
    var output = [];
    for (var a = 0; a < match.length; a++) {
        for (var b = 0; b < match.length; b++) {
            for (var c = 0; c < match.length; c++) {
                if (a !== b) {
                    if (match[a] + match[b] === match[c]) {
                        var concretenation = match[a] + '|' + match[b] + '=' + match[c];
                        if (output.indexOf(concretenation) < 0) {
                            output.push(concretenation);
                        }
                    }
                }
            }
        }
    }
    if (output.length > 0) {
        console.log(output.join('\n'));
    }
    else {
        console.log('No');
    }
}
solve(['Uni(lo,.ve=I love SoftUni (Soft)']);