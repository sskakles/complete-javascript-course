///////////////////////////////////////
// Lecture: Hoisting

// functions
//calculateAge(1965);
//
//function calculateAge(year) {
//    console.log(2016 - year);
//}
//
//// retirement(1956);
//var retirement = function(year) {
//    console.log(65 - (2016 - year));
//}
//
//
//// hoisting only works with function declarations
//var myRetirement = function(year) {
//	var dud = 65 - (2018 - year);
//	console.log(dud);
//	return dud;
//}
//
//console.log('shaynes retirment: ' + myRetirement(1972));


// variables

//console.log(age);
//var age = 23;  // this is at global scope...er the window
////
//function foo() {
//    console.log(window.age); // this works
//    console.log(age); // this doesn't work
//    var age = 65;
//    console.log(age);
//}
//foo();
//console.log(age);


//
// some other shit that I forget what the correct name really is
//
// where you can hijack or overload a method function
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
//	calcAge22: function() {
//		this.age = 2018 - this.birthYear;
//	}
//};
//
//var mike = {
//	firstName: 'Mike',
//	lastName: 'HardLemonade',
//	birthYear: 1985
//}
//
//console.log(mike);
//mike.calcAge22 = johnnie.calcAge22;
//console.log(mike.calcAge22());


//
// do some isprime shit
//
//function isPrime(value) {
//	if (!isPrime.answers) isPrime.answers = {};
//	if (isPrime.answers[value] != null) {
//		return isPrime.answers[value];
//	}	
//
//// this is the fucked up solution in the javascript ninja book (it's fucking wrong)
////
////	var isItReallyPrime = value != 1;
////	for (var i = 2; i < value; i++) {
////		if (value % 2 == 0) {
////			isItReallyPrime = false;
////			break;
////		}
////	}
//	
//	// here is the real solution
//	//
//	// return false because by definition 1 and any even Number is !Prime
//	if (value < 2 || value % 2 == 0) {
//		return isPrime.answers[value] = false;
//	} 
//	
//	var factor = 3;
////o(n)	while (factor <= value && !(value % factor == 0)) {
////		factor += 2;	
//// 	}
//	// speed this up for a factor of 2.....er try to get closer to logn er nlogn 
//	while (!(factor * factor > value || value % factor == 0)) {
//		factor += 2;	
// 	}
//
//	var isItReallyPrime = factor * factor > value; // o(n)value % factor == 0;			
//	return isPrime.answers[value] = isItReallyPrime;
//}
//
//var isThisDamnNumberPrime = 58;
//var x = isPrime(isThisDamnNumberPrime);
//console.log('Is ' + isThisDamnNumberPrime + ' prime? -> ' + x);







///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









