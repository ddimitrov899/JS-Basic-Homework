function solve(args){
    var href = /href=http:\/\/softuni.bg/g.exec(args);
    var tag = /SoftUni/g.exec(args);

    return '\<ul>\n <li>\n  [URL ' + href +'\]' + tag + '\[/URL]\n' + '\ </li>\n</ul>';
}
console.log(solve('\<ul> <li> <a href=http://softuni.bg>SoftUni</a> </li> </ul>'));