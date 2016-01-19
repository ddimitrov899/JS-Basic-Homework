
function solve(input){
    var html = input.join('\n');
    var pattern = /<a\s*.+?href\s*?=(\s{1,})?"?'?([A-Za-z:()#\/\.]+?)'?"?/g;
    var match ;
    while (match = pattern.exec(html)) {
        if (match === undefined){
            continue;
        }
        else {
            var lastElement = [];
            lastElement.push(match[2].lastIndexOf('\''));
            console.log(match[2]);


        }
    }
    
}