function removeItem(parameters) {
	
	var result = arr.filter(function (arr) {
		
	    if (arr === parameters) {
	        return false;
		} else {
	        return true;
	    }
	});
    return result;

}


var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
console.log(removeItem(1));


var arr = ['hi', 'bye', 'hello'];
console.log(removeItem('bye'));
