//
// Function Constructor & Protyping
//

//var john = {
//	name: 'John',
//	yearOfBirth: '1990',
//	job: 'teacher'
//};
//
//
//// Function constructor
//var Person = function(name, yearOfBirth, job) {
//	this.name = name;
//	this.yearOfBirth = yearOfBirth;
//	this.job = job;
////	this.calcAge = function() {
////		console.log(2018 - this.yearOfBirth);
////	}
//}
//
//// protoype each method for inheritance
//Person.prototype.calcAge = function() {
//		console.log(2018 - this.yearOfBirth);
//}
//Person.prototype.lastName = 'Smith';
//
//var john = new Person('John', 1990, 'teacher');
//var joe = new Person('Joe', 1994, 'bookie');
//john.calcAge();
//joe.calcAge();
//	
//console.log(john.name);
//console.log(john.lastName);
//console.log(joe.name);
//console.log(joe.lastName);

//
// Object.create
//

//var personProto = {
//	calulateAge: function() {
//		console.log(2019 - this.yearOfBirth);
//	}
//}
//
//var john = Object.create(personProto);
//john.name = 'John';
//john.yearOfBirth = '1990';
//john.job = 'teacher';
//
//var jane = Object.create(personProto, {
//	name: {value: 'Jane'},
//	yearOfBirth: {value: 1990},
//	job: {value: 'designer'}
//})


//
// Primitives vs Objects
//
// Primitives: numbers, strings, boolean, null, undefined (primitives)
//

// Primitives
//var a = 23;
//var b = a;
//a = 33;
//console.log(a);
//console.log(b);
//
//// Objects
//var obj1 = {
//	name: 'John',
//	age: 23
//}
//
//var obj2 = obj1;
//obj1.age = 30;
//console.log(obj1.age);
//console.log(obj2.age);
//
//// Functions
//var age = 33;
//var obj = {
//	name: 'Shayne',
//	city: 'Austin'
//}
//
//function change (a, b) {
//	a = 30;
//	b.city = 'San Fransisco';
//}
//
//change(age, obj);
//console.log(age);
//console.log(obj.city);


//
// Passing functions as arguments
//
//var years = [1990, 1965, 1947, 1949];
//
//function arrayCalc(arr, fn) {
//	var results = [];
//	for (var i = 0; i < arr.length; i++) {
//		results.push(fn(arr[i]));
//	}
//	return results;
//}
//
//function calcAge(el) {
//	return 2019 - el;
//}
//
//function isLegalAge (el) {
//	return el >= 21;
//}
//
//var theStuff = arrayCalc(years, calcAge);
//var fullAges = arrayCalc(years, isLegalAge);
//
//console.log(theStuff);
//console.log(fullAges);



//
// IIFE Immediately Invoked Function Expressions
//
//function game() {
//	var score = Math.random() * 10;
//	console.log(score >= 5);
//}
//game();


// iife
//(function() {
//	var score = Math.random() * 10;
//	console.log(score >= 5);
//})();
//
////console.log(score);
//
//(function(goodluck) {
//	var score = Math.random() * 10;
//	console.log(score >= 5 - goodluck);
//})(5);

//
// CLOSURES...
//
function retirement (retirementAge) {
	var a = ' years left until retirement';
	return function(yearOfBirth) {
		var age = 2019 - yearOfBirth;
		console.log(retirementAge - age + a);
	}
}

var retirementUS = retirement(66);
retirementUS(1972);

retirement(66)(1972);



var a = 'Hola';
function kappa() {
	var a = 'Him'; // Local scope	
	if (true) {
	 	var a = 'Mojo Jojo'; // Block scope
		console.log(a); // Outputs 'Mojo Jojo'
	}
	console.log(a); // Outputs 'Him'...if the var a is let a
	var a = 'whatever';
	if (true) {
		console.log(a); // Outputs 'Mojo Jojo'
	}
}
kappa();


var b = 'Wilma Flintstone';
var b = 'Betty Rubble';
console.log(b); // Outputs 'Betty Rubble'

var d = 'Tom';
function zeta() {
	var d = 'lets fucking go shayne';
	if (d === undefined) {
		var d = 'Jerry';
	}
	console.log(d);
}
zeta();


var age = 46666;
console.log(age);

foo();
function foo() {
    console.log(age);
    var age = 33;
    console.log(age);
    var age = 22;
}

console.log(age);

var ii = 0;
while (ii < 10) {
	console.log(ii++);
}

//for (let i = 0; i <55; i++) {
//	console.log(i);
//}

















