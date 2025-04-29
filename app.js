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

// let i = 1;
// do {console.log(i);
//   i++;
// }while(i<=5);

// for fo loop
// iit help us to iterate over and set loop on string and array data type
//for (let var of string/array variabel){
// do some work };

// let str ="usama";
// for(let i of str){
//   console.log("i =",i);
// }

// find the length of the string by using for of loop

// let str ="usama";
// let size = 0;
// for(let val of str){
//   console.log("val =",val);
//   size++
// }
// console.log("size of string is ",size)

// for in loop
// used to iterate over the properties of an object and retrun key also use on array

// for (let key in variabel){
// do some work
// }

// lets find thek key and there value

// let student = {
//   name: "usama",
//   age: 24,
//   cgpa: 7.5,
//   ispass: true,
// };
// for (let key in student) {
//   console.log("key of student is", key , "key value is " ,student [key]);
// }

// practice question

// print 1 to 100

// for ( i=0 ; i <= 100; i++){
//   console.log(i);
// }

// print 0 to 100 even number
// for ( i=0 ; i <= 100; i++){
// if(i % 2 === 0){
//     console.log(i);
//   }
// }

// print 0 to 100 odd number
// for ( i=0 ; i <= 100; i++){
//   if(i % 2 !== 0){
//       console.log(i);
//     }
//   }

// practice question
// create a game where you start with any random number.  ask the user to keep guessing the number until the user enters correct value

// let  num = 5;
// let gameNum =  parseInt (prompt("enter a number"));

// while(gameNum != num){
//   gameNum = parseInt (prompt("enter an other number"));
// }

// console.log("win");

// tamplate literals ,speacial string ,typeof string
// creat by using `` backtick and use ${expression} to insert value in string
// and ${expression} is called expression embeddeding
// string interpolatio , to create  string by doing subsitution of placeholder with actual value
// let sum =`sum os 1+2+3 is ${1+2+3}`;
// console.log(sum);

// let obj ={
//   name: "pen",
//   price:10,
// }
// let result =`price of ${obj.name} is ${obj.price} rupees`;
// console.log(result);

// for line brake
// let fullName ="usama\nkhanzada";
// console.log(fullName);
// for tab sapce
// let fullName ="usama\tkhanzada";
// console.log(fullName);

// toUpperCase();
// let str = "usama khanzada";
// let newstr = str .toUpperCase();
// console.log(str);  //for original string
// console.log(newstr);

// let str = "usama khanzada";
// str = str.toUpperCase();
// console.log(str);

// toLowerCase()
// let str = "USAMA KHANZADA";
// let newstr = str .toLowerCase();
// console.log(str);  //for original string
// console.log(newstr);

// let str = "USAMA KHANZADA";
// str = str .toLowerCase();
// console.log(str);

// trim()  remove whitespaces from starting and ending.

// let str = "    USAMA KHANZADA        ";
// console.log(str.trim());

// str.slice(start,end);
// start is inclusive and end is exclusive
// let str ="0123456789";
// console.log(str.slice(1,6));//12345 ending index is not included
// console.log(str.slice(1));//123456789

// str1.concat(str2);

// let str1 ="usama";
// let str2 =" khanzada";
// let result =str1.concat(str2);
// console.log(result);

// an other way

// let str1 ,="usama";
// let str2, =" khanzada";

// let result =`my name is ${str1}${str2}`;
// console.log(result);

// str.replacer(old,new);

// let str ="hello";
// console.log (str.replace("lo",("p")))//help

// practic question
// prompt  the user to enter their full nmae. generate a username for them based on the input start username with @
// followed by their fullname and ending with the fullname length

// let fullName = prompt("enter your full name", "guest").trim();
// let userName = `@${fullName.toLowerCase().replace(/\s+/g, "")}${
//   fullName.length
// }`;
// console.log(userName);

// .replace() method used to replace a parts to a string
// /\s+/     //regex pattern to match one mor spaces or  any whitesspaces characters(spaces ,tabs etc)
// g     // globel flag -> to replace all occurrences , not just the first time

// ""     // replace nwith nothing (remove it )

// arrays
// collection of items in a single name or variable
// let marks =[94,85,76,67,58];
// console.log(marks);
// also find the length of array but .length is property not method in array
// console.log(marks.length);
// array is not its salf a persnol data type its a object in js, and a special type of object
// ye samj sakty hn k array m object ki thara key:value pair hota h but key ki jaga index number hota h

// array indices -> pulral of index
// index is a number that represent the position of an item in an array

// let marks = [91, 82, 73, 64, 55];
// console.log(marks);
// console.log(marks[0]); //excess first index of array
// marks[0] = 88;         // update the value of array by using index number
// console.log(marks);

