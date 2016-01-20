function solve(args) {
	var pattern = /(<div)/g;
	var count = 0;
    while (pattern.exec(args)) {
			count++;
	}
	return count;
}

console.log(solve(['<!DOCTYPE html>',
	'<html>',
	'<head lang="en">',
	'    <meta charset="UTF-8">',
	'    <title>index</title>',
	'    <script src="/yourScript.js" defer></script>',
	'</head>',
	'<body>',
	'    <div id="outerDiv">',
	'        <div',
	'    class="first">',
	'            <div><div>hello</div></div>',
	'        </div>',
	'        <div>hi<div></div></div>',
	'        <div>I am a div</div>',
	'    </div>',
	'</body>',
	'</html>']));