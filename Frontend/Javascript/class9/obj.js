/*//social media backend comments 
let user={
    username:"abc",
    emailid:"acd@gmail.com",
    gender:"male",
    age:25,
    comment:["abc","scd"],
    address:{city:"bbsr",
    pin:78555,
    state:"odisha"}

}*/
//Accs value username
//email
//city&state
//comment
//comment(1st and last)
 //user u1 = new user();
// user.username("abc");
//console.log(user.comment[0],user.comment[1]);
let student={
    name:"madhu",
    age:25,
    greet:function(){
        console.log(`hello,${this.name}`);
    }
}
//console.log(student.greet());
console.log(student.name);
//add to cart
let product={
    id:11,
    name:"i-phone",
    stack:30,
    restack(x){
        this.stack=x
    }
}
product.restack(20);
console.log(product);

