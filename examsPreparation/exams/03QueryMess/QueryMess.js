function solve(arr) {
	
	var regex = /([^=&?]+)=([^=&?\s]+)/g;
	var index, lineObj, mach, key, value, whitespaceRegex = new RegExp(/(\+|\%20)+/g), output;
	for (index in arr) {
		var curenLine = arr[index];
		lineObj = {};
		mach = regex.exec(curenLine);
		while (mach) {
			key = mach[1].replace(whitespaceRegex, ' ').trim();
			value = mach[2].replace(whitespaceRegex, ' ').trim();
			if (!lineObj[key]) {
				lineObj[key] = [];
			}
			lineObj[key].push(value);
			
			mach = regex.exec(curenLine);
			
		}

	    output = '';
	    for (var i in lineObj) {
	        output += i + '=[' + lineObj[i].join(', ') + ']'; 
	    }
		console.log(output);
	}
}


var arr = ['foo=%20foo&value=+val&foo+=5+%20+203'];
solve(arr);