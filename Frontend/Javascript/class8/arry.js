//Array
//Ex-1
let newArray = [];
console.log(newArray);
console.log(typeof newArray);

//Ex-2
let userName = ["madhu", "BBSR", "student", true];
console.log(userName);

//Array Declartion
let number = [1, 2, 3, 4];
console.log(number);
let newNamber = new Array(1, 2, 3, 4);
console.log(newNamber);

//How to check length
console.log(number.length);

//Accessing
let cities = ["Bhubaneswer", "Baleswar", "cuttack", "Berhmpur"];
console.log(cities[0]);
console.log(cities[3]);

//find last cities
let lastcity = cities.length - 1;
console.log(lastcity);

console.log(cities[2]);
console.log(cities.length - 2);

//Modify
console.log(cities);
let Modifycity = "Gnjam";
cities[2] = Modifycity;
console.log(cities[2]);
console.log(cities);

//Add
//push()
console.log(cities);
let addcity="jajpur";
cities.push(addcity);
console.log(cities);

//pop()
console.log(cities);
let removecity="jajpur";
cities.pop(removecity);
console.log(cities);

//shift()

//unshift()