// looping over on array

// let student =["usama" , "haseeb" ,"misbah","asbah","jameel"];
// for( let i = 0 ; i < student.length ; i++) {
//     console.log(student);
// }

// pactice question

// let passcount = 0;
// let failcount = 0;
// let marks = [95, 86, 41, 33, 56];
// for (let mark of marks) {
//   if (mark >= 50) {
//     passcount++;
//     console.log(`${mark} pass`);
//   } else {
//     failcount++;
//     console.log(`${mark} fail`);
//   }
// }
// console.log(`number of pass student is ${passcount}`);
// console.log(`number of fail student is ${failcount}`);

// pactice question

// let capName = [`usama`, `haseeb`,`misbah`,`asbah`,`jameel`]

// for (let name of capName){
//  let capitalized =  name[0].toUpperCase()+name.slice(1);
//   console.log((capitalized));
// }

// find average of numbers

// let sum = 0;
// let marks = [85, 97, 44, 37, 76, 60];
// for (let mark of marks){
//     sum+=mark;
// }
// let avg= sum/marks.length;
// console.log(`average of marks is ${avg}`);

// let items = [250,645,300,900,50];
// let i= 0;
// for(let val of items){
//    let  offer = val/10;
//    let newoffer = val- offer;
//    console.log(`item ${i} price is ${val} and after discountis ${newoffer} `);
//    i++
// }

// let items = [250, 645, 300, 900, 50];
// for (let i = 0; i < items.length; i++) {
//   let offer = items[i] / 10;
//   let newoffer =items[i]-offer;
// //    console.log(`item ${i} price is ${items[i]} and after discountis ${newoffer} `);

//    console.log(`${newoffer}`)
// }

// let items = [250, 645, 300, 900, 50];
// for (i=0; i<items.length;i++){
//   let offer=  items[i]/10;
//   items[i]-=offer;
//   console.log(items[i]);
// }

// Methods of array

// 1 .push() and to end

// let name =["usama","misbah","haseeb"];
//  name.push("jameel","asbah");
// console.log (name);

// 2 .pop () delete from last and return the deleted value

// let name =["usama","misbah","haseeb"];
// let deleteName = name.pop();
// console.log(name);
// console.log(deleteName);

// // 3 .tostring(); to convert array into string
// let name = ["usama", "misbah", "haseeb"];
// // console.log(name); //output will come in array form
// let string = name.toString();
// console.log(string); // output will come in string form

// 4 .concat() to join two or more arrays and return a new array
// not change in original array
// let name_1 =["usama","misbah","haseeb"];
// let name_2 =["jameel"];
// let name_3 =["asbah"];
// let name_4 = name_1 .concat(name_2,name_3);
// console.log(name_4);

// let name_1 =["usama","misbah","haseeb"];
// let name_2 =[" jameel "];
// let name_3 =[" asbah "];
// let name_4 = name_1 + name_2 + name_3;
// console.log(name_4);

// 5 .unshift() add new element at the start of array and retrun the new length of array

// let name =["usama","misbah","haseeb"];
// name.unshift("jameel","asbah");
// console.log(name);

//  6 .shift() remove first element of array and retrun the removed value
// let name =["usama","misbah","haseeb"];
// let removeName = name.shift();
// console.log(removeNam7e);

// 7 slice() retruns a piece of the array
// slice (startidx, endidex);
// not change in orignal array
// ending index is non exclusive means not include and optional
// if just pass start index then it will take all the element stert index to end of array

// let num =[1,2,3,4,5,6,7,8,9];
// let newNum = num.slice(1,5);//2345
// console.log(newNum);

// 8 .splice(stratidx , deletecount, replacevalue);

// start from 2 index ,delet 1 item and replace with 6
// let num =[1,2,3,4,5,6,7,8,9];
// num.splice(2,1,6);
// console.log(num);

// for delete  form start index to last

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let deleted = num.splice(2);
// console.log(deleted);
// console.log(num);

// delet element

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// num.splice(2,1);
// console.log(num);

// practice qusetion

// let coy = ["Bloomberg", "Microsoft", "Uber", "Googal", "IBM", "Netflix"];

// remove first company from the array

// coy.shift()
// coy.splice(0,1);
// console.log(coy);

// coy.splice(0,1);
// console.log(coy);

// remove uber and add ola in its space

// coy.splice(2,1,"ola");
// console.log(coy);

// add amazon in the end

// coy.push("amazon");
// console.log(coy);

// coy.splice(6,0,"amazon");
// console.log(coy);

// function in js
// block of code that perfome a specific task can be invokes by name when ever needed
// create one time and invokes/ call when ever needed this function or block of code
// a piece of code that perfome some taskes again and again
// us perentheses () to invoke or call function
// function takes input and do some work and return output
// we could creat own function
// function definition // function difine

