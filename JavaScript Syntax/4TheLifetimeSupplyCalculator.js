var calcSupply = {age: 38, maxAge: 118, food:"chocolate", foodPerDay: 0.5};

function CalcSupply() {
    var years= 365 * calcSupply.foodPerDay;
    var age = calcSupply.maxAge - calcSupply.age;
    var foodNeed = years * age;
    console.log(foodNeed + 'kg of chocolate would be enough until I am ' + calcSupply.maxAge + ' years old.');
}