// const scoial = {
//     name : "shradhakapra",
//     follow : true ,
//     massage : "hello world",
//     post : 195,
//     followers: "569k",
//     following : 4,
//     fullName : "Shradha kapra",
//     email : "@Shradhakapra",
//     text :     "apna collage",
//     paragfe : "to eduucate someone in the higest privilage"
// };

// console.log(scoial);

// maltipal of 5
// let number = prompt("Enter a number")
// if(number % 5===0){console.log( number,"yes its divide by 5")
// }else(console.log(number,"no its not divide by 5"))

// let marks = prompt ("enter your marks");

// if(marks>=90 && marks<=100){
//     console.log(marks,"A");
// }else if(marks >= 70 && marks <= 89 ){
//     console.log(marks,"B");
// }
// else if(marks >= 60 && marks <= 69 ){
//     console.log(marks,"C");

// }else if(marks >= 50 && marks <= 59 ){
//     console.log(marks,"D");
// }else if (marks >= 0 && marks <= 49 ) {
//     console.log(marks,"F");
// } else{
//     console.log("please enter valid marks");
// }

// indexOf

// let name = ["usama" ,"misbah" ,"haseeb" , "usama", "jameel"];
// console.log(name.indexOf ("usama",1));
// 2nd parameter is optional for start searching from that index

// let name = ["usama" ,"misbah" ,"haseeb" , "usama", "jameel"];
// let myname = name.indexOf(prompt("enter your name"));
// console.log(myname);

// lastIndexOf

// let name = ["usama" ,"misbah" ,"haseeb" , "usama", "jameel"];
// let myname = name.lastindexOf(prompt("enter your name"));
// console.log(myname);

// DOM DOCUMENT OBJECT MODULE

// document.getElementById("id") id is one on all html page

// let section = document.getElementById("list");
// console.log(section);

// document.getElementsByClassName("class") class is more than one on all html page

// let section = document.getElementsByClassName("container");
// console.log( section );

// they is more then one class in html webpage now we get them from index number

// let section = document.getElementsByClassName("container");
// console.log( section[0] );

// document.getElementsByTagName("tagname") tagname is more than one on all html page

// let section =document.getElementsByTagName("p");
// console.log(section);

// let section =document.getElementsByTagName("li");
// console.log(section[1]);

// .innerText by useing document.getElementById

// let section = document.getElementById("list").innerText;
// console.log(section);

// .innerHTML by useing document.getElementById

// let section = document.getElementById("list").innerHTML;
// console.log(section);

// getAttributr

// let usama = document.getElementById("list").getAttribute ("number");
// console.log(usama);

// let usama = document.getElementById("container").getAttribute[1].value;
// console.log(usama);

// set html
// .innerText
// its change the text but if you write <h1>usama</h1> its print  <h1>usama</h1> same

// let section;
// document.getElementById("head").innerText =" usama";
// console.log(section);

// set html
// .innerHTML
// its change the text if you write <h1>usama</h1> its print usama in h1 bold font size etc  //

// let section;
// document.getElementById("head").innerHTML ="<h1>usama</h1>";
// console.log(section);

// setAttribute

// let section;
// document.getElementById("head").innerHTML = "<h1>usama</h1>";

// document.getElementById("head").setAttribute("class","abc");
// section = getElementById("head").getAttribute("class");
// console.log(section);

// loop use to execute a piece of code again and again
// 3 part of loop initilization,than stoping condtion,and updation
// for
// for(
//     i=1; i<=5;i++
// ){
//     console.log("usama")
// }

// calculate the sum of n
// let sum = 0;
// let n = 5;
// for (let i = 0; i <= n; i++) {
//   sum = sum + i;
//  = 1;}
// console.log(sum);

// while loop both are same no simecolun in last

// let i = 1;
// while (i<=5) {console.log("i is ",i)
//     i++
// }
// calculate the sum of n

// let sum = 0;
// let n = 5;
// let i = 1;
// while (i <= n) {

//   sum = sum + i;
//   i++;
// }
// console.log(sum);

// do while loop simeller like while loop but if in initlization
// cundition is false then loop run first time in last samicolun
// let i = 1;
// do {
//   console.log("usama");
//   i++;
// } while (i <= 5);

//1 to 5 print counting

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// calculate the sum of n using a for loop
// let sum = 0;
// let n = 5;
// let i = 1;
// do {
//   sum = sum + i;
//   i++;
// } while (i <= n);
// console.log(sum);

// for-fo loop

// let str ="usama";
// for (const i of str) {
//     console.log("i =",i)

// }

// now find the length of string

// let size =0;
// let str ="usama";
// for (const i of str) {
//     console.log("i =",i)
//     size++

// }
// console.log("size is",size);

// for-in loop
// apply on abject and array and retrun us key

// let student = {
//     name: "usama",
//     age : 25,
//     cgpa: 7.5,
//     ispass: true,

// }
// for (const i in student) {
//    console.log(i);
// }

// find value of key

// let student = {
//     name: "usama",
//     age : 25,
//     cgpa: 7.5,
//     ispass: true,

// }
// for (const i in student) {
//    console.log(i,student[i]);
// }

// practice qustion

// for (let i = 0; i <=100; i++) {
// console.log(i)

// }
// print even number

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// odd number
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   }

// practice qs2

// promt give us always answer in string if given number is "string" so we use !==