// function functionName (){
// }  // do not use semicolun in end
//  function call
// functionName ();
// function save us from
// "Functions save us from redundancy in code."
// "Functions help us avoid repetition in our code."

// What is Redundancy in Code?
// Redundancy means repeating the same code again and again, which:

// Makes code longer

// Harder to read and maintain

// Increases chances of errors

// function myFun() {
//     console.log("usama");
//     console.log("khanzada");

//   }
//   myFun();

// recursion
// function myFun() {
//   console.log("usama");
//   console.log("khanzada");
//   myFun();
// }
// myFun();

// resolve
// let count = 0;

// function myFun() {
//   if (count >= 5) return; // base case to stop after 5 times

//   console.log("usama");
//   console.log("khanzada");
//   count++;
//   myFun(); // recursive call
// }

// myFun();

// parameter and argument in function
// parameter is input or variable that we pass in function definition
// and argument is the value that we pass in functin call
// in function we will pass meltiple parameters and arguments
// parameters os function in like local variables that alive inside the block scope

// function myFun(msg){
//     console.log(msg);

// }
// myFun("usama");

// function sum(x,y){
//     console.log("sum of x+y is ",x+y);
//     console.log("mines of x-y is ",x-y);
//     console.log("maltiply of x*y is ",x*y);
//     console.log("division of x/y is ",x/y);
// }
// sum(2,2);

// return statment
// function take input and do some woerk and return some value and output
// it will return  1 value only in one time
// and return any data type
// return keyword k bad koi bi code execute nahi hoga
// return is used to exit from the function and rturn a value to the caller

// function mysum (x,y){

//     s = x+y;
//     return s;

// }
// let result =mysum (2,2);
// console.log(result);

// arrow function
// a compact way to write a function
// part of morden js in ES6
// we can store the function in a variable
// generaly use for short function

// const sum = (x, y) => {
//   console.log(x + y);
// };

// console.log(sum);
// here we console the variable not calling the function output will come value of variable
// (x, y) => {
//   console.log(x + y);
// }  value of sum variable

// now calling the arrow function

// const sum =(x,y)=>{
//     console.log(x+y);
// }
// sum(2,2);//here call the fuction

// for multiplaction

// const mult = (x, y) => {
//   console.log(x * y);

// };
// mult(2, 2);

// const mult = (x,y)=>{
//     return x*y;
// };

// console.log(mult(2,2));

// there is two type of function declaration and expression (those who store in  variable)
// function declaration those who are not store in variable  do not use samicolon ; in end of scope
// function num (){}
// function expression (assigend tya a variable) use  samicolon in end of scope
// const function num(){};
// const num()=>{}; arrow function
// in js all variables expression and statment ends with samicolon;

// const printfun =()=>{
//     console.log("usama");
//     return;
// };

// printfun();

// function mysum(x, y) {
//   return x + y;
// }

// console.log(mysum(2, 2));

// const getName = () => {
//   return "usama";
// };
// let name1 = getName;
// console.log(getName);
// console.log(name1);
// console.log(name1());

// const getName =()=> console.log("usama");
// getName();

// function vowels(str) {

// for( let i =0; i<str.length;i++){
//     if(str[i]==="a"|| str[i] ==="e"|| str[i]==="i"||str[i]==="o"||str[i]==="u")
//         console.log(str[i]);
// };

// }
// let str ="usama";
// vowels(str);

// const vowels = (str) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u"
//     ) {
//       console.log(str[i]);
//       count++;
//     }
//   }
//   return count;
// };
// let str = "usama";
// let count = vowels(str);
// console.log(count);



// const vowels = (str) => {

//   for (let i = 0; i < str.length; i++) {
//     if ("aeiou".includes(str[i])) {
//       console.log(str[i]);
//     }
//   }
// };
// let str = "usama";
// vowels(str);




// forEach => its a function but it will associst/bind/combine with array and string also work with data stacher/where 
// we store our data now we conseder ita as a method of array 
// methods => are a function thay will combine or bind or join object ,data stacher or primitive data type 
// forEach scyntax
// array.forEach(element,index,array){
// }
// array.forEach(callbackfunction){
// }
// function in js pass like a parameter in function also return 
// function in js pass or return like a normal variable


// function abc(){  //first function 
// } 



// function myfun (abc){  // pass first function in 2nd function 
// return abc;   // and return 2nd function 
// }


// call back function => a callback function passed as argument to another function ,also it is a function to execute
//  for  each element in the array
// just creat a function defination no need for call invoke or execute

let arr =[1,2,3,4,5];
arr.forEach(function printval(val) {
  console.log(val);

});