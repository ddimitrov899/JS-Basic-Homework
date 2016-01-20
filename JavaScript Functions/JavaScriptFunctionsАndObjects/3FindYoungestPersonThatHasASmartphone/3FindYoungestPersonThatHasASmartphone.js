function findYoungestPerson(people) {
	var smartest = hasSmartPhone(people);
	var young = youngestPerson(smartest, 0);
  //  var fullname = young.forEach(function(x) {
  //      var firstname = x.firstname;
  //      var lastname = x.lastname;
		//var fullname = firstname + ' ' + lastname;
  //      return fullname;
  //  });
    var fullname = '';
	for (var firstname in young) {
		fullname += young[firstname].firstname + ' ';
	}
	for (var lastname in young) {
		fullname += young[lastname].lastname;
	}
    return 'The youngest person is ' + fullname;
	
	function youngestPerson(people, i) {
		var young = people.filter(function () {
			
			if (people[i].age < people[1].age) {
				i++;
				return true;
			} else {
				return false;
			}
		});
		return young;
	}
	function hasSmartPhone(people) {
		var smartest = people.filter(function (person) {
			if (person.hasSmartphone) {
				return true;
			}
			return false;
		});
		return smartest;
	}
}


var people = [
	{ firstname: 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
	{ firstname: 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
	{ firstname: 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
	{ firstname: 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }
];
console.log(findYoungestPerson(people));