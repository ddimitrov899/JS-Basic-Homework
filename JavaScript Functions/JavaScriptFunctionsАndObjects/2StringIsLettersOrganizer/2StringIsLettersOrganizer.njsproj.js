function sortLetters(arr, bool) {
	
	var result = arr.split('');
	var tmp;
    var sorting = sort(result);
    if (!bool) {
        sorting.reverse();
    }
    
	return '\'' + sorting.join('') + '\'';
	
	function sort(text) {
		for (var i = 0; i < text.length; i++) {
			
			for (var j = 0; j < text.length - 1; j++) {
				if (text[j].toLowerCase() > text[j + 1].toLowerCase()) {
					tmp = text[j];
					text[j] = text[j + 1];
					text[j + 1] = tmp;
				}
			}
		}
		return text;
    }
}

console.log(sortLetters('HelloWorld', true));
console.log(sortLetters('HelloWorld', false));