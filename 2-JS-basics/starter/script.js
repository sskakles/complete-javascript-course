/*jslint devel: true */
///*jslint es6:true*/

//var firstName = 'John';
//var lastName = 'Smith';
//lastName = 22;
//var twentyFour = 24;
//var trueDat = true;
//
//var whatever = 'whatever';
//
//lastName = true;
//console.log(firstName + ' ' + lastName);

// second part
//
//var letsGo;
//var job, isMarried;
//job = 'teacher';
//isMarried = 'false';
//
//var sskakles = {whatever: "sure", sure: "youAreGoingToDoGreat"};
//console.log('sskakles: ' + sskakles.whatever + ' ' + sskakles.sure);
//
//if (letsGo === undefined) {
//	console.log(letsGo);
//}
//
//if (letsGo !== undefined) {
//	console.log('is he really married: ' + isMarried);
//} else {
//	console.log('this is really really not null or undefined or not defined');
//}

let whatever = ('<--------------> YOU CAN DO THIS SHAYNE!!! <-------------- ');
console.log(whatever);

let logHi = (str = 'hi') => {
	console.log(str);
}
logHi();

//
// Basic Operators
//
//var year, yearJohn, yearMark;
//now = 2020;
//ageJohn = 28;
//ageMark = 33;
//
//yearMark = now - ageJohn;
//yearJohn = now - ageMark;
//
//console.log(yearJohn);
//console.log(now + 20);
//
//
//// logical operators
//var johnOlder = ageJohn < ageMark;
//console.log(johnOlder);
//
//// type of operator
//console.log(typeof johnOlder);
//console.log(typeof ageJohn);
//console.log(null);
//console.log(undefined);

//
// Operator precedence
//
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//
// if then else and blah blah blah...and that terary thing
//
var blah = 'blah';
if (blah === 'blah') {
	console.log('this was true');
}

var firstName = 'John';
var age = 16;

//var foo = age >= 18 ? 'yep' : 'nope';
//console.log(foo);

let foobar = (foo = (age >= 18 ? 'yep' : 'nope')) => {
	console.log(foo);
}
foobar();

//let logHi = (str = 'hi') => {
//	console.log(str);
//}
//logHi();

//
// Truthy and Falsey Values
//
// falsy: null, undefined, NaN, 0, ''
//var height;
//height = 23;
//
//if (height || height === 0) {
//	console.log('Variable is defined');
//} else {
//	console.log('Variable has NOT been defined');
//}
//
//// type coersion stuff
//if (height == '23') {
//	console.log('The == operator does type coersion');
//}
//
//if (height === '23') {
//	console.log('The == operator does type coersion...true');
//} else {
//	console.log('The == operator does type coersion...false');	
//}


//
// Functions...junktions...what's your function malfunction junktion
//
// Function Statements and Expressions
//

// this is a function declaration
//function whatDoYouDo (job, firstName) {}

// this is a function expression
//var whatDoYouDo = function (jo, firstName) {
//	
//}


//
// A-Fucking Arrays
//

// Initialize new array
//var names = ['John', 'Mary', 'James'];
//var years = new Array(123,214,234);
//console.log(names);
//console.log(names.length);
//names[1] = 'Ben';
//console.log(names);
//
//
//// Mutate array data
//names[5] = 'Mary';
//console.log(names);
//
//var dud = ['john', 'smith', 1990, 'teach'];
//dud.push('blue');
//console.log(dud);
//dud.unshift('Mr');
//console.log(dud);
//
//dud.pop();
//dud.pop();
//console.log(dud);

//
// Objects and properties
//

// this is an object literal
//var johnnie = {
//	firstName: 'Johnnie',
//	lastName: 'Walker',
//	birthYear: 1842,
//	family: ['Jose', 'Tito', 'Jameson', 'Jack'],
//	job: 'drinker',
//	isMarried: false
//};
//
//console.log(johnnie.firstName);
//console.log(johnnie['lastName']);
//var x = 'birthYear';
//console.log(johnnie[x]);
//
//johnnie.job = 'really really big drinker';
//johnnie['isMarried'] = true;
//console.log(johnnie);
//
//// new object syntax
//var jane = new Object();
//jane.name = 'jane';
//jane.birthYear = 1998;
//jane['lastName'] = 'Smith';
//console.log(jane);

//
// Objectds and methods
//
//var johnnie = {
//	firstName: 'Johnnie',
//	lastName: 'Walker',
//	birthYear: 1842,
//	family: ['Jose', 'Tito', 'Jameson', 'Jack'],
//	job: 'drinker',
//	isMarried: false,
//	calcAge: function(birthYear) {
//		return 2018 - birthYear;
//	},
//	calcAge2: function() {
//		return 2018 - this.birthYear;
//	},
//	calcAge2: function() {
//		this.age = 2018 - this.birthYear;
//	}
//};
//
//console.log(johnnie.calcAge(1990));
//console.log(johnnie.calcAge2());
//console.log(johnnie.age);


// 
// freaking fruit Loops as you can guess
//
for (var i = 0; i < 5; i++) {
	console.log(i);
}

var ii = 0;
while (ii < 5) {
	console.log(ii++);	
}

for (var i = 4; i >= 0; i--) {
	console.log(i);
}




