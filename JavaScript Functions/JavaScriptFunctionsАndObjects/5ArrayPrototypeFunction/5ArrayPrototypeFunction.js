Array.prototype.removeItem = function(item) {
	var obj = this;
    var index = 0;
    var remuve = obj.filter(function() {
		if (obj[index] === item) {
		    index++;
            return false;
		} else {
		    index++;
            return true;
        }
	});
    console.log(remuve);
};

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
arr.removeItem(1);

var arr = ['hi', 'bye', 'hello'];
arr.removeItem('bye');