// let gamenum = 5;
//     let usernum = prompt("enter a number");
//     while (usernum != gamenum) {
//       usernum = prompt("enter a number and guess an other number ");
//       console.log("number is same");
//     }

//  string
// strring in sequence of characters used to represent text

// let obj = {
//   item: "pen",
//   price: 50,
// };

// console.log("price of" , obj.item ,"is", obj.price,"rupees");

// now `` called them template literals
// let output = `price of   ${1 + 2 + 3} is rupees`;
// console.log(output);

// ${expression} / expression emberdded kr k matlab apny placeholder ${expression} daldeyea jin ki value run time pr
// hamrey pas aaye gi  usy string interpolation kety hn

// let output = (`price of  ${obj.item} is ${obj.price} rupees`);
// console.log(output);

// escape characters  /n for line brake and /t give us space of a tab
// let name = ("usama\nkhanzada");
// console.log(name);

// let name = ("usama\tkhanzada");
// console.log(name);

// always use backe sleash and and \n \t is two characters but in .length value will come 1

//  string methods
// these are built in function to mainpulate a string
// and it will not change in orignal is create a new string and new value then change it or mainpulate it
//  string is immuteable /(can not be chang) in js
// .toUpperCase
// let name = ("usama khanzada");
// name = name.toUpperCase();
// console.log(name);

// let name = "usama khanzada";
// console.log(name.toLowerCase());

// .toUpperCase()

// let name = "USAMA KHANZADA";
// name = name.toUpperCase();
// console.log(name);

// let name = "USAMA KHANZADA";
// console.log(name.toLowerCase());

// .trim()

// let name = "   USAMA KHANZADA      ";
// name = name.trim();
// console.log(name);

// let name = "USAMA KHANZADA";
// console.log(name.trim());

// .slice(star,end);

// take index number start from index number and end is optinol and also non exsulsive

// let name = "   USAMA KHANZADA      ";
// name = name.trim();
// console.log(name);

// slice
// slice  is used to extract a part of a string and return a new string without changing the original string
// first parameter is start index and second is end index but end index is optional and not print
// let name ="usama khanzada";
// console.log(name.slice(0,5));

// .concat
// add 2 string and return a new string

// let name1 ="usama";
// let name2=" khanzada";
// let res = name1.concat(name2);
// let res = name1 + name2;
// console.log(res);

// .replace and .replaceAll
// first peremeter in kis ko ko replace kena h 2nd kis k sath
// all for pure k leyea
// let name = "hello ";
// let res = name.replace("h","y");

// console.log(res);

// let Name =prompt("enter your full name");
// let userName ="@"+Name+(Name.length);
// console.log(userName);

// ternary operators

// let age = 16;
//  age >= 18 ? "adult" : "not adult";
// use this type in project its use chack the condition not for console  age console karana hoga tb if eles lagaye ly

// let age = 16;
// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);

// let age = 16;
// let result = age >= 18 ? console.log("adult") : console.log("not adult");

// practice question

// let num = prompt ("enter a number");
//
//  num % 5 === 0 ? console.log("its miltipal by 5") : console.log("not miltipal by 5");

// if (num % 5 === 0){
//     console.log("its miltipal by 5");
// }else{
//     console.log("not miltipal by 5");
// };

// let scores = prompt("enter your scores");

// if (scores <= 100 && scores >= 90) {
//   console.log("A+");
// } else if (scores <= 89 && scores >= 70) {
//   console.log("A");
// } else if (scores <= 69 && scores >= 60) {
//   console.log("B");
// } else if (scores <= 59 && scores >= 50) {
//   console.log("C");
// } else if (scores <= 49 && scores >= 0) {
//   console.log("F");
// }else {
//     console.log("please enter valid scores");
// }

// let scores = prompt("enter your scores");
// let grade;
// if (scores <= 100 && scores >= 90) {
//   grade = "A+";
// } else if (scores <= 89 && scores >= 70) {
//   grade = "A";
// } else if (scores <= 69 && scores >= 60) {
//   grade = "B";
// } else if (scores <= 59 && scores >= 50) {
//   grade = "c";
// } else if (scores <= 49 && scores >= 0) {
//   grade = "F";
// } else {
//   grade =
//   "please enter valid scores";
// }
// console.log(grade);

//  loop
// for loop
// for ( let i=1; i <= 5; i++){
//   console.log("usama");
// }

// practice question
// calculate the sum of n using a for loop
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum = sum + i;
// }
// console.log(sum);
 

// let n = 5;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
  
// }
// console.log(sum);


// let sum = 0;
// let n = 6;
// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }
// console.log("sum of ",n ,"id",sum);

// infinity loop
// a loop that never ends and its condiyion never give false 


// for (i =1; 1 >=0  ; i++){
//   console.log(i);
// }


// while loop
// initilization
// while(condition){
//   do some work 
//   updation
// }


// i =1;
// while(i<=5){
//   console.log("usama");
//   i++;
// }



// do while loop
// stoping condition will check in last 
// atleast run one time if condition is false
// in last ; semicolan is must use in while condition

// do{some work
// }while(condition);

// let i =20;
// do {console.log("usama");
// i++;
// }while(i <=10);
// loop run one time 20 10 sy chota nahi hota or condition false hogi but loop ek time lazmi run hoga

let i = 1;
do {console.log(i); 
  i++;
}while(i<=5);
