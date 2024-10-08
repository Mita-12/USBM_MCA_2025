let num=5;
let num2=3;

let add=num+num2;
console.log(add);

let mul=num*num2;
console.log(mul);

let div=num/num2;
console.log(div);

let sub=num-num2;
console.log(sub);

//modul
//find out reminder

let mod=num%num2;
console.log(mod);

//odd even find out
let n=29;
let even=n%29;
let odd=n%29;
console.log(even);
console.log(odd);

//Exponetial opretor
let square=2**2;
let cube=2**3;
console.log(square);
console.log(cube);

//Reational opretor
//! not opretor
console.log(10<5);
console.log(10<5);
console.log(10>=5);
console.log(10<!5);
console.log(!5);

//eqality opretor
//'==' value check
//'===' value and data type check
console.log(5==5);
console.log(5==6);
console.log(5=="5");
console.log(5 ==="5");
console.log(5 !="5");
console.log(5 !=="5");

//conditional statement
//if(condition){//true code
//}
//false
//false ,0,-0,null,undefine

if(""){
    console.log("It is true");//it has some space
}
if(-100){
    console.log("It is true");
}
if(false){
    console.log("It is true");
}
if(-0.5662){
    console.log("It is true");
}
//task:
//Given total_bill ,discount_start_price if you satisfy the condition print discount 
//Available no discount

let total_bill=100;
if(total_bill > 100){
    console.log("Discount Available");
}
else{
    console.log("No discount");
}


//task:2
let age=60;
if(age<18){
    console.log("Adult");
}
else if(age>=60){
    console.log("senior citizen");
}
else{  
    console.log("minor");
}

//task:3
//check if (male) and then check (22+) the he can able to marry

//let age1=22;
var gender;
if(gender==="male"){
    console.log("male");
}
else if(age>=22){
    console.log("he can able to marry");
}
else{
    console.log("");

}


//logical opretor
//task:4
//print all the vowels(a,e,o,u,i)


let char="a";
switch(char){
case "a"://case value
 console.log("this is vowels ");
 break;
 case "e"://case value
 console.log("this is vowels ");
 break;
 case "i"://case value
 console.log("this is vowels ");
 break;
 case "o"://case value
 console.log("this is vowels ");
 break;
 case "i"://case value
 console.log("this is vowels ");
 break;
 default:
 console.log("this is not vowels ");
 break;
}

//task=5
//print week of the day i switch case
//(0=sunday,1=monday....)
let day;
switch(day){
case 0://case value
 console.log("Sunday");
 break;
 case 1://case value
 console.log("Monday ");
 break;
 case 2://case value
 console.log("Tuesdy");
 break;
 case 3://case value
 console.log("Wendesday ");
 break;
 case 4://case value
 console.log("Thrusday ");
 break;
 case 5://case value
 console.log("Friday ");
 break;
 case 6://case value
 console.log("STURDAY ");
 break;
 default:
 console.log("this is not a day ");
 break;
}

//task:6
//print all month
//0-january.....
let month;
switch(month){
case 0://case value
 console.log("jan");
 break;
 case 1://case value
 console.log("feb ");
 break;
 case 2://case value
 console.log("march");
 break;
 case 3://case value
 console.log("April ");
 break;
 case 4://case value
 console.log("May ");
 break;
 case 5://case value
 console.log("june ");
 break;
 case 6://case value
 console.log("July ");
 break;
 case 7://case value
 console.log("Aug ");
 break;
 case 8://case value
 console.log("Sept ");
 break;
 case 9://case value
 console.log("Oct ");
 break;
 case 10://case value
 console.log("Nove ");
 break;
 case 11://case value
 console.log("Dec ");
 break;
 default:
 console.log("this is not a month ");
 break;
}







































