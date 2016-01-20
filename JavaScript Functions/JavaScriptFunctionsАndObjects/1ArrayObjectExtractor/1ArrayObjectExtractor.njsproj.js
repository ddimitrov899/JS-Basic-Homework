function extractObjects(array) {
    
	var result = array.filter(function (obj) {
	    if ( typeof obj === "object") {
			if (!Array.isArray(obj)) {
	            return obj;
	        }
	    }
	});
	
    return result;
}


console.log(extractObjects([
	"Pesho",
	4,
	4.21,
	{ name : 'Valyo', age : 16 },
	{ type : 'fish', model : 'zlatna ribka' },
	[1, 2, 3],
	"Gosho",
	{ name : 'Penka', height: 1.65 }
]
));