// var age =30;
// var name = "kartik";
// var isMale = true;
// var isStudent = true;
// var firstname = "kartik";
// var lastname = "Jagdale";

// console.log(age);
// console.log(name);
// console.log(isMale);
// console.log(isStudent);
// console.log(firstname); 

// // objects and array
// var storage ={
//     key : storage,

//     name : "kartik",
//     age : 18,
//     isLearning : true,
// }
// console.log(storage.name);

// //here its a array 
// var list =
// [
//     "kartik", 95.68 ,"ENGINNERING", true
// ] 
// console.log(list);
// // var abc_name 
// // var _abc
// // var $abc
// // var abc123
// // var bac$123
// //they are valid variable names


// // var 123abc
// // var abc-123
// // var abc 123
// // they are not valid variable names.

// //day 16:js basics
// //string manipulation
// var name = "kartik is CS undergad";
// console.log(name.length);
// console.log(name.includes("a"));
// console.log(name.split(" "));
// var isMale = false;
// isMale ?console.log("okeii") : console.log(" thik a");


// //conditional statements
// var age = 18;
// if (age>=18)
// {
//     console.log("you are eligible for driving");
// }
// else{
//     console.log("you are not eligible for driving");
// }
// //kaun banega crorepati
// console.log("how many cities are there in india");
// const ans = "28";
// switch (ans)
// {
//     case 28:{console.log("you won 1000"),true;break;} 
//     case 30:{console.log("you are wrong");break;}
//     case 29:{
//         console.log("you are nearly correct");break;
//     }
//     default:{
//         console.log("you are wrong")
//     }
// }
// var a = undefined;
// console.log(a);


// //what's new i learn about const
// const statements = {
//        name :"kartik"
// }
// statements.age = 18;
// statements.name ="keshav"
// console.log(statements)

// //we can changed data in const var and updated it.


// //day 17:loops 
// for(
//   let  i = 0;
//     i<=10;
//     i++
// ){
//     console.log(i);
// }

// //while loop


// for(
//     i=1;
//     i<=20;
//     i++
   
// ){if (i===15){
//     break;} 
//     console.log(i);
// } 

// function demo(name,age){
//     console.log("my name is" , name,age)
// }
// demo("kartik",18)

// //function
// function addition(a,b)
// {
//    return a + b;
// } 

//  let result = addition(4,13);
// console.log("the addition of the a and b is ", result);
// addition(67,89);
// let get = addition(67,89);
// console.log(get);

// let j=[1,4,6,8,0,2]
// for (let danger in j)
//     {
// console.log(danger);
// }
//  let numbers = [1,4,6,8,0,2]
// numbers.forEach( function (element,index,array)  {
//     console.log("element :",element,"index:", index);
// });

// //objext methods
// let ourobj ={
//     name :"paurnima",
//     age:18,
//     behaviour:"very good",
// };
// console.log(Object.values(ourobj));
// console.log(Object.keys(ourobj));
// console.log(Object.entries(ourobj));
// Object.freeze(ourobj);


//ES 6
function greet(name=" "){
    console.log("Hello " + name);
}
greet("kartik");
// template literals

// let one = "kartik "
// let two = "is a"
// let three ="student"

// console.log( `${one}
//  ${two} 
// ${three}`
// );
// console.log(`Kartik is an          ${three}`)

//backpicks feature
// we can use "" '' in strings using backpicks
// console.log(`kartik is "productive guy"  `)

//destructuring
// console.table({
//     name: "kartik",
//     age : 18,
//     percentile : 95.87,
//     isDeveloper: true
// });
// // Destructing 
// const object1 = {
//     name : "kartik ",
//     college : "SCOE",
//     age : 18
// };

// const {name ,age ,college} = object1;
// console.log(age, name, college);

// const nextobj = { 
//     learn : " am i ",
//     greet : function()
//     {console.log("hello" ,this.greet); }
// };
// nextobj.greet();


// // //map function 
// const array =[0,1,2,3,4,5];
// // const newarray = array.map ((data) => {
// //    return data*2;
// // });

// // console.log(newarray);

// const newarray = array.filter((data) => {
//     if (data < 4) {
//         return data;}
// });

// console.log(newarray);

// //reduce 
// const prices = [100,200,340,431,2344];
// const totalprices = prices.reduce((accumulator, currentvalue) => {
//     return accumulator + currentvalue ; 
// },0)
// console.log(totalprices);


// //promises
// //it is an objext that returns a value that we hope to receive in the future
// //but not immediately.

// const mypromises = new Promise(function(resolve, reject) {
//     reject("error occured :=(");
//     setTimeout(function(name)
//  {
//     console.log('hello' ,"universe");
//  } , 3000);

// });
// mypromises.then().catch((err) =>{
//     console.log(err)
// });

// // async await is much better than then .catch fn 
// //syntax of the async await 
// const getmypromises = async () => {
//     try{
//         const getresult = await mypromises;
//         console.log(getresult);
//     }  catch (error) {
//         console.log(error);
//     }
// };

// getmypromises();

//async and await 
// let mypromises = new Promise(function ( resolve,reject)
// {
//     setTimeout(() => {
//        reject(" ");
//     }, 3000);
// });

// const getmypromises = async () => {
//     try {
//         const getresult = await mypromises;
//         console.log(getresult);
//     }
//     catch (error) {
//         console.log("payment was not successful ", error);
       
//     }
// };
// getmypromises();

// // shradha didi lec 

// // on callback ,promises , async awaits, try and catch 
// // asynchronous and synchronous data 
// function getdata(dataID){
//     console.log("Data" ,dataID);
// }
// getdata(1);
// // settimeout syntax

// // setTimeout(() =>{
// //     console.log("hello dear ❤️" )
// // }
// // ,2000)
//  function mypromises(resolve, reject) =>
// {
//     console.log(res)
// };










// console.log("getting data 1....")
// getdata(1).then((res) =>
// {
//     console.log("getting data 2 ....");
//    return getdata(2);

// })
//   .then((res)=>
// {
//     console.log("getting data 3 .. ..");
//     return getdata(3);
// })
//  .then((res) =>
// {
//     console.log('getting data3...');
//     return getdata(res);

// });/

//async and await
function api() {
    return new Promise((resolve, reject) =>{
        setTimeout(()  => {
            console.log("weather api ");
            resolve(200)   
    }, 2000);
});
}

(async function getweatherdata(){
    console.log("getting data 1");
    await api(1);
    console.log("getting data 2");
    await api(2);
    console.log("getting data 3");
    await api(3);
    console.log("getting data 4");
    await api(4);
    console.log("getting data 5");
    await api(5);
    console.log("getting data 6");
    await api(6);
}) ();
