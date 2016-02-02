function solve(arr) {
	var input = [],
		spamNames = arr[arr.length - 1],
		spam = spamNames.split(' '),
		patern = '',
		regex = /(#\b[a-zA-Z][\w\-]+[a-zA-Z0-9]\b)/g,
		match,
		replace,
		name,
		isCode = false,
		i,
		count,
		index;
	for (index = 0; index < arr.length - 1; index++) {
		input[index] = arr[index];
	}
	for (i in spam) {
		patern = '#' + spam[i];
		
		for (index = 0; index < input.length; index++) {
			
			if (input[index] === '<code>') {
				isCode = true;
				continue;
			}
			if (isCode && input[index] === '</code>') {
				isCode = false;
				
			} else if (isCode) {
				continue;
			}
			while (input[index].indexOf(patern) !== -1) {
				replace = new Array(patern.length).join('*');
				input[index] = input[index].replace(patern, replace);
			}
			replace = new Array(patern.length).join('*');
			input[index] = input[index].replace(patern, replace);
			
		}
	}
	patern = /\#(\b[a-zA-Z][\w\-]+[a-zA-Z0-9]\b)/g;
	for (index = 0; index < input.length; index++) {
		if (input[index] === '<code>') {
			isCode = true;
			continue;
		}
		if (isCode && input[index] === '</code>') {
			isCode = false;
			continue;
		} else if (isCode) {
			continue;
		}
		match = regex.exec(input[index]);
		
		name = patern.exec(input[index]);
		if (match !== null) {
			input[index] = input[index].replace(match[1], function () {
				return '<a href="/users/profile/show/' + name[1] + '">' + name[1] + '</a>';
			});
				
		}
		
	}
	for (count in input) {
		console.log(input[count]);
	}
}
var arr = [
	'#RoYaL: I\'m not sure what you mean,',
	'but I am confident #123 that I\'ve written',
	'everything correctly. Ask #iordan_93',
	'and #pesho if you don\'t believe me',
	'<code>',
	'#trying to print stuff',
	'print("yoo")',
	'</code>',
	'pesho gosho'
];

arr = [
	'#gosho, #pesho, #gosho, #pesho, #otiame, #namore',
	'#gosho',
	'#pesho',
	'#madafaka',
	'</code>',
	'#1nval1d says yoo',
	'#another_invalid_ says gz gg gj',
	'#Make_me_a_LINK!',
	'gosho pesho'
];

solve(arr);