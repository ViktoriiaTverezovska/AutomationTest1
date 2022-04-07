//ARRAYS
const emptyarray = [];
const oneitemarray = ["chocolate chip"];
const favoriteCookie = [
    "chocolate chip",
    "sugar cookie",
    45,
    1.567
];
favoriteCookie.push('Random cookie', 'test'); //add item to the array
let removedCookie = favoriteCookie.pop(); //remove last element of the array & it can be saved to a variable
console.log(emptyarray);
console.log(oneitemarray); 
console.log(favoriteCookie);
console.log(removedCookie);
console.log(favoriteCookie[0]); //accessing item is the array
console.log(favoriteCookie.length);
console.log(favoriteCookie[favoriteCookie.length-1]);

//FUNCTIONS
setTimeout(function(){console.log("Hello!")}, 1000); //function is anonymous bc it does not have a name: function hello(){console.log("Hello!")}
//can be replaced with arrow function
setTimeout(()=>console.log("Hello!"), 1000);
//when function has just 1 line of code, {} are not needed

//OBJECTS
//LITERALS
const cookie = {
    name: "Chocolate Chip",
    isGlutenFree: false,
    "+Yummy": true,
    eatCookie: function () {
        console.log("I am eating " + this.name);
    }
};

cookie.name = "Chip Chocolate";
cookie.isGlutenFree = true;
console.log(cookie["+Yummy"]);
console.log(cookie);

//CLASSES
class Cookie {
    constructor(name, isGlutenFree) {
        this.name = name;
        this.isGlutenFree = isGlutenFree;
    }

    eatCookie() {
        console.log("I am eating " + this.name);
    }
}

const myCookie = new Cookie("Iced Oatmeal", false);
console.log(myCookie["name"]);
console.log(myCookie.name);
myCookie.eatCookie();

//CONDITIONALS
let attendance = 14;
if (attendance < 15) {
    console.log("We have room");
} else if (attendance > 15) {
    console.log("We're over capacity");
} else {
    console.log("We're at full capacity");
} 

//LOOPS
//FOR
const names = ["Mark", "Sarah", "Ebony"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]); // 0, 1, 2
}

const numbers = [1, 2, 3, 4];

for (let j = 0; j < numbers.length; j++) {
    console.log(numbers[j]);
}
//WHILE
// while (condition)
let password = "tomorrow";
let userGuess = "";

while (userGuess !== password) {
   userGuess = prompt("Please enter your password");
}

alert("Login Successful");

// do {} while
let factorial = 1;
let number = 5;
let original = number;

do {
    factorial = factorial * number;
    number--
} while (number > 0);

console.log(original + " factorial is " + factorial);
