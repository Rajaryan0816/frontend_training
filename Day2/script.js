// // var
// console.log(a);
// var a=10;
// console.log(a);

// // let
// console.log(b);
// let b=20;
// console.log(b);

// // const
// console.log(c);
// const mood="good mood";
// console.log(mood);


// Example
// console.log("Hello Students How are you");
// var hadBreakfast="No";
// console.log(No);
// console.log(currentSubject);
// let currentSubject="JavaScript";
// console.log(currentSubject);
// const nextTopic="Data Types"
// console.log(nextTopic);
// console.log("Enjoy....");


// Datatypes

// let contact=8787878787;
// console.log("contact Number is: ",contact);

// var price=399;
// console.log("Price of the product is: ",price);

// const company="Capgemini";
// console.log("Aryan selected for ",company);

// let salary="4Lpa";
// console.log("Slary Package is: ",salary);


// let isitGoodCompany=true;
// console.log("Is it company good ??",isitGoodCompany);

// var isTestyantraGoodCompany=false;
// console.log("Is Testyantra Good Company ",isTestyantraGoodCompany);

// let slaryy=undefined;
// console.log("TestYantra slary is: ",slaryy);

// let instagramId=undefined;
// console.log("Aryan Instagram Acc is: ",instagramId);



// let productId=null;
// console.log(productId);

// var joiningDate=null;
// console.log(joiningDate);

// let transId=677389376328936287n;
// console.log("your traction is: ",transId);
// console.log(typeof(transId));



// let price=599;
// var quan=10n;
// console.log(price+quan);


// let pricee=599n;
// var quant=10n;
// console.log(pricee+quant);

// let dis="100";
// const kilo=100;
// console.log(dis==kilo);


// let a=Symbol("Aryan");
// let b=Symbol("Aryan");
// console.log(a==b);



// function greeting(num1,num2){
//     console.log("The sum of two number is: ");
//     return num1+num2;
// }
// let result=greeting(5,2)
// console.log(result);


// function f1(){
//     console.log("Hii");
//     return;
// }
// let res=f1()
//     console.log(res);


// function f1(){
//     console.log("Hello");
// }
// let a=f1()
// console.log(a);




// different types of functions

// 2..Anonymous function 
// let af=function (){
//     console.log("This is an anonymous function");
// }af();


// 3..function expression 

// let b=function sleep(){
//     console.log("Sleeping");
// }b();


// arrow function 
// let a=(student)=>{
//     console.log("Hello");
//     console.log(student,"Is a good Student");
// }

// a("Aryan");



// let a=()=>
//     "hii"
// let b=a()
// console.log(b);


// let a=()=>
//     "hii"
// console.log(a());



// higher order function

// function f1(){
//     console.log("hdjfdjdjshjs");

// }



// function f2(student){

// console.log("example for Hoc");
// // console.log(student);//function
// student();

// }
// f2(f1)



// function f1(){
//     console.log("ad");
//     return function f2(){
//         console.log("ddewdwd");
//     }
// }



// Nested function --functio inside another function

function outer()
{
    let like=10;
    function inner(){
        like++;
        console.log("Like on your post is:",like);


    }inner()

}outer()



