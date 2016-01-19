function groupBy(people, key) {

    /* -----GROUP PEOPLE----- */

    var group = {};
    for (var k in people) {
        var person = people[k];

        if (key.toLowerCase() == 'age') {
            if (group[person.age] == undefined) {
                group[person.age] = [];
            }

            group[person.age].push(person.firstName + ' ' + person.lastName + ' (age ' + person.age + ')');
        } else if (key.toLowerCase() == 'firstname') {
            if (group[person.firstName] == undefined) {
                group[person.firstName] = [];
            }

            group[person.firstName].push(person.firstName + ' ' + person.lastName + ' (age ' + person.age + ')');
        } else if (key.toLowerCase() == 'lastname') {
            if (group[person.lastName] == undefined) {
                group[person.lastName] = [];
            }

            group[person.lastName].push(person.firstName + ' ' + person.lastName + ' (age ' + person.age + ')');
        }
    }

    return group;


}

function Person(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
}
var people = [];
people.push(new Person("Scott", "Guthrie", 38));
people.push(new Person("Scott", "Johns", 36));
people.push(new Person("Scott", "Hanselman", 39));
people.push(new Person("Jesse", "Liberty", 57));
people.push(new Person("Jon", "Skeet", 38));

var groupedPersons = groupBy(people, 'firstname');
console.log('By first name:');
for (var p in groupedPersons) {
    console.log('Group ' + p + ' : [' + groupedPersons[p].join(', ') + ']');
}
console.log();

groupedPersons = groupBy(people, 'age');
console.log('By age:');
for (var p in groupedPersons) {
    console.log('Group ' + p + ' : [' + groupedPersons[p].join(', ') + ']');
}
console.log();

groupedPersons = groupBy(people, 'lastname');
console.log('By last name:');
for (var p in groupedPersons) {
    console.log('Group ' + p + ' : [' + groupedPersons[p].join(', ') + ']');
}
