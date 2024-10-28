//Math in javascript
let num=25;
let num2=55;
let add=num+num2;
console.log(add);
let num3=55.5;
let add1=num+num3;
console.log(add1);//80.5

// Math in build function in javascript

// Round

console.log(Math.round(add1));//81
console.log(Math.PI);//3.14159265358

console.log(Math.round(0.00005));//0

//Square root
//console.log(num**2);//625
console.log(Math.sqrt(num));
console.log(Math.pow(16));//nan
console.log(Math.pow(16,2)); //256 use the 2 parameter
 
console.log(Math.pow(5,3));

//Ceil value and Floor value
console.log(Math.ceil(98.75));//99
console.log(Math.floor(98.75));//98
console.log(Math.floor(2.5));//2

console.log(Math.round(2.4));//2
//After .5 The value is increase
console.log(Math.round(2.6));//3

//Maximum and Minium
console.log(Math.max(20,53,55));//55
console.log(Math.min(20,53,55));//20

//Absoult
console.log(Math.abs(-10));//10

//Random(0 to 9)
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

//WAP to print the random number between 5 to 27
let start=5;
let end=27;
//To find out the number [(end+start)+1]
let totalno=(end+start)+1;
console.log(Math.random()*totalno+start);
let random_number = Math.floor(Math.random() * totalno + start);
// console.log(random_number);


//Date 
//To create a Date object
let date = new Date();
console.log(date); 
console.log(date.toISOString()); 

console.log(date.getFullYear()); 
console.log(date.getMonth()); 
console.log(date.getMonth() + 1); 
console.log(date.getDate()); 
console.log(date.getHours()); 
console.log(date.getMinutes());  
console.log(date.getSeconds());  
console.log(date.getDay());  
