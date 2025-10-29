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

// const { createElement } = require("react");

// const { jsx } = require("react/jsx-runtime");

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

// let str = "usama";
// for (let i of str) {
//   console.log(i);
// }

// let str = "usama";
// let size = 0;
// for (let i of str) {
//   size++;
//   console.log(size);
// }

// find the key by using for in loop

// let student = {
//   fullName: "usama",
//   age: 25,
//   cgpa: 4.0,
// };
// for (let key in student) {
//   console.log("the  student ", key, "and ", student[key]);
// }

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (mark of marks) {
//   sum += mark;
// }
// let average = sum / marks.length;
// console.log(average);
// let i = 0;
// let items = [250, 645, 300, 900, 50];
// for (let item of items) {
//   i++;
//   let offer = item / 10;
//   let newoffer = item - offer;
//   console.log(`the ${i}item price is ${item}and after discount is ${newoffer}`);
// }

// const mulArrow = (a, b) => {
//   console.log(a * b);
// };
// mulArrow(5, 2);
// let str = "usama";
// function countvowels(str) {
//   for (let i = 0; i <= str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u"
//     ) {
//       console.log(str[i]);
//     }
//   }
// }
// countvowels(str);

// let str = "usama";
// const countvowels = (str) => {
//   for (let i = 0; i <= str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u"
//     ) {
//       console.log(str[i]);
//     }
//   }
// };
// countvowels(str);

// const countvowels = (str) => {
//   let count = 0;
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//       console.log(char);
//     }
//   }
//   console.log(count);
// };
// countvowels("usama");

// const countvowels = (str) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//       console.log(char);
//     }
//   }
//   console.log(count);
// };
// countvowels("usama");

// let num = [1, 2, 3, 4, 5];
// num.forEach((val) => {
//   let square = val * val;
//   console.log(square);
// });

// let marks = [40, 85, 91, 75, 95, 64, 100];
// let result = marks.filter((mark) => {
//   return mark > 90;
// });
// console.log(result);

// let marks = [40, 85, 91, 75, 95, 64, 100];
// let result = marks.filter((mark) => {
//   return mark >= 80 && mark <= 90;
// });
// console.log(result);

// let num = [];
// let userNum = prompt("Enter a number");

// for (let i = 1; i <= userNum; i++) {
//   num.push(i);
// }
// console.log(num);

// let userNum = Number(prompt("Enter a number"));
// function getsum() {
//   let num = [];
//   for (let i = 1; i <= userNum; i++) {
//     num.push(i);
//   }
//   let sum = num.reduce((res, cval) => {
//     return res + cval;
//   });
//   console.log(sum);
// }
// getsum();

// console.log(num);

// let userNum = Number(prompt("Enter a number"));
// function getsum() {
//   let num = [];
//   for (let i = 1; i <= userNum; i++) {
//     num[i - 1] = i;
//   }
//   let sum = num.reduce((res, cval) => {
//     return res * cval;
//   });
//   console.log(sum);
// }
// getsum();

// let num = [];
// for (let i = 0; i <= 100; i++) {
//   num.push(i);
// }
// const even = num.filter((val) => {
//   return val % 2 === 0;
// });
// console.log(even);
// for (let i = 0; i < items.length; i++) {
//   let offer = items[i] / 10;
//   newoffer = items[i] - offer;
//   console.log(
//     `item of${i} the price is ${items[i]}and after offer is ${newoffer}`
//   );
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

// let head = document.querySelector("h2");
// let newhead = (head.innerText = "i love " + head.innerText);
// console.log(newhead);

// let divs = document.querySelectorAll("div");
// div[0].innerText = "usama khanzada";
// div[1].innerText = "jameel khanzada";
// div[2].innerText = "haseeb khanzada";

// console.dir(div);
// let i = 0;
// div.forEach((ele) => {
//   div[i].innerText = i;
//   i++;
// });
// let i = 0;
// for (div of divs) {
//   console.log(div);
//   div.innerText = i + "div";
//   i++;
// }
// console.log(div);
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

// let arr =[1,2,3,4,5];
// arr.forEach(function printval(val) {
//   console.log(val);

// });

// normaly in the forEach pass callback funnction in the form of an arrow function
// syntax  arr.forEach(()=>){
// //do some work
// });

// const arr =[1,2,3,4,5];
// arr.forEach((val)=>{
//   console.log(val);

// });

// const arr = ["usama", "haseeb", "misbah", "asbah"];
// arr.forEach  ((name) => {
//   console.log(name);
// });

// const arr =["usama","haseeb","misbah","asbah"];
// arr.forEach((name)=>{
//   console.log(name.toUpperCase());
// });

// in forEach  callback function takes 3 parameters
// 1st is current value of array
// ,2nd index number of current value
// 3rd is array itself

// const arr =["usama","haseeb","misbah"];
// arr.forEach((val,idx,arr)=>{
//   console.log(val,idx,arr);
//   console.log(`value is ${val} and index is ${idx} and array is ${arr}`);
// });

// important question
// higher order function/methods HOF/HOM
// a function that takes another function as an argument  or return a function as a output
// .forEach() is a function that takes a callback fucntion as an argument and then we pass tha val,idx,arr in callback function perameters

// partice question
// with arrow function
// let arr = [1,2,3,4,5];
// arr.forEach((val)=>{
// let square = val*val;
// console.log(`square of ${val} is ${square}`);
// });
// an other way

// let number =[1,2,3,4,5];
// let square = (val)=>{
//   let result =
// console.log(result);
// };
// number.forEach(square);

// with normal function

// let arr = [1,2,3,4,5];
// function square(val){
//   let result = val*val;
// console.log(result);
// }
// arr.forEach(square);

// map method
// map create a new array with the results of some operation . the value its callback returns are used to from new array
// map is vary simmilar to forEach but it will return a new array and not change the original array
// syntax
// arr.map((val,idx,array)=>{
// return new value
// });
// .map used to create a new array using some return value based on each value which is stored at the some indices of the array
// gernerally use for creating a new array based on the original array.

// let num = [1,2,3,4,5];
// let square =num.map((val)=>{
//     return val*val;
// });
// console.log(square);
// consolelog(num); // origanl arrray not change

// let num = [1, 2, 3, 4, 5]; val => val * val;
// console.log(num.map(val => val * val));
// console.log(num); // origanl array not change

// filter method = create a new array  of element that giv true for a condition or filter it not change in original array
// give us a copy or transform of array but in a new array
// array  ka her element ko chack karta h based on a condition (true or false), srif un element ko return karta h jo condition true data hain
// Syntax

// tet newarray = oldarray.filter((element,index,array)=>{
// return conditin;
// })
// console.log(newarray);

// let num = [1, 2, 3, 4];
// let result = num.filter((val) => {
//   return val % 2 === 0;

// });
// console.log(result);
// console.log(num);

// let num = [];
// for (let i = 1; i <= 100; i++) {
//   num.push(i);
// }
// let result = num.filter((val) => {
//   return val % 2 === 0;
// });

// console.log(result);
// console.log(num);

// reduce method preforms some operation and reduce the array to a single value output
//its return a single value  and not change in original array
// syntax

// let num = [1, 2, 3, 4, 5];
// let result = num.reduce((res, currval) => {
//   return res + currval;
// });
// console.log(result);
// console.log(num);

// is k 4 parameters hote hn
// Parameter	Purpose
// accumulator	previous value / result
// currentValue	current element being processed
// currentIndex	(optional) index of current element
// array	(optional) original array being processed

// 🔸 initialValue kya hota hai?
// Jab reduce() chalta hai, to usko ek starting point chahiye hota hai —
// jise accumulator ki shuruaati value kehte hain. Ye starting point hi initialValue hota hai

// 🔹 Without initialValue:

// let arr = [1, 2, 3];
// let result = arr.reduce((acc, curr) => {
//   return acc + curr;
// });
// console.log(result); // 6

// Yahaan acc ki pehli value array ka pehla element (1) hi ban jata hai.

// 🔹 With initialValue:

// let arr = [1, 2, 3];
// let result = arr.reduce((acc, curr) => {
//   return acc + curr;
// }, 10); // // 10 yahaan initialValue hai
// console.log(result); // 16

// Yahaan acc ki pehli value 10 set ki gayi hai manually.
// To pehla calculation hota hai: 10 + 1 = 11, phir 11 + 2 = 13, phir 13 + 3 = 16.

// Situation	initialValue zaroori hai?
// Empty array	✅ Haan, warna error dega
// Custom starting point chahiye	✅ Haan
// Pehle element se start karna hai	❌ Nahin zaroori

// how is work

// let arr = [1, 2, 3];
// let result = arr.reduce((acc, curr) => {
//   return acc + curr;
// });
// console.log(result); // 6

//  start from initial value jo given nahi h to acc array k pehle element se start hoga
// acc = 1 or curr = 2 then 1 + 2 = 3 than acc = 3 and curr = 3 then 3 + 3 = 6
// or phr ye return hoga or result m store hoga

// lets find the largest number

// let num = [1, 20, 101, 204, 5, 3, 9, 89, 45];
// let result = num.reduce((acc, curr) => {
//   return acc > curr ? acc : curr;
// });
// console.log(result);
// with if else
// let num = [1, 20, 101, 204, 5, 3, 9, 89, 45];

// let result = num.reduce((acc, curr) => {
//   if (acc > curr) {
//     return acc;
//   } else {
//     return curr;
//   }
// });
// console.log(result);

// lets find smallest number

// let num = [1, 20, 101, 204, 5, 3, 9, 89, 45];
// let result = num.reduce((acc, curr) => {
//   return acc < curr ? acc : curr;
// });
// console.log(result);
// with if else
// let num = [1, 20, 101, 204, 5, 3, 9, 89, 45];
// let result = num.reduce((acc,curr)=>{
//     if (acc<curr){
//         return acc;
//       }else{
//         return curr;
//           }
// });

// console.log(result);

// Filter out marks of students that scored 90 plus

// let student =[54,91,45,78,92,67,95,100];
// let result = student.filter((val)=>{
//     return val >= 91;
// });
// console.log(result);
// Use the reduce method to calculate the sum of numbers in the array
// best way always create a main function is sy cord organize hota h or reuseable hojata h nahi to global hojata h
// let sum = [];
// let userNum = parseFloat(prompt("enter a number"));
// function getsum() {
//   for (let i = 1; i <= userNum; i++) {
//     sum.push(i);
//   }

//   let newsum = sum.reduce((acc, curr) => {
//     return acc + curr;
//   });

//   console.log(newsum);
// }
// getsum();

// Use the reduce method to calculate the product of numbers in the array
// let product = [];
// let usernum = parseFloat(prompt("enter a number"));
// function getproduct() {
//   for (let i = 1; i <= usernum; i++) {
//     product.push(i);
//
//   }
//   let newproduct = product.reduce((acc, curr) => {
//     return acc*curr;
//   },1);
//   console.log(newproduct);
// }
// getproduct();

// DOM document object model
//  3 musketeers of web development => html , css and js frontend
// < link rel="stylesheet" href="style.css" />
// rel => relationship between the current document and the linked document
// href => hypertext reference
// when alert(), prompt(), confirm() aits popups appear they block our js code because the synchronous and model
// synchronous => synchronous code is executed line by line and one by one
//  modal => these dialogs take control of the browser UI stoppong all interaction with the page untile the dilog is dismiseed these
// senarieos is called block behavior create a  saprate file for  css and js its means readability moduler means makes short block or part of code
// browser caching => quicke  and faster acceses to web page again and again
// window object => the window.object represent an open window in a browser .it is browser object (not js ) its autoatically created by browser
// if your code is block scope or modern feratures (like let,const, arrow function, class, template literals) it not a dirrect part of window

// when a web page is lode the browser creates a window object and the document object is a property of the window object
// when we create  a html it will esaylly acces in js and automoticallyall tags and attrubutes are changes as a specific object in js
// and we call document and is also available in window object
// window.documentm document ek sub object h window ka and is document  m sab kuch hoga jo hum html m likhte h
// we cant use console.log it will print the window object or html
// we use console.dir()to access the document object and its properties and methods

// Har HTML element JavaScript me ek object hota hai jiske paas properties aur methods hote hain, jise tum DOM ke zariye modify kar sakte ho.
// 🔍 Us object ke andar kya hota hai?
// Properties:

// id, className, innerText, tagName, style, children, attributes, etc.

// Methods (jo use modify karne ke liye hote hain):

// .appendChild(), .remove(), .setAttribute(), .getAttribute(), .classList.add(), etc.

// DOM manipulation => to access element
// selet with id =>document.getElementbyid("idname")
// its return value of element also store in a varaiable #id =""

// let newheding = document.getElementById("heading");
// console.dir(newheding);
// OUTPUT h1#heading
// h1 → Ye element ka tag name hai (Heading level 1).

// #heading → Ye uska id attribute hai (id="heading").

// console.dir() JavaScript object ki properties ko expandable tree form me console pe dikhata hai.
//  Jab tum getElementById("heading") se kisi HTML element ko select karte ho,
//  to browser console pe wo element ki summary dikhata hai is form me:
// To JavaScript me ye ek HTMLElement object ban jaata hai, jiske andar:

// tagName: "H1"

// id: "heading"

// innerText: "Hello"

// classList: [] (empty list)

// id => to be unique for each element
// // selet with classname =>document.getElementsbyClassName("calssname");
// let element = document.getElementsByClassName("pere");
// console.dir(element);
// console.log(element);

// dir output
// HTMLCollection(3)
// 0 : p.pere
// 1:p.pere
// 2 : p.pere
// length:3

// log output
// HTMLCollection(3)
// 0 : p.pere
// 1:p.pere
// 2 : p.pere
// length:3

// HTMLCollection kya hai?
// HTMLCollection ek array-like object hota hai jo HTML elements ka group hold karta hai.
// Ye JavaScript me tab milta hai jab hum DOM ke methods se multiple elements ko select karte hain.
// Feature	Description
// Array-like	Length hoti hai, index se access kar sakte ho (paragraphs[0]), lekin ye pure array nahi hota
// Live Collection	Agar DOM me change karo, ye automatically update ho jata hai
// Looping	for, for...of, ya forEach() (after converting to real array)
// Common Sources	getElementsByTagName(), getElementsByClassName(), children property

// hTMLCollection = ❌ Not a true array → can't use .map(), .filter(), .reduce()
// Array.from() or [...] = ✅ Converts it into real array

// if we console id which is not exist answer will come null
// when ew console calss which not exist answer will come empty html collection

// 3=> selectingwith tagName documents.getElementByTagName("TagName");
// let element =document.getElementsByTagName("p");
// console.dir(element);
// return html collection
// by className,by tagName ye methids mutable(chnage able )hn q k ye live collection return krty hn. ye DOM k sath dynamically linked hoty hn
//  orjb ji dom m koi change (add new element or delete existing element ) hota h to to collection automaticlly update hojata h
// ye method dom ka crunt state represent kerta h is waja sy dom mkoi bi change collection bi update hojata h
// if dont need live collection or want immutable use array.form() or ... spread operator
// const element = Array.from(document.getElementsByClassName("heading"));
// console.log(element);

// const element = Array.from(document.getElementsByClassName("heading"));
// // console.log(element);
// console.dir(element);
// element[0].textContent ="jameel khanzada"
// console.log(element[0].textContent);

// 4=> querySelector() => ye method hamesha pehla element return kerta h jo selector match karta h
// let element = document.querySelector("p","heading","el");
// console.log(element);
// console.dir(element);

// 5=> querySelectorAll() => return a node list of all elements that match the selector
// let element = document.querySelectorAll("p, .heading, #el");
// console.log(element);

// NodeList(5) [p, h1.heading, h4#el]
// 0:p
// 1:h1.heading
// 2:h4#el
// length:3
// console.dir(element);
// 0:p
// 1:h1.heading
// 2:h4#el
// length:3

// properties of DOM
// 1=> tagName => ye element ka tag name return karta h
// let element = document.querySelector("p");
// console.log(element.tagName);
// console.dir(element.tagName);

// firstChild
// Definition:

// firstChild DOM ke element ka pehla node (bacha) return karta hai.
// Ye kisi bhi type ka node ho sakta hai:
// Text node
// Comment node
// Element node (HTML elements)
// Important Point:

// Agar element ka pehla bacha text node hai (jaise empty space ya line break), to firstChild us text node ko return karega.
// Example:

// HTML
// <div id="demo">
//   <!-- Comment -->
//   <p>Paragraph</p>
// </div>
// JavaScript
// const demo = document.getElementById("demo");
// console.log(demo.firstChild); // Output: Comment node (<!-- Comment -->)

// 2. lastChild
// Definition:

// lastChild DOM ke element ka aakhri node (bacha) return karta hai.
// Ye bhi kisi bhi type ka node ho sakta hai:
// Text node
// Comment node
// Element node (HTML elements)
// Important Point:

// Agar element ka aakhri bacha ek text node hai, to lastChild us text node ko return karega.
// Example:

// HTML
// <div id="demo">
//   <p>Paragraph</p>
//   <!-- Comment -->
// </div>
// JavaScript
// const demo = document.getElementById("demo");
// console.log(demo.lastChild); // Output: Comment node (<!-- Comment -->)

// 3. children
// Definition:

// children DOM ke element ke sirf HTML element nodes ka collection return karta hai.
// Isme text nodes ya comment nodes include nahi hote.
// Important Point:

// Ye ek live collection hoti hai, iska matlab agar aap DOM ko change karte hain, to children collection bhi update ho jata hai.
// Ye hamesha sirf elements ko return karega.
// Example:

// HTML
// <div id="demo">
//   Text Node
//   <p>Paragraph 1</p>
//   <p>Paragraph 2</p>
//   <!-- Comment -->
// </div>
// JavaScript
// const demo = document.getElementById("demo");
// console.log(demo.children);
// Output: HTMLCollection [<p>Paragraph 1</p>, <p>Paragraph 2</p>]

// Nodes in DOM:
// In the Document Object Model (DOM), everything is represented as nodes. There are different types of nodes, but the most common are element nodes, text nodes, and comment nodes. Let’s break them down in simple terms:

// 1. Element Node
// What It Is:

// Represents an HTML element in the DOM (e.g., <div>, <p>, <span>, etc.).
// You can manipulate these elements using JavaScript.
// Key Points:

// Element nodes have attributes (e.g., class, id, style).
// They can have child nodes (like text nodes, comment nodes, or other element nodes).

// const element = document.querySelector(".heading");
// // console.log(element);// output: <h1 class="heading">usama khanzada</h1>
// console.log(element);// //.nodeName//H1,.nodeType//1,.tagName//H1

// 2. Text Node
// What It Is:

// Represents the text content inside an element.
// It is a child of an element node.
// Key Points:

// Text nodes only contain the text itself, not the HTML tags.
// Even a space or line break is treated as a text node.
// Example:

// HTML
// <div>Hello, World!</div>
// The text Hello, World! inside the <div> is a text node.
// You can access it in JavaScript:
// JavaScript

// const element = document.querySelector(".heading");
// const textNode = element.firstChild; // Access the text node
// console.log(textNode); //.nodeValue//"usama khanzada",.nodeName// #text,.nodeType//3

//html
/* <div>   </div> */ //if insideb the tag empty, even space, line break is treated as a text node

// Comment Node
// What It Is:

// Represents an HTML comment in the DOM.
// Comments are not visible on the webpage but are part of the DOM.
// Key Points:

// It starts with <!-- and ends with -->.
// Mainly used for notes or explanations within the HTML code.
// Example:
// const  element = document.querySelector("div");
// const commentNode = element.previousSibling;
// console.log(commentNode);

// => previousSibling Does
// The previousSibling property accesses the node immediately before the selected node in the DOM tree.
// This can be:
// Text Node (e.g., whitespace or line breaks)
// Comment Node (e.g., <!-- Comment -->)
// Element Node (e.g., <p>, <span>)

// DOM Navigation
// => parentNode
// The parentNode property accesses the parent node of the selected node in the DOM tree.
// let element = document.querySelector("#child");
// let parent = element.parentNode;
// console.log(parent);
// Output: <div id="parent">...</div>

// => childNode
// The childNodes property returns a live NodeList of all child nodes of the selected node.
// children property returns a live HTMLCollection of all child elements of the selected node.

// let element = document.querySelector("#parent");
// let parent = element.childNodes;
// console.log(parent);

// first and last child
// access the first and last child of the selected node
// properties
// firstChild return the first child node of the selected node(ant type text, comment, element)
// lastChild return the last child node of the selected node(ant type text, comment, element)
// firstElementChild return the first child element of the selected node(only element)
// lastElementChild return the last child element of the selected node(only element)

// let element = document.querySelector("#parent");
// let firstchild = element.firstChild;
// let lastchild = element.lastChild;
// let firstelementchild = element.firstElementChild;
// let lastelementchild = element.lastElementChild;
// console.log(firstchild);
// console.log(lastchild);
// console.log(firstelementchild);
// console.log(lastelementchild);

// sibling nodes
// access the sibling nodes of the selected node
// properties
//  nextSibling return the next sibling node of the selected node(ant type text, comment, element)
// previousSibling return the previous sibling node of the selected node(ant type text, comment, element)
// nextElementSibling return the next sibling element of the selected node(only element)
// previousElementSibling return the previous sibling element of the selected node(only element)

// let first = document.querySelector("p");
// let second = document.querySelector("span");

// let nextSibling = first.nextSibling;
// let nextElementSibling =first.nextElementSibling;
// let previousSibling = second.previousSibling;
// let previousElementSibling =second.previousElementSibling;

// console.log(nextSibling);
// console.log(nextElementSibling);
// console.log(previousSibling);
// console.log(previousElementSibling);

// closest(selector)
// closest() method is used to find the closest ancestor of the selected element that matches the specified selector.
// if dont match the selector then it will return null

// let element = document.querySelector("#btn");
// let closestElement = element.closest('#parent');
// console.log(closestElement);

// innertext return the text content of the selected element and its child elements
// let element = document.querySelectorAll("#parent h1 ");
// let listname = document.querySelectorAll("#parent ul li ");

// // let text = element.innerText;
// // console.log(text);
// // set
// element.innerText = " family";
// listname[0].innerText = "usama";
// listname[1].innerText = "misbah";
// listname[2 ].innerText = "haseeb";
// console.log(element);
// console.log(listname);

// innerHTML return the html content of the selected element and its child elements
// get
// let element = document.querySelector("#parent");
// let text = element.innerHTML;
// console.log(text);
//set

// element.innerHTML ="  <h1>family</h1> <ul> <li>usama</li> <li>misbah</li> <li>haseeb</li> </ul>";
// console.log(element);

// textContent return the text content of the selected element and its child elements

// let element = document.querySelector("h1")
// console.log(element);//show <h1 style="visibility: hidden">//fruits</h1>
// let text = element.textContent;
// console.log(text); //fruits

// let element= document.querySelector("h2");
// element.innerText = element.innerText +  " from apna collage";
// console.log(element.innerText);

// let element = document.querySelectorAll(".box");
// let i = 0;
// for (div of element){
//     console.log(div);
//     div.innerText = `usama khanzada${i}`;
//     i++;
// }
// console.log(element);

// // element[0].innerText = "usama khanzada";
// // element[1].innerText = "jameel khanzada";
// // element[2].innerText = "haseeb khanzada";
// console.log(element);

// getAttribute() => ye method kisi bhi element ka attribute value return karta hai.
// Element.getAttribute("attributeName")
// let element = document.querySelector("#heading");
// let attribute = element.getAttribute("id");
// console.log(attribute);
// // otherway
// let ele = document.querySelector(".box");
// console.log(ele.getAttribute("class"));

// let element = document.querySelector("h2");
// console.log(element.getAttribute("name"));

// setAttribute() => ye method kisi bhi element ka attribute set karta hai
//
// its chang first one.
// let element = document.querySelector(".box");
// element.setAttribute("class", "boxclass");
// console.log(element);

// for all class

// let element = document.querySelectorAll(".box");
// element.forEach((ele)=>{
//     ele.setAttribute("class","boxclass");
//     console.log(ele);
// });

// node.style => ye method kisi bhi element ka style set karta hai

// let element = document.querySelectora(".box");
// element.style.backgroundColor = "red";

// its also work on 1st one

// change all
// let element = document.querySelectorAll(".box");
// element.forEach( (ele)=> {
//     ele.style.backgroundColor = "red";
//     ele.style.border="2px solid black";

// });

// for insert element
// .append() => ye method kisi bhi element ko kisi doosre element ke andar insert karta hai.

// let btn = document.createElement("button");//yaha btn variable m button banaya h
// btn.innerText ="click me";// us k undr text likha h
// let element = document.querySelector(".box"); // jis class ya element k under insert karana h
// element.append(btn);// . append use for insert in end of element

// let btn = document.createElement("button");
// btn.innerText = "click me";
// let div = document.querySelector("#mydiv");
// div.append(btn);

// .prepend() => ye method kisi bhi element ko kisi doosre element ke andar start me insert karta hai.

// let btn = document.createElement("button");//yaha btn variable m button banaya h
// btn.innerText = "click me";// us k undr text likha h
// let element = document.querySelector(".box");// jis class ya element k under insert karana h
// element.prepend(btn);// . prepend use for insert in start of element

// add para

// let pera = document.createElement("p");
// pera.innerText = "khanazada";
// let element = document.querySelector("div");
// element.append(pera);

// before() add before the selected element out side
// let btn = document.createElement("button");
// btn.innerText ="click me";
// let element = document.querySelector(".box");
// element.before(btn);

// after() add after the selected element out side

// let btn = document.createElement("button");
// btn.innerText ="click me";
// let element =document.querySelector(".box");
// element.after(btn);

// let newheading= document.createElement("h1");
// newheading.innerHTML ="<i> usama khanzada</i>";
// document.querySelector("body").prepend(newheading);

// .remove() => ye method kisi bhi element ko remove karta hai.

// let element = document.querySelector("h2");
// element.remove();

//   let box = document.querySelector('.box');
//   let btn = document.createElement('button');
//   btn.textContent = 'Click me';
//   box.append(btn);
// console.log(box);

// appendChild() => ye method kisi bhi element ko kisi doosre element ke andar insert karta hai.
// ye text node darect add nahi krta convert krnaperta h

// let heading = document.createElement("h1");
// heading.innerText= "usama";
// document.querySelector("div").appendChild(heading);
// console.log(heading);
// let textNod = document.createTextNode("usama khanzada");
// let result = document.querySelector("div").appendChild(textNod);
// console.log(result);
// let element= document.createElement("p");
// let textNode = document.createTextNode("usama khanzada");
// element.appendChild(textNode);
// document.querySelector("div").appendChild(element);

// removeChild() => ye method kisi bhi element ko kisi doosre element se remove karta hai.
//  let element = document.querySelector("#myid");
//  let remove = element.children[2];
//  element.removeChild(remove);

// practice question
// question is create a button element give it text click me back ground color red and text color white is js

// let btn = document.createElement("button");
// btn.innerText = "click me";
// btn.style.backgroundColor = "red";
// btn.style.color = "white";
// btn.style.border = "none";
// let element = document.querySelector("body");
// element.prepend(btn);

// let element = document.querySelector("body");
// let btn = document.createElement("button");

// btn.innerText="click me";
// element.prepend(btn);

// btn.style.backgroundColor="red";
// btn.style.color= "white";

// create a <P> tag in htmal , give it a class and some style
// now create a new class in css  and try to append this class to the <p> element

// let pera = document.querySelector(".pera");
// pera.classList.add("p");
// console.log(pera);

//
// let elements = document.querySelector(".pera");
// // elements.getAttribute("class");
// elements.setAttribute("class","contant")

// did you notice , how you overwrite the class name when you add a new one?
// solve this using classlist

// let elements = document.querySelector(".pera");
// elements.getAttribute("class");
// elements.classList.add("pera","contant")

// other way/
// let pera = document.querySelector(".pera");
// pera.classList.add("contant");

// classList JavaScript ka ek built-in property hai jo kisi DOM element ki classes ko manage karne ke liye use hoti hai.
//  Iski madad se aap class ko asaani se
//  add, remove, toggle,
// ya check kar sakte hain, bina string manipulation ke

// let element = document.querySelector("div");

// // Class add karna
// element.classList.add("active");

// // Class remove karna
// element.classList.remove("active");

// // Class ko toggle karna (agar hai to hata dega, nahi hai to add kar dega)
// element.classList.toggle("active");

// // Check karna ke class lagi hai ya nahi
// element.classList.contains("active"); // true ya false return karega

// // Ek se zyada class add/remove bhi kar sakte hain
// element.classList.add("first", "second");
// element.classList.remove("first", "second");

// event
// event is a action that occurs in the browser
// the change in the state of the object is called event
// event are fired to notify code of "interesting changes" that have occurred or effect code execution

// onclick => when user click on the element

// let button = document.querySelector("#btn");
// button.onclick= (event)=>{
//     console.log(event.type, event.target, event.currentTarget, event.clientX, event.clientY);
//     // let a =20;
//     // a++;
//     // console.log(a);

// };

// let div = document.querySelector("div");
// div.onmouseover =()=>{
//     console.log("mouse is over the div");
//     div.style.backgroundColor = "red";
// }

// div.onmouseout = ()=>{
//     div.style.backgroundColor="blue";
// };

// event object // event object is a object that contains information about the event that occurred

// let button = document.querySelector("#btn");
// button.onclick= (event)=>{
//     console.log(event.type, event.target, event.currentTarget, event.clientX, event.clientY);

// };

// Kuch Useful Properties:
// event.type → Event ka naam (click, keyup, etc.)
// event.target → Jis element par event laga hai
// event.currentTarget → Jis element par listener laga hai (kabhi kabhi alag hota hai)
// event.key → Konsi key press hui (keyboard events)
// event.preventDefault() → Default action rok deta hai (jaise form submit na ho)
// event.stopPropagation() → Event bubble ya propagate hone se rokta hai

// node.addEventListener(event, callback);
// addEventListener() => ye method kisi bhi element par event listener add karta hai.
// is ma same  nodee pr miltiple event laga sakty hn

// let  button = document.querySelector("#btn");
// button.addEventListener("click",(eve)=>{
//     console.log("usama 1");

// });

// let  button2 = document.querySelector("#btn");
// button2 .addEventListener("click",(eve)=>{
//     console.log("usama2");

// });

// removeEventListener() => ye method kisi bhi element se event listener remove karta hai.

// let button = document.querySelector("#btn");
// button.addEventListener("click", (eve) => {
//   console.log("usama1");
// });
// button.addEventListener("click", (eve) => {
//   console.log("usama2");
// });
// function usamahendler(eve) {
//   console.log("usama3");
// }
// button.addEventListener("click", usamahendler);

// button.addEventListener("click", (eve) => {
//   console.log("usama4");
// });

// button.removeEventListener("click", usamahendler);

// let button = document.querySelector("#btn");
// button.addEventListener("click", (eve) => {
//   console.log("usama1");
// });
// button.addEventListener("click", (eve) => {
//   console.log("usama2");
// });
// let  usamahendler=(eve)=> {
//   console.log("usama3");
// };
// button.addEventListener("click", usamahendler);

// button.addEventListener("click", (eve) => {
//   console.log("usama4");
// });

// button.removeEventListener("click", usamahendler);

// let mode = "white";
// let body = document.querySelector("body");
// let btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   if (body.style.backgroundColor === "white") {
//     body.style.backgroundColor = "black";
//     body.style.color = "white";
//     // mode = "black";
//   } else {
//     body.style.backgroundColor = "white";
//     body.style.color = "black";
//     // mode = "white";
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let body = document.querySelector("body");
//   // let btn = document.querySelector("button");
//   let btn = document.querySelector('.switch input[type="checkbox"]');
//   btn.addEventListener("change", (ele) => {
//     if (btn.checked) {
//       body.style.backgroundColor = "black";
//       body.style.color = "white";
//     } else {
//       body.style.backgroundColor = "white";
//       body.style.color = "black";
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let btn = document.querySelector('.switch input[type="checkbox"]');
//   btn.addEventListener("change", (eve) => {
//     if (btn.checked) {
//       document.body.style.backgroundColor = "black";
//       document.body.style.color = "white";
//     } else {
//       document.body.style.backgroundColor = "white";
//       document.body.style.color = "black";
//     }
//   });
// });

// 2D array maeans a 2Dimaensional array ,thoes array which is form in columns and row form like a table.
// let arr2 = [
//     [1,2,3],
// [4,5,6],
// [7,8,9],
// ];

// console.log(arr2[2][2]);

// let player0 = true;
// let boxes = document.querySelectorAll(".box");

// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     if (player0 === true) {
//       box.innertext = "O";
//       player0 = false;
//     } else {
//       box.innerText = "X";
//       player0 = true;
//     }
//     box.disabled = true;
//     chackWinner();
//   });
// });
// let chackWinner = () => {
//   for (let patteran of winpatterans) {
//     console.log(boxes[patteran[0]], boxes[patteran[1]], boxes[patteran[2]]);
//   }
// };

// oop in js
// object  => a js object is an entity having state and behavior( properties and methods)

// const student = {
//   fullName: "usama khanzada",
//   marks: 90,
//   printMarks: function () {
//     console.log(`${this.fullName}and marks is${this.marks}`);
//   },
// };
// console.log(student);
// "use strict";
// let test = function () {
//   console.log(this);
// };

// test();

// prototype
// Prototype is a built-in feature in JavaScript that allows you to add properties and methods to existing objects or constructor functions.

// const employee = {
//   calcTex() {
//     console.log("tex is 10% of salary");
//   },
// };

// const emp1 = {
//   salary: 50000,
// };

// emp1.__proto__ = employee;
// emp1.calcTex();
// console.log((emp1.__porot__ = employee));

// const employee = {
//   calcTex() {
//     console.log(`tex is 10% of ${this.salary} = ${this.salary * 0.1}`);
//   },
// };
// const emp1 = Object.create(employee);
// emp1.salary = 50000;
// emp1.calcTex();

// classes
// class is a blueprint for creating objects with shared properties and methods.

// class toyotaCar {
//   start() {
//     console.log("start");
//   }
//   // no need for coma,

//   stop() {
//     console.log("stop");
//   }

//   setbrand(brand) {
//     this.newbrand = brand;
//   }
// }

// // new keyword se class ka instance create hota hai

// const carola = new toyotaCar();
// carola.setbrand("carola");
// const lx570 = new toyotaCar();

// console.log(carola);
// console.log(lx570);
//**  new Keyword Ka Basic Maqsad
// new keyword JavaScript mein objects banane ka tareeka hai jab hum constructor functions ya classes use karte hain. Yeh ek special operator hai jo 3 kaam karta hai:

// Khali object create karta hai

// Us object ko constructor function/class se link karta hai

// Automatically object return karta hai

// constructor
// Constructor function ek special function hai jo new keyword ke saath use hota hai. Iska maqsad ek naya object create karna aur us object ko initialize karna hota hai.
// class toyotaCar {
//   start() {
//     console.log("start");
//   }
//   // no need for coma,

//   stop() {
//     console.log("stop");
//   }

//   constructor(brand) {
//     this.newbrand = brand;
//   }
// }
// // new keyword se class ka instance create hota hai

// const carola = new toyotaCar("carola");
// const lx570 = new toyotaCar("lx570");

// console.log(carola);
// console.log(lx570);

// class person {
//   constructor() {
//     this.species = "homo sapiens";
//   }

//   eat() {
//     console.log("eat");
//   }
//   sleep() {
//     console.log("sleep");
//   }
//   work() {
//     console.log("do nothing");
//   }
// }

// class engineer extends person {
//   work() {
//     console.log("slove problrms");
//   }
// }

// class doctor extends person {
//   work() {
//     console.log("treat");
//   }
// }
// let d1 = new doctor();
// let e1 = new engineer();
// console.log(e1);

// console.log(d1);

// class person {
//   constructor(name) {
//     this.species = "homo sapiens";
//     this.name = name;
//   }

//   eat() {
//     console.log("eat");
//   }
// }

// class engineer extends person {
//   constructor(branch, name) {
//     super(name);
//     this.branch = branch;
//   }

//   work() {
//     console.log("slove problrms");
//   }
// }

// let e1 = new engineer("computer seince", "usama");
// console.log(e1);
// console.dir (e1);
// let data = "college data";
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   viewData() {
//     console.log(`data is ${data}`);
//   }
// }
// let student1 = new User("usama", "usama@319");
// let student2 = new User("khanzada", "khanzada@319");
// console.log(student1);
// console.log(student2);

// class Admin extends User {
//   constructor(name, email) {
//     super(name, email);
//   }
//   editdata() {
//     data = "new data";
//   }
// }
// let adm1 = new Admin("admin", "@139");
// console.log(adm1.editdata);

// error handling
// try catch

// let a = 10;
// let b = 5;
// let sum = a + b;
// console.log(sum);
// if (sum != 15) {
//   throw new Error();
// }
// console.log(sum);
// try {
//   console.log(gum);
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log("error found");
// }

// console.log(sum);
// console.log(sum);

// asynchronous

// console.log("one");
// console.log("two");
// setTimeout(
//   (timetakentask = () => {
//     console.log("apny time console hua ");
//   }),
//   4000
// );
// console.log("three");
// console.log("four ");

// function sum(a, b) {
//   console.log(a + b);
// }
// function calculate(a, b, sumcallback) {
//   sumcallback(a + b);
// }
// calculate(1, 3, (sum) => {
//   console.log(sum);
//   return sum;
// });

// function calculate(a, b, sum) {
//   return sum(a, b);
// }

// function add(x, y) {
//   return x + y;
// }
// let result = calculate(5, 4, add);
// console.log(result);

// const hello = () => {
//   console.log("hello");
// };
// setTimeout(hello, 3000);

// callback hell
// function getData(dataid, nextData) {
//   setTimeout(() => {
//     console.log(dataid);
//     if (nextData) {
//       nextData();
//     }
//   }, 3000);
// }
// getData(1, () => {
//   getData(2, () => {
//     getData(3);
//   });
// });

// promise

// function getData(dataid, nextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(dataid);
//       resolve("success");
//     }, 5000);
//   });
// }
// let result = getData(5);
// console.dir(result);

// settimeout

// let hello = setTimeout(() => {
//   console.log("hello");
// }, 2000);
// console.log(hello); cleartime out/

// function sum(a, b) {
//   console.log(a + b);
// }
// function calc(a, b, sum) {
//   sum(a, b);
// }
// calc(1, 5, sum);

// function getData(getData, getNextdata) {
//   setTimeout(() => {
//     console.log(getData);
//     if (getNextdata) {
//       getNextdata();
//     }
//   }, 2000);
// }

// getData(123, () => {
//   getData(456);
// });
// console.log("one");
// console.log("two");
// function getdata(getdata) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(getdata);
//       // resolve("success");
//       // reject("error");
//     }, 5000);
//   });
// }
// let promise = getdata(123);
// console.log(promise);
// console.log("three");
// console.log("four");

// const getpromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("im a promise");
//       resolve("success");//yeha sy hm promise ki state chang kr sakty hn
//       reject("error");
//     }, 2000);
//   });
// };
// let setpromise = getpromise();
// setpromise.then((res) => {  //res wo massage h jo hm ny resolve m pass keya h
//   console.log("promise is fullfil",res);
// });

// setpromise.catch((err) => {  //err wo massage h jo hm ny reject m pass keya h
//   console.log("promise is rejact",err);
// });

// function getdata1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("success");
//       console.log("data1");
//     }, 4000);
//   });
// }

// function getdata2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("success");
//       console.log("data2");
//     }, 4000);
//   });
// }

// console.log("fatching data1.......");
// getdata1().then((res) => {
//   console.log(res);

//   console.log("fatching data2.......");
//   getdata2().then((res) => {
//     console.log(res);
//   });
// });

// function getdata(dataid) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("success");
//       console.log(dataid);
//     }, 3000);
//   });
// }
// call by using async await

// async function allData() {
//   await getdata(123);
//   await getdata(456);
// }
// allData();

// console.log("fatching data1.......");
// getdata(123).then((sre) => {
//   console.log("fatching data2.......");
//   getdata(456).then((res) => {});
// });

// console.log("fatching data1.......");
// getdata(1)
//   .then(() => {
//     console.log("fatching data2.......");
//     return getdata(2);
//   })
//   .then(() => {
//     console.log("fatching data3.......");
//     return getdata(3);
//   });

// api fatching

// const url = "https://api.thecatapi.com/v1/images/search?limit=10";
// const getData = async () => {
//   let response = await fetch(url);
//   console.log(response);
// };
// getData();

// let title = document.getElementById("title");
// const button = document.querySelector("#btn");
// const url = "https://jsonplaceholder.typicode.com/posts";

// const getData = async () => {
//   try {
//     let response = await fetch(url);
//     console.log(response);
//     let data = await response.json();
//     console.log(data[54].title);
//     title.innerText = data[54].title;
//   } catch (error) {
//     console.error("error aaya h", error.message);
//   }
// };

// const getData = async () => {
//   try {
//     let response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("http Error status:", response.status);
//     }
//     let data = await response.json();
//     if (title) {
//       title.innerText = data[0].title;
//       console.log(data[0].title);
//     } else {
//       console.log("title in not found");
//     }
//   } catch (error) {
//     console.error("error found", error);
//     if (title.innerText);
//     title.innerText = "error to lode data";
//   }
// };

// getData();
// button.addEventListener("click", getData);

// useing promies chaining

// function getData() {
//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new error("http error status", response.status);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data[12].title);
//       if (data) {
//         title.innerText = data[12].title;
//       }
//     })
//     .catch((error) => {
//       console.error("error aaya h", error);
//       if (title) {
//         title.innerText = "error ouccred";
//       }
//     });
// }
// getData();
// if (button) {
//   button.addEventListener("click", getData);
// } else {
//   console.error("button is not found ");
// }

// const testurl =
//   "  https://v6.exchangerate-api.com/v6/eb7039768e551f4496430d7a/latest/USD";
// const api = async () => {
//   const promise = await fetch(testurl);
//   const data1 = await promise.json();
//   console.log(data1);
// };
// api();

// const createtodo = async (todo) => {
//   const option = {
//     method: "post",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(todo),
//   };

//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/posts",
//     option
//   );
//   const data = await response.json();
//   return data;
// };

// const mainfun = async () => {
//   const todo = {
//     title: "usama",
//     body: "khanzada",
//     id: 110,
//   };
//   const todor = await createtodo(todo);
//   console.log(todor);
// };
// mainfun();

// fetch("https://api.restful-api.dev/objects")
//   .then((res) => {
//     if (!res.ok) throw new Error("server Error");

//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error, "error");
//   });

// axios
//   .get("https://api.restful-api.dev/objects")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

// error handling in axios

// axios
//   .get("https://api.restful-api.dev/objects")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     if (error.response) {
//       console.log(error.response.data);
//       console.log(error.response.status);
//     } else if (error.request) {
//       console.log("network error");
//     } else {
//       console.log("error :", error);
//     }
//   });

// fetch post

// const userdata = {
//   id: "01",
//   name: "Apple MacBook Pro 16",
//   data: {
//     year: 1999,
//     price: 459.99,
//     CPU: "Intel Core i9",
//     Hard_disk_size: "1 TB",
//   },
//   createdAt: "2022-11-21T20:06:23.986Z",
// };
// fetch("https://api.restful-api.dev/objects", {
//   method: "post",
//   headers: {
//     "content-Type": " application/json",
//     Authorization: "Bearer token123",
//   },
//   body: JSON.stringify(userdata),
// })
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(`HTTP: ${res.status}-${res.statusText}`);
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

// const userdata = {
//   id: "01",
//   name: "Apple MacBook Pro 16",
//   data: {
//     year: 1999,
//     price: 459.99,
//     CPU: "Intel Core i9",
//     Hard_disk_size: "1 TB",
//   },
//   createdAt: "2022-11-21T20:06:23.986Z",
// };

// axios
//   .post("https://api.restful-api.dev/objects", userdata, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer token123",
//     },
//   })
//   .then((response) => {
//     console.log(response.data);
//     console.log(response.status);
//   })
//   .catch((error) => {
//     console.log("Error:", error.response?.data || error.message);
//   });

// async function updateproductprice(productID, newname) {
//   try {
//     const response = await fetch(
//       `https://api.restful-api.dev/objects/${productID}`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name: newname }),
//       }
//     );
//     if (!response.ok) {
//       console.log(response.status, "error");
//     }

//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }
// updateproductprice("20", "google");

// const userdata = {
//   id: "01",
//   name: "Apple MacBook Pro 16",
//   data: {
//     year: 1999,
//     price: 459.99,
//     CPU: "Intel Core i9",
//     Hard_disk_size: "1 TB",
//   },
//   createdAt: "2022-11-21T20:06:23.986Z",
// };

// fetch("https://api.restful-api.dev/objects/120", {
//   // ID 123 wala item update hoga
//   method: "PUT", // Method batata hai ke hum update kar rahe hain
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "Bearer your_token_here", // Agar API protected hai
//   },
//   body: JSON.stringify(userdata), // Updated data
// })
//   .then((response) =>
//     response.json({
//       name: userdata.name,
//       price: userdata.data.price,
//     })
//   )
//   .then((data) => console.log("Success:", data))
//   .catch((error) => console.error("Error:", error));

// const url = fetch("https://api.restful-api.dev/objects/1")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
////////////////////////////////////  put data exist id to nikal kr us id pr chand karna
// const userdata = {
//   id: "01",
//   name: "Apple MacBook Pro 16",
//   data: {
//     year: 1999,
//     price: 459.99,
//     CPU: "Intel Core i9",
//     hard_disk_size: "1 TB",
//   },
//   createdAt: "2022-11-21T20:06:23.986Z",
// };

// fetch("https://api.restful-api.dev/objects  ", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },

//   body: JSON.stringify(userdata),
// })
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(`server Error ${res.status}`);
//     }
//     return res.json();
//   })
//   .then((newitam) => {
//     // console.log(newitam.id);
//     const existingData = newitam;
//     return fetch(`https://api.restful-api.dev/objects/${newitam.id}`, {
//       method: "PUT",

//       headers: {
//         "Content-Type": "application/json",
//       },

//       body: JSON.stringify({
//         ...existingData,
//         name: "Apple MacBook Pro 15",
//         data: {
//           ...existingData.data,
//           CPU: "Intel Core i11",
//         },
//       }),
//     });
//   })

//   .then((updateRes) => {
//     return updateRes.json();
//   })
//   .then((updatedata) => {
//     console.log(JSON.stringify(updatedata, null, 2));
//     // console.dir(updatedata);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// axios
// const userdata = {
//   id: "01",
//   name: "Apple MacBook Pro 16",
//   data: {
//     year: 1999,
//     price: 459.99,
//     CPU: "Intel Core i9",
//     Hard_disk_size: "1 TB",
//   },
//   createdAt: "2022-11-21T20:06:23.986Z",
// };
// axios.post(`https://api.restful-api.dev/objects`, userdata, {

// })

// axios
//   .get(`https://jsonplaceholder.typicode.com/posts/1`, { timeout: 5000 })
//   .then((response) => {
//     const existingData = response.data;
//     console.log(response.data);
//     console.log(response.status);

//     const updatedata = {
//       ...existingData,
//       title: "new title",
//       body: "new body",
//       userId: 125,
//       id: 1,
//     };
//     return axios.put(
//       `https://jsonplaceholder.typicode.com/posts/1`,
//       updatedata
//     );
//   })
//   .then((updateresponse) => {
//     console.log(updateresponse.data);
//   })
//   .catch((error) => {
//     console.log(`error${error}`);
//   });

// const updatform = document.getElementById("updateform");
// updatform.addEventListener(Submit, async (ele) => {
//   ele.preventDefault();
// });

// const newname = document.getElementById("nameinput").value;
// const newprice = document.getElementById("priceinput").value;
// const newharddisk = document.getElementById("harddiskinput").value;
// const productID = "1";

// const updateitem = {};
// if (newname) updateitem.name = newname;
// if (newprice)
//   updateitem.data = { ...updateitem.data, price: parseFloat(newprice) };
// if (newharddisk)
//   updateitem.data = { ...updateitem.data, Hard_disk_size: newharddisk }; // Note: 'H' capital

// axios
//   .put(`https://api.restful-api.dev/objects/${productID}`, updateitem, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//   .then((response) => {
//     document.getElementById("result").innerHTML = `
//     <div class="success">
//       Update Successful!<br>
//       <pre>${JSON.stringify(response.data, null, 2)}</pre>
//     </div>
//   `;
//     console.log("Response:", response.data);
//   })
//   .catch((error) => {
//     document.getElementById("result").innerHTML = `
//     <div class="error">
//       Error: ${error.response?.data?.message || error.message}
//     </div>
//   `;
//     console.error("Error Details:", error);
//   });

// /////////////////////////////////////////////////
// const updatedata = {
//   name: "Apple MacBook Pro 17 (Updated)",
//   data: {
//     price: 1999.99, // Only update price
//   },
// };
// axios
//   .get(`https://api.restful-api.dev/objects/7`)
//   .then((getresponse) => {
//     const existid = getresponse.data.id;
//     console.log(getresponse.data.id);

//     return axios.put(
//       `https://api.restful-api.dev/objects/${existid}`,
//       updatedata,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   })
//   .then((updateres) => {
//     console.log(JSON.stringify(updateres, null, 2));
//   })
//   .catch((error) => {
//     console.log(`error :${error.message}`);
//   });
////////////////////////////////////////////////////

// /////////////////patch////////////////////////////////

// axios
//   .get(`https://jsonplaceholder.typicode.com//posts/1`, {
//     headers: {
//       "Content-Type": "message/json",
//     },
//   })
//   .then((response) => {
//     console.log(response.data);
//     const existingdata = response.data;
//     const update = {
//       ...existingdata,
//       body: "usama",
//       title: "khanzada",
//     };
//     return axios.patch(`https://jsonplaceholder.typicode.com//posts/1`, update);
//   })
//   .then((updatResponse) => {
//     console.log(updatResponse.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//////////////////delete request//////////////////////////////////////////////

// axios
//   .get(`https://jsonplaceholder.typicode.com/posts/1`)
//   .then((response) => {
//     console.log(response.data);
//     return axios
//       .delete(`https://jsonplaceholder.typicode.com/posts/1`)
//       .then((deleteResopse) => {
//         console.log(deleteResopse.data);
//         console.log(deleteResopse.status);
//       });
//   })
//   .catch((error) => {
//     console.log(`error:${error.status}`);
//   });
///////////////////////////////////////////////////////////
// axios
//   .get(`https://jsonplaceholder.typicode.com/posts/1`)
//   .then((response) => {
//     console.log(response.data);
//     const originaldata = response.data;
//     const fieldsToDelete = ["title", "body"];
//     const updatedata = { ...response.data };
//     fieldsToDelete.forEach((field) => {
//       const deletedata = delete updatedata[field];
//       console.log(deletedata);
//       console.log(updatedata);
//     });
//     return axios
//       .patch(`https://jsonplaceholder.typicode.com/posts/1`, updatedata)
//       .then((updateResponse) => {
//         console.log(updateResponse.data);
//       });
//   })
//   .catch((error) => {
//     console.log(`error:${error.message}`);
//   });
////////////////////////////////////////
// axios
//   .get(`https://jsonplaceholder.typicode.com/posts/1`)
//   .then((response) => {
//     console.log(response.data);
//     return axios
//       .put(`https://jsonplaceholder.typicode.com/posts/1`, {
//         title: null,
//         body: null,
//       })
//       .then((updatedata) => {
//         console.log(updatedata.data);
//       });
//   })
//   .catch((error) => {
//     console.log(`error:${error.message}`);
//   });

////////////delete ADD,update/////////////////////////

axios;
// .get(`https://jsonplaceholder.typicode.com/posts/1`)
// .then((response) => {
//   console.log(response.data);
//   return axios
//     .put(`https://jsonplaceholder.typicode.com/posts/1`, {
//       title: null,
//       body: "new content",
//       tags: ["thec", "web"],
//     })
//     .then((updatedata) => {
//       console.log(updatedata.data);
//     });
// })
// .catch((error) => {
//   console.log(`error:${error.message}`);
// });
// //////////////////switch/////////////////////////////////////////////////

// let day = "friday";
// switch (day) {
//   case "monday":
//     console.log("today is monday");
//     break;
//   case "tuesday":
//     console.log("today is tuesday");
//     break;
//   default:
//     console.log("today is not  monday or tuesday");
// }
/////////////////////////////////////////////////

// let result = 53;
// switch (true) {
//   case result >= 90 && result <= 100:
//     console.log("A+");
//     break;
//   case result >= 80 && result < 90:
//     console.log("A");
//     break;
//   case result >= 70 && result < 80:
//     console.log("B+");
//     break;
//   case result >= 60 && result < 70:
//     console.log("C");
//     break;
//   case result >= 50 && result < 60:
//     console.log("D");
//     break;
//   case result >= 40 && result < 50:
//     console.log("E");
//     break;
//   case result >= 0  && result < 40:
//     console.log("F");
//     break;
//   default:
//     console.log("Invalid Result");
// }

// ////////////////// break//////////////////////////

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

//////////////////continue///////////////////////////
// for (let i = 1; i <= 10; i++) {
//   if (i === 4 ) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i === 4 || i === 6) {
//     continue;
//   }
//   console.log(i);
// }

// ////////////////////////////
// function getDate(
//   day = new Date().getDay(),
//   date = new Date().getDate(),
//   month = new Date().getMonth()
// ) {
//   console.log(day, date, month);
// }
// getDate();

// /////////////default peremites////////////////////

// function greet(name = "Guest") {
//   console.log(`Hello,${name}`);
// }
// greet("usama");
// ///////////////default peremites as expression//////////////////////
// function calculate(total = 100, tax = total * 0.05) {
//   let payment = total + tax;
//   console.log(`Total:${total},Tax:${tax},payment:${payment}`);
// }
// calculate(50, 1);

// //////function call/////////
// function getAge() {
//   return 18;
// }
// function person(name = "Guest", age = getAge()) {
//   console.log(`name:${name},age${age}`);
// }
// person();
///////////////////previous parameter reference//////////
// function createbox(width = 10, hight = width * 2, area = width + hight) {
//   console.log(`width:${width},hight:${hight},area:${area}`);
// }

// createbox(40, 10);

// ////////////////dynamic data defult/////////////

// function logmassage(massage, timestamp = new Date().toLocaleTimeString()) {
//   console.log(`[${timestamp}],${massage}`);
// }
// logmassage("hello usama");
/////////////////////////////////////////

////////////////////////////
// function sum(...number) {
//   let total = 0;
//   for (num of number) {
//     total += num;
//   }
//   return total;
// }
// console.log(sum(1, 2, 3, 4, 5));

////////spread operator//////////////////
// const num = [1, 2, 3, 4];
// const num2 = [...num, 5, 6, 7, 8];
// console.log(...num, ...num2);
////with object////////
// const person = {
//   name: "usama",
//   age: 25,
// };
// const information = {
//   ...person,
//   city: "karachi",
// };
// console.log(information);
// ////////string convert into array ///////////////////
// let str = "usama";
// let array = [...str];
// console.log(array);

//

//
// /////////////pass as argument in function////////

// function sum(a, b, c) {
//   return a + b + c;
// }
// const num = [1, 2, 3];

// console.log(sum(...num));
// //////////////////////
// function sum(...num) {
//   console.log(num);
// }
// sum(1, 2, 3);

//////////////////////// Array Destructuring//////////////

// const num = [1, 2, 3, 4, 5, 6];
// const [a, b, c, d, e, f] = num;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(a, b, c, d, e, f);
// ///////////Skipping Elements (Commas Use Karke)/////////////

// const num = [1, 2, 3];
// const [a, , c] = num;
// console.log(a);
// console.log(c);

// ////////////////////Default Values (Agar Element Na Ho Toh)/////
// const age = [25];
// const [s1age, s2age = 24] = age;

// console.log(s1age);
// console.log(s2age);
///////////////////////////////Nested Arrays Destructuring

// const num = [1, [2, 3], 4];
// const [a, [b, c], d] = num;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// //////////////////Rest Parameter (...) Ke Sath Destructuring/

// const num = [1, 2, 3, 4, 5];
// const [a, b, ...rest] = num;
// console.log(a);
// console.log(b);
// console.log(rest);

// //////////rest operator

// function calculateAverage(...number) {
//   let average = number.reduce((acc, curr) => acc + curr);
//   return average / number.length;
// }
// console.log(calculateAverage(1, 2, 3, 4, 5));

// /////////////// Swapping Variables (Without Temp Variable)

// let a = 10;
// let b = 20;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// ////////////////////Function Se Returned Array Ko Destructure Karna

// function getnumber() {
//   return [1, 2, 3];
// }
// const [a, b, c] = getnumber();
// console.log(a);
// console.log(b);
// console.log(c);

// //////////Object Ke Andar Array Ko Destructure Karna/////
// const person = {
//   name: "usama",
//   marks: [50, 65, 74],
// };
// const {
//   name,
//   marks: [math, urdu, english],
// } = person;
// console.log(math);
// console.log(urdu);
// console.log(english);

// console.log(person.name );
// /////////////////////////////////////
// const user = {
//   name: "usama",
//   age: 25,
//   city: "karachi",
// };
// const { name, age } = user;
// console.log(name);
// console.log(age);
// ///////////////////////////////
// const car = { brand: "Toyota", model: "Corolla" };
// const { brand: carBrand, model: carModel } = car;
// console.log(carBrand);
// console.log(carModel);

// ////////////////////////
// const user = {
//   name: "usama",
//   age: 25,
// };
// const { name, age, city = "karachi" } = user;
// console.log(city);
// /////////////////////////////////////////
// const employee = {
//   id: 1,
//   details: {
//     name: "usama",
//     department: "HR",
//   },
// };
// const {
//   details: { name },
//   details: { department },
// } = employee;
// console.log(name);
// console.log(department);

// ////////////////////////////////////
// const color = ["red", "green", "blue"];
// const [primary, secondary] = color;
// console.log(primary);
// console.log(secondary);
// /////////////////
// function displayUser({ name, age }) {
//   console.log(name);
//   console.log(age);
// }
// const user = {
//   name: "usama",
//   age: 25,
// };
// displayUser(user);
// //////////////////
// const user = {
//   user: ["ali", "bilal"],
//   settings: {
//     darkMode: true,
//   },
// };
// const {
//   user: [firstuser],
//   settings: { darkMode },
// } = user;
// console.log(firstuser);
// console.log(darkMode);
// ///////////////////
// const student = {
//   name: "usama",
//   age: 25,
//   grade: "A",
//   school: "xyz",
// };
// const { name, ...details } = student;
// console.log(details);
// ////////////////////////////

// const apiResponse = {
//   status: "success",
//   data: {
//     user: {
//       id: 1,
//       name: "usama",
//     },
//     token: "abc123",
//   },
// };
// const {
//   status,
//   data: {
//     user: { id, name },
//   },
//   data: { token },
// } = apiResponse;
// console.log(status);
// console.log(id);
// console.log(name);
// console.log(token);
// //////////////adding and removing properties from objects/////////////
// /////////////Bracket Notation Use Karna (Dynamic Properties)

// let car = {};
// let propertyName = "color";
// let propertyValue = "red";
// car[propertyName] = propertyValue;
// car["barnd"] = "toyota";
// car["modal"] = "corola";
// console.log(car);
// Object.assign() Method Use Karna (Ek Saath Kai Properties)/////////

// let person = { name: "usama" };
// Object.assign(person, {
//   age: 25,
//   grade: "A",
//   city: "karachi",
// });
// console.log(person);

// //add with the help of spread operator
// let user = {
//   name: "usama",
// };
// let updateUser = {
//   ...user,
//   age: 25,
//   city: "karachi",
// };
// console.log(updateUser);

// ///////remove properties in object//

// let user = {
//   name: "usama",
//   age: 25,
//   city: "karachi",
//   salary: 630000,
// };
// let update = delete user.salary;
// console.log(user);
// console.log(update);
// delete user["salary"];
// console.log(user);
// /////////////for multiple properties
// ["salary", "age"].forEach((pro) => {
//   delete user[pro];
// });
// console.log(user);

// //////////////////////

// let product = {
//   name: "Dell",
//   price: 1000,
//   inStock: true,
// };
// let deleteProperty = "inStock";
// delete product[deleteProperty];
// console.log(product);

//  Object Destructuring Use Karna (Specific Property Hata Kar)/////

// let person = {
//   name: "usama",
//   age: 25,
//   city: "karachi",
// };

// let { name, ...remaning } = person;
// console.log(remaning);

// ///////nested adding and removing properties///////

// let company = {
//   name: "tech",
//   address: {
//     city: "karachi",
//     country: "pakistan",
//   },
// };

// company.address.street = "123 Street";
// console.log(company);

// delete company.address.country;
// console.log(company);

// /////////////Check Karna Property Exists Hai Ya Nahi////////

// let person = {
//   name: "usama",
//   age: 25,
// };
// console.log("name" in person);
// console.log("age" in person);
// if ("age" in person) {
//   delete person.age;
// }
// console.log(person);

// Object Se Saari Properties Remove Karna///

// let user = {
//   name: "usama",
//   age: 25,
//   city: "karachi",
// };

// //////////1st way///
// for (key in user) {
//   delete user[key];
// }
// console.log(user);

// ////////////2nd way///////////
// user = {};
// console.log(user);

// /////////////////

// let userProfile = {
//   userName: "usama139",
//   email: "usamakhanzada@gamil.com",
// };
// userProfile.fullName = "usama khanzada";
// userProfile.phone = "03030339920";
// userProfile.city = "karachi";

// delete userProfile.email;
// console.log(userProfile);
// ///////////////////////

// let shopingcart = {
//   totalItam: 3,
//   totalprice: 4500,
//   items: ["shirt", "shoes", "watch"],
// };
// shopingcart.totalItam = 2;
// shopingcart.totalprice = 3000;

// // shopingcart.items.pop();
// shopingcart.items.splice(2, 1);

// shopingcart.discount = 500;
// shopingcart.totalprice -= shopingcart.discount;
// console.log(shopingcart);

// ///////////arry element add///////////////

// //add in end///
// let furits = ["banana", "apple"];
// furits.push("mango");
// console.log(furits);
// ////concat array////
// let fruits = ["banana", "apple"];
// let citrus = ["orange", "lemon"];
// let allFruits = fruits.concat(citrus, "mango");
// console.log(allFruits);

// ///add to start//////////

// let num = [1, 2, 3];
// num.unshift(0);
// console.log(num);

// ////splice///////////
// let num = [1, 2, 3];
// num.splice(0, 0, 0);
// console.log(num);
// ///////bich m koi element add karna/////////

// let num = [1, 2, 4, 5, 6];
// num.splice(2, 0, 3);
// console.log(num);
////////add with help of spread oprater///////

// let num1 = [1, 2, 3];
// let num2 = [4, 5, 6];
// let combined = [...num1, ...num2];
// console.log(combined);
// /////////////
// let colors = ["red", "green", "blue"];
// let allColors = ["yellow", "pink", ...colors, "purple"];
// console.log(allColors);
// ////////slice////////
// let num = [1, 2, 4, 5];
// let allnum = [...num.slice(0, 2), 3, ...num.slice(2)];
// console.log(allnum);

// /removeing element ////////

/////////////remove from end pop()////
// let num = [1, 2, 3, 4];
// num.pop();
// console.log(num);
// with the help of splice//////

// let num = [1, 2, 3, 4];
// num.splice(3, 1);
// // num.splice(-1, 1);

// console.log(num);

// ////remove from start shift()////
// let num = [1, 2, 3, 4, 5];
// num.shift();
// console.log(num);
// //////////remove from start splice()///
// let num = [1, 2, 3, 4, 5];
// num.splice(0, 1);
// console.log(num);
// ////////center position sy remove karna ///
// let num = [1, 2, 3, 4, 5];
// num.splice(2, 1);
// console.log(num);

// remove with the help or fillter
// let num = [1, 2, 3, 4, 5, 6];
// let newnum = num.filter((number) => {
//   return number % 2 !== 0;
// });
// console.log(newnum);

// //////// Specific value remove karna/////
// /without three/////

// let num = [1, 2, 3, 4, 5, 6];
// let newnum = num.filter((number) => {
//   return number !== 3;
// });
// console.log(newnum);

// arrays Special Methods aur Techniques//////
// copy a part of an array with the help of slice()
// let number = [1, 2, 3, 4, 5, 6];
// let newnum = number.slice(1, 4);
// console.log(newnum);
// console.log(number);

// roemove with the help od .length property

// let number = [1, 2, 3, 4, 5, 6];
// number.length = 3;
// console.log(number);

// /////// array ko khali karna with the help of empty array///

// .length sy complet arry empty karna
// let number = [1, 2, 3, 4, 5, 6];
// number.length = 0;
// console.log(number);

// /////////////splice and.length sy complet arry empty karna
// let number = [1, 2, 3, 4, 5, 6];
// number.splice(0, number.length);
// console.log(number);
// ////////////////////

// ///Todo List task//
// let todos = ["Learn JavaScript", "Buy groceries"];
// // add new task
// todos.push("call mamma");
// console.log(todos);
// // do first task,, remove a element start from

// let completTask = todos.shift();
// console.log(`complet task:  ${completTask}`);
// console.log(todos);
// // add an urgent meeting// center m koi element add karna
// todos.splice(1, 0, "meeting");
// console.log(todos);

// let cart = ["shirt", "shoes", "watch"];
// // add add in end
// cart.push("belt");
// console.log(cart);

// // remove item
// let removed = cart.splice(1, 1);
// console.log(`removed item ${removed}`);

// // multipul item add

// cart.push("sunglasses", "socks");
// console.log(cart);

// ///////////////////////////

// let marks = [85, 92, 78, 95, 88];
// let minMarks = Math.min(...marks);
// console.log(`min marks :${minMarks}`);
// let updateMarks = marks.filter((mark) => {
//   return mark != minMarks;
// });
// console.log(`update marks:${updateMarks}`);
// updateMarks.push(90);
// console.log(`final marks:${updateMarks}`);
// updateMarks.sort((a, b) => {
//   return a - b;
// });
// let average =
//   updateMarks.reduce((sum, mark) => sum + mark, 0) / updateMarks.length;
// console.log(`average marks:${Math.round(average)}`);
// updateMarks.splice(2, 0, Math.round(average));
// console.log(`final result :${updateMarks}`);

// //////////////////////////

// let marks = [75, 82, 90, 65, 88];
// let minmarks = Math.min(...marks);
// let updateMarks = marks.filter((mark) => {
//   return mark !== minmarks;
// });

// updateMarks.push(95, 72, 84);

// let maxMarks = Math.max(...marks);
// console.log(maxMarks);

// let average =
//   updateMarks.reduce((sum, mark) => {
//     return sum + mark;
//   }) / updateMarks.length;
// console.log(updateMarks);

// let maxIndex = updateMarks.indexOf(maxMarks);
// console.log(maxIndex);
// updateMarks.splice(maxIndex + 1, 0, Math.round(average));
// console.log(updateMarks);
// updateMarks.sort((a, b) => {
//   return a - b;
// });

// sort()//////////

// let prices = [500, 1000, 50, 200, 150];
// let ascending = [...prices].sort((a, b) => {
//   return a - b;
// });

// console.log(ascending);

// let descending = [...prices].sort((a, b) => {
//   return b - a;
// });
// console.log(descending);
// console.log(prices);

// /////////////////////////

// let marks = [85, 92, 78, 95, 88];
// let ascending = [...marks].sort((a, b) => a - b);
// console.log(ascending);
// let descending = [...marks].sort((a, b) => b - a);
// console.log(descending);
// console.log(marks);

// ///////////

// let student = [
//   { name: "usama", marks: 85 },
//   { name: "misbah", marks: 92 },
//   { name: "haseeb", marks: 78 },
// ];

// let acsending = [...student].sort((a, b) => a.marks - b.marks);
// console.log(acsending);

// let descending = [...student].sort((a, b) => b.marks - a.marks);
// console.log(descending);
// console.log(student);

// ///////

// let name = ["usama", "misbah", "haseeb", "jameel"];
// let user = [...name].sort((a, b) =>
//   a.toLowerCase().localeCompare(b.toLowerCase())
// );
// console.log(user);
// console.log(name);

// //////////////

// let result1 = "banana".localeCompare("apple");
// console.log(result1);
// let result2 = "banana".localeCompare("banana");
// console.log(result2);

// let result3 = "apple".localeCompare("banana");
// console.log(result3);

// /////////////////////////

// let students = ["زید", "Ali", "ahmed", "Fatima", "بلال"];
// students.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
// // students.sort();
// console.log(students);

/////////////////

// let product = ["Laptop", "mouse", "Keyboard", "Moniter"];
// product.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
// console.log(product);
// ///
// let data = ["file10.txt", "file4.txt", "file1.txt"];
// data.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
// console.log(data);
// ///////////////

// let sentence = "i love javaScript";
// let result = sentence.split(" ").reverse().join(" ");
// console.log(result);
// console.log(sentence);

// let number = [5, 12, 8, 3, 10];
// let sortedNumber = [...number].sort((a, b) => a - b);
// console.log(sortedNumber);
// let reverseNumber = [...sortedNumber].reverse();
// console.log(reverseNumber);

// ////////////////

// let book = {
//   title: "javascript",
//   price: 500,
//   show: function () {
//     console.log(`Title : ${this.title} and price :${this.price} `);
//   },
// };
// // let getBook = book.show;// dont use () if use erreo getBook is not a function if no ()use undefine Title : undefined and price :undefined
// let getBook = book.show.bind(book); // bind(object name)
// getBook();

// let mobile = {
//   brand: "samsung",
//   display: function () {
//     console.log(`brand:${this.brand}`);
//   },
// };
// let getMobile = mobile.display.bind(mobile);
// getMobile();

// ////////1. Basic Operations//////
// let number = [5, 3, 8, 1, 9];
// let sortedNumber = [...number].sort((a, b) => a - b);
// number.pop();
// number.push(7);
// number.reverse();
// console.log(number);

// //////2. Sum aur Average///////

let num = [10, 20, 30, 40, 50];
// let sum = num.reduce((acc, curr) => acc + curr, 0);
// let average = sum / num.length;
// console.log(sum);
// console.log(average);
// let sum2 = num
//   .filter((number) => number > 30)
//   .reduce((acc, curr) => acc + curr, 0);
// console.log(sum2);

// let sum2 = 0;
// for (let i = 0; i < num.length; i++) {
//   if (num[i] > 30) {
//     sum2 += num[i];
//   }
// }
// console.log(sum2);

// let sum3 = 0;
// num.forEach((number) => {
//   if (number > 30) {
//     sum3 += number;
//   }
// });
// console.log(sum3);

// ///////////// Find Operations/////

// let Students = ["Ali", "Ahmed", "Sara", "Fatima"];
// let findName = Students.find((name) => name.toLowerCase() === "sara");
// console.log(findName);
// let char = Students.filter((name) => name.length === 4);
// let char = Students.find((name) => name.length === 4);
// let char = [];
// for (let i = 0; i < Students.length; i++) {
//   if (Students[i].length === 4) {
//     char.push(Students[i]);
//   }
// }
// console.log(char);

// let char = [];
// Students.forEach((name) => {
//   if (name.length === 4) {
//     char.push(name);
//   }
// });
// console.log(char);

// / Sabse lamba name find karein
// .reduce  sub sy efficient hai kyunki yeh single pass mein kaam complete karta hai.
// let longeststr = Students.reduce((long, curr) => {
//   return long.length > curr.length ? long : curr;
// });
// console.log(longeststr);

// let sortBylength = Students.sort((a, b) => {
//   return b.length - a.length;
// });
// let longstr = sortBylength[0];
// console.log(longstr);

// ////////////

// let student = {
//   name: "ali",
//   age: 20,
//   subject: ["math", "science"],
// };
// student.subject.push("english");
// student.age = 21;
// console.log(student);
// console.log(student.name);
// console.log(student.age);
// console.log(student.subject);

// let product = [
//   { name: "laptop", price: 50000, inStock: true },
//   { name: "mouse", price: 1000, inStock: false },
//   { name: "keyboard", price: 25000, inStock: true },
// ];
// let sum = product.reduce((total, product) => total + product.price, 0);
// console.log(sum);

// let chack = product.filter((product) => product.inStock === true);
// console.log(chack);

// ////6. Array of Objects

// let student = [
//   { name: "ali", marks: 85 },
//   { name: "Ahmed", marks: 72 },
//   { name: "sara", marks: 90 },
// ];

// let maxMarks = Math.max(...student.map((student) => student.marks));
// console.log(maxMarks);

// let maxMarks = student.reduce((acc, curr) => {
//   return acc.marks > curr.marks ? acc : curr;
// });
// console.log(maxMarks.marks);
// let marks = student.reduce((total, student) => total + student.marks, 0);
// let average = marks / student.length;
// console.log(average);
// let studentName = student.map((student) => student.name);

// console.log(studentName);

// let findstudent = student.filter((student) => student.marks > 80);
// console.log(findstudent);

// let findsmarkstudent = student.reduce((max, student) =>
//   student.marks > max.marks ? student : max
// );
// console.log(findsmarkstudent);

// Shopping cart array of objects

// let cart = [
//   { item: "shirt", price: 1500, quantity: 3 },
//   { item: "shoes", price: 3000, quantity: 1 },
//   { item: "watch", price: 2000, quantity: 1 },
// ];

// let itam = cart.item;
// console.log(itam);
// // let sum = cart.reduce((total, product) => total + product.price, 0);
// // console.log(sum);

// let higestprice = cart.reduce((max, product) =>
//   max.price < product.price ? product : max
// );
// console.log(higestprice);
// let discountprice = cart.filter((cart) => cart.quantity > 2);
// discountprice.forEach((product) => {
//   product.discount = product.price * 0.1;
//   product.finalPrice = product.price * 0.9;
// });
// console.log(discountprice);

// ////////// Advanced Operationsj b

// let data = [5, 2, 8, 1, 9, 3, 7, 4, 6];

// let even = data.filter((even) => even % 2 === 0);
// console.log(even);
// let square = data.map((num) => num * num);
// console.log(square);

// function isPrime(num) {
//   //  1 se chota number prime nahi hota
//   if (num <= 1) return false;
//   //  chack 2or 3
//   if (num <= 3) return true;
//   //  Even numbers (2 ke alawa) prime nahi hote
//   if (num % 2 === 0) return false;
//   // 3 se divisible numbers prime nahi hote
//   if (num % 3 === 0) return false;

//   for (let i = 5; i * i < num; i += 6) {
//     if (num % 1 === 0 || num % (i + 2) === 0) {
//     }
//   }
//   return true;
// }
// let primenum = data.filter((num) => isPrime(num));
// console.log(primenum);

// let library = {
//   name: "City Library",
//   books: [
//     { title: "JavaScript Guide", author: "Ali", pages: 300 },
//     { title: "Python Basics", author: "Ahmed", pages: 250 },
//     { title: "Web Development", author: "Sara", pages: 400 },
//   ],
// };
// library.books.push({
//   title: "data enginering",
//   author: "usama",
//   pages: 200,
// });

// let totalpages = library.books.reduce((acc, curr) => acc + curr.pages, 0);

// console.log(totalpages);

// function findbook(authorName) {
//   return library.books.filter((book) => book.author === authorName);
// }
// let sarabook = findbook("Sara");
// let alibook = findbook("Ali");
// let ahmedbook = findbook("Ahmed");
// let usamabook = findbook("usama");
// console.log(sarabook);
// console.log(alibook);
// console.log(ahmedbook);
// console.log(usamabook);

// console.log(library.books);

// Object.keys()////////

// let student = {
//   name: "usama",
//   age: 24,
//   city: "karachi",
// };

// let key = Object.keys(student);
// console.log(key);

// let emptyobj = {};
// let emptykey = Object.keys(emptyobj);
// console.log(emptykey); ///output empty array[]

// let fruits = ["apple", "banana", "mango"];
// let arrobj = Object.keys(fruits);
// console.log(arrobj);////[0,1,2] array indices

//Object ki Properties Count Karna

// let car = {
//   modal: "toyota",
//   brand: "corolla",
//   year: 2020,
//   color: "red",
// };

// let propertycount = Object.keys(car).length;
// console.log(propertycount);

// ////////Loop Through Object Properties

// let person = {
//   name: "usama",
//   age: 24,
//   profession: "developer",
// };

// Object.keys(person).forEach((key) => {
//   console.log(`${key}:${person[key]}`);
// });

// for (key of Object.keys(person)) {
//   console.log(`${key}:${person[key]}`);
// }

// //Check if Object Empty Hai

// let obj1 = {};
// let obj2 = { name: "usama", age: 24 };

// console.log(Object.keys(obj1).length === 0);
// console.log(Object.keys(obj2).length === 0);

//  Object ki Values Extract Karna

// let student = {
//   name: "usama",
//   age: 24,
//   grade: "A",
// };

// let keys = Object.keys(student);
// console.log(keys);
// let values = keys.map((val) => student[val]);
// console.log(values);

// let value = [];
// keys.forEach((key) => value.push(student[key]));
// console.log(value);

////Advanced Examples:
// Nested Objects

// let compny = {
//   name: "tech",
//   address: {
//     city: "karachi",
//     country: "pakistan",
//   },
//   employees: 50,
// };
// let keys = Object.keys(compny);
// console.log(keys);
//  Sirf top-level keys, nested keys nahi

// : Object with Methods

// let calculator = {
//   add: function (a, b) {
//     return console.log(a + b);
//   },
//   multiply: function (a, b) {
//     return console.log(a * b);
//   },
//   pi: 3.14,
// };
// calculator.add(2, 4);
// calculator.multiply(2, 4);

// let keys = Object.keys(calculator);
// console.log(keys);

// //Symbol Properties

// let id = Symbol("id");
// let user = {
//   name: "usama",
//   [id]: 1234,
// };
// let keys = Object.keys(user);
// console.log(keys);

// form validation

// let formData = {
//   name: "usama",

//   email: "",
//   password: "khanzada",
// };

// let keys = Object.keys(formData).filter((key) => !formData[key]);

// console.log(keys);

// ///Database Result Process Karna

// let dataBaseResult = {
//   id: 1,
//   name: "product A",
//   price: 1000,
//   instock: true,
// };

// let resultdata = ["name", "price"];

// let filterdata = {};

// Object.keys(dataBaseResult)
//   .filter((key) => resultdata.includes(key))
//   .forEach((key) => {
//     filterdata[key] = dataBaseResult[key];
//   });
// console.log(filterdata);

// for (key of Object.keys(dataBaseResult)) {
//   if (resultdata.includes(key)) {
//     filterdata[key] = dataBaseResult[key];
//   }
// }
// console.log(filterdata);

// //Configuration Objects ////
// let config = {
//   theme: "dark",
//   language: "ur",
//   notifications: true,
//   fontSize: 16,
// };
// // User preferences show karna

// Object.keys(config).forEach((seting) =>
//   console.log(`${seting}:${config[seting]}`)
// );

// Non-enumerable Properties

// let car = {
//   brand: "toyota",
//   modal: "corolla",
// };

// Object.defineProperty(car, "secratcode", {
//   value: "xy1234z",
//   enumerable: false,
// });

// console.log(car); // out put all properties

// let key = Object.keys(car);
// console.log(key); //['brand', 'modal']//just two properties

// for (let key in car) {
//   console.log(key);//['brand', 'modal']//just two properties
// }

// ////object.values(obj)

// let person = {
//   name: "usama",
//   age: 25,
//   course: "javascript",
// };
// let value = Object.values(person);
// console.log(value);

// let studentmarks = {
//   math: 80,
//   english: 94,
//   urdu: 78,
//   OOPs: 86,
// };

// let sum = Object.values(studentmarks).reduce((total, mark) => {
//   return total + mark;
// });
// console.log(sum);

//
// let car = {
//   color: "black",
//   brand: "civic",
// };

// for (let val of Object.values(car)) {
//   console.log(val);
// }

// let setting = {
//   darkmode: true,
//   notification: false,
// };
// let chack = Object.values(setting).every(Boolean);
// console.log(chack);

// array or string pr use

// console.log(Object.values("usama"));
//   Object.values([1, 2, 3, 4, 5, 6]);

// object.entries(obj)

//

// let output = Object.entries(student);
// console.log(output);

// for (let [key, values] of Object.entries(student)) {
//   console.log(`${key}: value :${values}`);
// }

// object ko map  m convert karna

// let map = new Map(Object.entries(student));

// console.log(map);

// let number = { a: 1, b: 2, c: 3, d: 4, e: 5 };

// let doubalnum = Object.entries(number).map(([Key, value]) => [Key, value * 2]);
// console.log(doubalnum);

// let newobj = Object.fromEntries(doubalnum);
// console.log(newobj);

// let filterStudent = Object.entries(student).filter(
//   ([Key, values]) => Key !== "age"
// );
// let filterobject = Object.fromEntries(filterStudent);
// console.log(filterobject);

// MAP()

// let mymap = new Map([
//   ["name", "usama"],
//   ["age", 24],
//   [1234, "password"],
// ]);

// console.log(mymap);

// let mapobject = Object.fromEntries(mymap);
// console.log(mapobject);

// let setmap = mymap.set("city", "karachi");
// console.log(mymap);

// let getmap = mymap.get("name");
// console.log(getmap);

// let hasmap = mymap.has(1234);
// console.log(hasmap);

// let deletmap = mymap.delete("age");
// console.log(deletmap);

// let mapclear = setmap.clear();
// console.log(mapclear);
// let mapsize = console.log(mymap.size);

//   for (let [key, value] of mymap) {
//     console.log(`key${key} : value ${value}`);
//   }

// mymap.forEach((value, key) => console.log(`key${key} : value ${value}`));

// let uniquemap = new Map();

// let user = { id: 1 };
// uniquemap.set(user, "user Data");

// let fun = function () {
//   console.log("hello");
// };
// uniquemap.set(fun, "function data");
// console.log(uniquemap);

// let uniqueobject = Object.fromEntries(uniquemap);
// console.log(uniqueobject);

// console.log(uniquemap.get(user));
// console.log(uniquemap.get(fun));

///////////////////////////
// let cart = new Map();
// cart.set("apple", 50);
// cart.set("mango", 80);

// cart.set("apple", cart.get("apple") + 10);
// let totel = 0;
// for (let [item, price] of cart) {
//   totel += price;
//   console.log(`item${item}, and price is ${[price]}`);
// }
// console.log(totel);
// console.log(cart);

// let usersessions = new Map();

// usersessions.set("user1234", {
//   loginTime: new Date(),
//   lastActivit: new Date(),
// });

// if (usersessions.has("user1234")) {
//   console.log("user is active");
// }

// // usersessions.delete("user134");
// console.log(usersessions);

// //nested object

// let student = {
//   name: "usama",
//   age: 24,
//   address: {
//     city: "karachi",
//     country: "pakistan",
//     postal: {
//       code: 75500,
//       area: "gulshan",
//     },
//   },
//   subject: ["Math", "English"],
// };
// console.log(student.address);

// Dynamic nested access
// let property = "city";
// console.log(student.address[property]);
// student.name = "Ali";
// student.address.city = "lahore";
// student.address.postal.code = 54000;

// add new properties in nested object
// student.address.street = "main road";
// student.address.postal.block = "Block 16";

// let add nested object
// student.address.postal.flat = {
//   appartment: " A block",
//   flatNo: "21A",
// };

// console.log(student["address"]["postal"]["flat"]);
// console.log(student);

// for (key in student) {
//   if (typeof student[key] === "object" && student[key] !== null) {
//     console.log(`key : ${key}  value:${student[key]}`);

//     for (let nestedkey in student[key]) {
//       console.log(
//         `nestedkey : ${nestedkey} value is ${student[key][nestedkey]}`
//       );
//     }
//   } else {
//     console.log(`${key} ${student[key]}`);
//   }
// }

// for (let key in student) {
//   if (typeof student[key] === "object" && student[key] !== null) {
//     // console.log(`key= ${key}  value = ${student[key]}`);
//     for (let nestedkey in student[key]) {
//       console.log(
//         `nestedkey= ${nestedkey}  value = ${student[key][nestedkey]}`
//       );
//     }
//   }
// }
// ///2. Recursive Function Se (Advanced):

// function printnested(obj, indent = "") {
//   for (let key in obj) {
//     if (typeof obj[key] === "object" && obj[key] !== null) {
//       console.log(`indent ; ${indent} ; key  ${key}`);
//       printnested(obj[key], indent + "");
//     } else {
//       console.log(`${indent} ${key}:${obj[key]}`);
//     }
//   }
// }

// printnested(student);

// function printnested(obj, indent = "") {
//   for (let key in obj) {
//     if (typeof obj[key] === "object" && obj[key] !== null) {
//       console.log(`indent : ${indent}and key ${key}`);
//       printnested(obj[key], indent + "");
//     } else {
//       console.log(`${indent},${key};${obj[key]}`);
//     }
//   }
// }
// printnested(student);

// Optional Chaining (?.):
// Error se bachne ke liye:

// console.log(student?.address?.postal?.block);

// Destructuring Nested Objects:

// const {
//   address: {
//     postal: { block },
//   },
// } = student;
// console.log(block);

//Spread Operator Se Copy Karna
// let studentcopy = { ...student };
// console.log(studentcopy);

// let deepcopy = JSON.parse(JSON.stringify(student));
// console.log(deepcopy);

let company = {
  name: "tech company",
  employees: {
    developer: {
      count: 5,
      skilles: ["javascript", "Python"],
    },
    dsigner: {
      count: 8,
      tools: ["figma", "pothoshop"],
    },
  },
};

// let firstSkill = company?.employees?.developer?.skilles[0];
// console.log(firstSkill);

// let updatecount = (company.employees.dsigner.count += 2);
// console.log(updatecount);

// let updatetool = company.employees.dsigner.tools.push("Illustrator ");

// console.log(company);

// /////////Get dynamic nested object value ///

// function getnestedvalue(obj, path) {
//   return path.split(".").reduce((acc, key) => acc?.[key], obj);
// }
// console.log(getnestedvalue(company, "employees.dsigner.count"));

////////////deep merge nested values//////\

// let target = {
//   a: 1,
//   b: {
//     x: 10,
//   },
// };
// let source = {
//   b: { y: 20 },
//   c: 3,
// };

// let deepmerge = { ...target, ...source };
// console.log(deepmerge);
// output deepmerge={
// a:1,
// b:{y:20}   // x ko overlape krdy ga just y :20 aaye ga ,
// c:3,
//   }
//
//

// function deepmerge(target, source) {
//   for (let key in source) {
//     if (source[key] instanceof Object && target[key] instanceof Object) {
//       deepmerge(target[key], source[key]);
//     } else {
//       deepmerge((target[key] = source[key]));
//     }
//   }
//   return target;
// }

// let merged = deepmerge(target, source);
// console.log(merged);

let origanl = {
  name: "usama",
  address: {
    city: "karachi",
    country: "pakistan",
  },
};

// // let shallowcopy = { ...origanl };

// let shallowcopy = Object.assign({}, origanl);
// shallowcopy.name = "ali";
// shallowcopy.address.city = "lahore";
// console.log(shallowcopy);
// console.log(origanl);

// //////////deepcopy

// let deepcopy = JSON.parse(JSON.stringify(origanl));
// deepcopy.name = "ali";
// deepcopy.address.city = "lahore";
// console.log(deepcopy);
// console.log(origanl);

// with lodash laybariy  (_)

// let deepcopy = _.cloneDeep(origanl);
// deepcopy.name = "ali";
// deepcopy.address.city = "lahore";
// console.log(deepcopy);
// console.log(origanl);

// let obj = {
//   date: new Date(),
//   fun: function () {},
//   arrowFun: () => {},
//   undefined: undefined,
//   infinity: Infinity,
//   nan: NaN,
// };

// let deepcopy = JSON.parse(JSON.stringify(obj));

// let deepcopy = _.cloneDeep(obj);
// console.log(obj);
// console.log(deepcopy);
// console.log(origanl);
// function deepcopy(obj) {
//   if (obj === null || typeof obj !== "object") return obj;
//   if (obj instanceof Date) return new Date(obj);
//   if (Array.isArray(obj)) return obj.map((item) => deepcopy(item));
//   let copy = {};
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       copy[key] = deepcopy(obj[key]);
//     }
//   }
//   return copy;
// }

// let deep = deepcopy(origanl);
// deep.name = "ali";
// deep.address.city = "lahore";
// console.log(deep);
// console.log(origanl);

// //////element styling//////

// let heading = document.getElementById("myheading");

// / direct inline styling

// heading.style.color = "red";
// heading.style.backgroundColor = "yellow";
// heading.style.padding = "10px";
// heading.style.border = "1px solid black";
// heading.style.fontSize = "20px";

// /multipal styles of css taxt

// heading.style.cssText = `  color:blue;
// background-color: pink;
// padding: 50px;
// border:1px solid green;
// font-size: 50px;`;

// heading.style.cssText = `color:green; background-color: black;`;

//  setAttribute se style add karna

// heading.setAttribute(
//   "style",
//   "color:green; background-color: black; font-size:30px;"
// );

// let button = document.getElementById("btn");

// add class
// button.classList.add("btn-primary");
// button.classList.add("active");

// remove class
// button.classList.remove("inactive");

// /class toggle  karo (hai to remove karo ager nahi h to add karo)
// button.classList.toggle("hidden");

// if (button.classList.contains("active")) {
//   console.log("active class");
// } else {
//   console.log("no class ");
// }
// style add karo on css file

// let style = window.getComputedStyle(button);
// console.log(style.backgroundColor);
// console.log(style.color);
// console.log(style.padding);

// Dynamic Styling with Variables

// let root = document.documentElement;
// root.style.setProperty("--main-color", "green");
// root.style.setProperty("--padding", "60px");

// Specific element ke variables change karo

// let button = document.getElementById("btn");
// // button.classList.add("button-green");
// console.log(button);
// button.style.setProperty("--button-color", "green");
// console.log("Variable value:", button.style.getPropertyValue("--button-color"));
// let computedstyle = window.getComputedStyle(button);
// console.log(`final color${computedstyle.color}`);
// button.style.setProperty("--main-color", "green");

// function styleBox() {
//   let box = document.getElementById("mybox");

//   box.style.color = "white";
//   box.style.fontWeight = "bold";

//   box.classList.toggle("highlight");
//   box.classList.toggle("rounded");

//   document.documentElement.style.setProperty("--main-color", "purple");
// }

// /. Element Create Karna (Creation)
// let newdiv = document.createElement("div");
// let newbutton = document.createElement("button");
// let newpera = document.createElement("p");

// // Content add karein
// newdiv.textContent = "hello world";
// newbutton.textContent = "click me";
// newpera.textContent = "usama khanzada";
// // Attributes add karein

// newbutton.id = "btn";
// newbutton.className = "btn-primary";

// newdiv.id = "div-id";
// newdiv.className = "div-primary";
// // newdiv.classList.add("div-priamry");

// newpera.id = "pera-id";
// newpera.className = "pera-primary";

// // /// Style add karein

// newdiv.style.color = "green";
// newdiv.style.backgroundColor = "yellow";

// newbutton.style.color = "green";
// newbutton.style.backgroundColor = "yellow";

// newpera.style.color = "green";
// newpera.style.backgroundColor = "yellow";
// // body m aad karny k leyea
// document.body.appendChild(newdiv);
// document.body.appendChild(newbutton);
// document.body.appendChild(newpera);

// console.log(newdiv);
// console.log(newbutton);
// console.log(newpera);

// let container = document.getElementById("container");
// container.innerHTML = `<div class ="new-item">new contant</div>`;
// document.body.appendChild(container);
// console.log(container);

// /appendChild() - End mein Add

// let parent = document.getElementById("parent");
// let newelement = document.createElement("div");
// newelement.taxtContent = "im am here";
// parent   .appendChild(newelement);

// console.log(newelement);

// /////////insertBefore() - Specific Position par

// let parent = document.getElementById("parent");
// let referenceelement = document.getElementById("existing-element");
// let newelement = document.createElement("div");
// newelement.textContent = "usama khanzada";
// parent.insertBefore(newelement, referenceelement);
// console.log(parent);

// /Method 3: insertAdjacentElement() - Flexible Positioning

// let reference = document.getElementById("existing-element");
// let newelement = document.createElement("div");
// newelement.textContent = "jameel khanzada";
// reference.insertAdjacentElement("beforebegin", newelement);// before and outside //start sy phly
// reference.insertAdjacentElement("afterbegin", newelement);// befor and inside // start k bad
// reference.insertAdjacentElement("afterend", newelement); //after and outside // end k bad
// reference.insertAdjacentElement("beforeend", newelement);  //after and inside // end sy phly

// Method 1: remove() - Direct Remove

// let newelement = document.getElementById("existing-element");
// newelement.remove();

// Method 2: removeChild() - Parent se Remove

// let parent = document.getElementById("parent");
// let childtoRemove = document.getElementById("child");
// console.log(parent);
// parent.removeChild(childtoRemove);
// console.dir(parent);

// Method 3: innerHTML Clear Karna

// let container = document.getElementById("container");
// container.innerHTML = "";

// Example 1: Dynamic List Banayein

// let list = document.getElementById("mylist");
// let items = ["banana", "apple", "mango"];
// // List items create karein
// items.forEach((item) => {
//   let li = document.createElement("li");
//   li.textContent = item;
//   li.className = "list-item";
//   list.appendChild(li);
// });

// // Remove button add karein

// let removebtn = document.createElement("button");
// removebtn.textContent = "Remove last item";
// removebtn.onclick = function () {
//   if (list.lastChild) {
//     list.removeChild(list.lastChild);
//   }
// };
// document.body.appendChild(removebtn);

// Example 2: Modal Create Karna

// function createmodal() {
//   let modal = document.createElement("div");
//   modal.id = "mymodal";
//   modal.style.position = "fixed";
//   modal.style.top = "50%";
//   modal.style.left = "50%";
//   modal.style.transform = "translate(-50%, -50%)";
//   modal.style.padding = "20px";
//   modal.style.backgroundColor = "white";
//   modal.style.border = "2px solid #000";

//   // Modal content
//   modal.innerHTML = `<h2>HELLO WORLD</h2>
//  <p>This is a dynamically created modal</P>
//  <button onclick="closemodal()">close</button>
//  `;
//   document.body.appendChild(modal);
// }
// function closemodal() {
//   let modal = document.getElementById("mymodal");

//   if (modal) {
//     modal.remove();
//   }
// }

// createmodal();

// let form = document.createElement("form");
// form.id = "dynamicForm";

// let input = document.createElement("input");
// input.type = "text";
// input.placeholder = "Enter You Name";
// input.name = "userName";

// let submitbutton = document.createElement("button");
// submitbutton.type = "submit";
// submitbutton.textContent = "Submit";

// form.appendChild(input);
// form.appendChild(submitbutton);

// document.body.appendChild(form);

// form.onsubmit = function (e) {
//   e.preventDefault();
//   alert(`form submit ` + input.value);
// };

// function createElement() {
//   let div = document.createElement("div");
//   div.taxtContent = "hello World";

//   const clickHandler = function () {
//     console.log("Element Clicked");
//   };
//   div.addEventListener("click", clickHandler);

//   div.cleanup = function () {
//     this.removeEventListener("click", clickHandler);
//   };

//   return div;
// }
// let element = createElement();
// document.body.appendChild(element);
// element.cleanup();
// element.remove();

// let button = document.getElementById("btn");

// let creatediv = function () {
//   let div = document.createElement("div");
//   div.textContent = "hellow World";
//   document.body.appendChild(div);

//   let removediv = function () {
//     if (div) {
//       div.remove();
//     }
//   };
//   setTimeout(removediv, 3000);
// };
// button.addEventListener("click", creatediv);
//

//  another way

// let button = document.getElementById("btn");
// button.style.padding = "10px";
// button.style.backgroundColor = "lightblue";
// button.textContent = " Create Div";

// let createdive = function () {
//   let div = document.createElement("div");
//   div.textContent = " Hello World";
//   div.style.padding = "20px";
//   div.style.backgroundColor = "yellow";
//   div.style.margin = "10px";
//   div.style.border = "1px solid black";

//   let removebtn = document.createElement("button");
//   removebtn.textContent = "Remove me";
//   removebtn.style.marginLeft = "10px";

//   removebtn.onclick = function () {
//     div.remove();
//     removebtn.remove();
//   };

//   div.appendChild(removebtn);

//   document.body.appendChild(div);
// };

// button.addEventListener("click", createdive);

// Question 2: Dynamic List

// let form = document.createElement("form");
// form.id = "dynamicform";

// let input = document.createElement("input");
// input.type = "text";
// input.placeholder = "Enter a item";
// input.name = "itemname";

// let addbutton = document.createElement("button");
// addbutton.textContent = "Add Item";
// addbutton.type = "submit";
// addbutton.style.marginLeft = "10px";

// document.body.appendChild(form);

// form.appendChild(input);
// form.appendChild(addbutton);

// let listcontainer = document.createElement("ul");
// listcontainer.style.marginTop = "20px";
// listcontainer.style.padding = "0";
// listcontainer.style.listStyle = "none";
// document.body.appendChild(listcontainer);
// form.onsubmit = function (e) {
//   e.preventDefault();
//   if (input.value.trim() === "") {
//     alert("please Enter a valid item");
//     return;
//   }

//   let li = document.createElement("li");
//   li.textContent = input.value;
//   li.style.padding = "8px";
//   li.style.margin = "5px 0";
//   li.style.backgroundColor = "#f0f0f0";
//   li.style.border = "1px solid #ccc";
//   li.style.borderRadius = "4px";
//   li.style.display = "flex";
//   li.style.justifyContent = "space-between";
//   li.style.alignItems = "center";

//   let removebutton = document.createElement("button");
//   removebutton.textContent = "Remove";
//   removebutton.style.marginLeft = "10px";
//   removebutton.style.padding = "5px 10px";
//   removebutton.style.backgroundColor = "#ff4444";
//   removebutton.style.color = "white";
//   removebutton.style.border = "none";
//   removebutton.style.borderRadius = "3px";
//   removebutton.style.cursor = "pointer";
//   removebutton.onclick = function () {
//     if (li) {
//       li.remove();
//     }
//   };
//   li.appendChild(removebutton);
//   listcontainer.appendChild(li);
//   // Input clear kardo

//   input.value = "";
//   input.focus();
// };

// Question 3: Toggle Element

// let button = document.createElement("button");
// button.textContent = "show Massage";

// let isvisible = false;
// let massagebox = null;

// function togglemassage() {
//   if (isvisible) {
//     massagebox.remove();
//     button.textContent = "show massage";
//     isvisible = false;
//     massagebox = null;
//   } else {
//     massagebox = document.createElement("div");
//     massagebox.textContent = "hello World";

//     massagebox.textContent = "Usama Khanzada JavaScript Developer";
//     massagebox.innerHTML += "<br><p>You are Welcome</p>";
//     massagebox.style.padding = "20px";
//     massagebox.style.margin = "10px";
//     massagebox.style.backgroundColor = "lightyellow";
//     massagebox.style.border = "2px solid orange";
//     massagebox.style.borderRadius = "5px";

//     document.body.appendChild(massagebox);

//     button.textContent = "hide Massage";
//     isvisible = true;
//   }
// }
// document.body.appendChild(button);
// button.addEventListener("click", togglemassage);

// Question 4: Multiple Elements
// let boxCount = 0;
// let button = document.createElement("button");
// button.textContent = "Create Box";
// button.style.padding = "10px 20px";
// button.style.margin = "10px";
// button.style.backgroundColor = "#4CAF50";
// button.style.color = "white";
// button.style.border = "none";
// button.style.borderRadius = "5px";
// button.style.cursor = "pointer";

// function createbox() {
//   if (boxCount >= 5) {
//     alert("Maximum 5 boxes can be created");
//     return;
//   }
//   boxCount++;
//   let box = document.createElement("box");
//   box.textContent = `box${boxCount}`;
//   box.style.padding = "20px";
//   box.style.margin = "10px";
//   box.style.backgroundColor = "lightblue";
//   box.style.border = "2px solid blue";
//   box.style.borderRadius = "5px";
//   box.style.display = "inline-block";
//   document.body.appendChild(box);
// }
// document.body.appendChild(button);
// button.addEventListener("click", createbox);

// Question 5: Timer Element

// let button = document.createElement("button");
// button.textContent = "Timer Start";

// let timerDisplay = document.createElement("div");
// timerDisplay.style.marginTop = "20px";

// function startTimer() {
//   let timerStert = document.createElement("div");
//   startTimer.textContent = "time left 5seconds";
//   startTimer.style.padding = "20px";
//   document.body.appendChild(timerStert);
// }

// document.body.appendChild(button);
// document.body.appendChild(timerDisplay);

// let isTimerRunning = false;
// function startTimer() {
//   if (isTimerRunning) return;
//   isTimerRunning = true;
//   let count = 5;

//   let Interval = setInterval(function () {
//     count--;
//     timerDisplay.textContent = `Timer: ${count} seconds`;
//     if (count === 0) {
//       clearInterval(Interval);
//       timerDisplay.textContent = "";
//       isTimerRunning = false;
//     }
//   }, 1000);
// }
// button.addEventListener("click", startTimer);

// another way

// let button = document.createElement("button");
// button.textContent = "start timer";

// let timerDisplay = document.createElement("div");

// let isTimerRunning = false;
// function setTimer() {
//   if (isTimerRunning) return;
//   count = 5;
//   isTimerRunning = true;
//   let Interval = setInterval(() => {
//     count--;
//     timerDisplay.textContent = `timer :${count} seconds`;
//     if (count === 0) {
//       clearInterval(Interval);
//       timerDisplay.textContent = "";
//       isTimerRunning = false;
//     }
//   }, 1000);
// }
// document.body.appendChild(button);
// document.body.appendChild(timerDisplay);
// button.addEventListener("click", setTimer);

// event object

// let button = document.getElementById("btn");
// button.addEventListener("click", function (event) {
//   // console.log(event.target.className);
//   console.log(event.target);
//   console.log(event.altKey);
//   console.log(event.ctrlKey);
//   console.log(event.shiftKey);
// });

// document.body.addEventListener("click", function (event) {
//   console.log(event.clientX);
//   console.log(event.pageX);
//   console.log(event.clientY);
//   console.log(event.pageY);
// });

// document.body.addEventListener("keydown", function (event) {
//   console.log(`key${event.key} and keycode ${event.keyCode}`);
//   console.log(event.altKey);
//   console.log(event.ctrlKey);
//   console.log(event.shiftKey);
// });

// 6. Prevent Default - Default Behavior Rokna

// document.querySelector("a").addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("link is clicked but default behavior is prevented");
// });

// document.body.addEventListener("click", function (event) {
//   console.log("im a body");
// });
// let parent = document.getElementById("parent");
// parent.addEventListener("click", function (event) {
//   console.log(" im a parent");
// });
// let child = document.getElementById("child");
// child.addEventListener("click", function (event) {
//   event.stopPropagation();
//   console.log("im a child");
// });

// document.addEventListener("click", function (event) {
//   console.log("Complete event object:", event);
//   console.log("Some useful properties:");
//   console.log("- type:", event.type);
//   console.log("- target:", event.target);
//   console.log("- currentTarget:", event.currentTarget);
//   console.log("- timestamp:", event.timeStamp);
//   console.log("- bubbles:", event.bubbles);
//   console.log("- cancelable:", event.cancelable);
//   console.log("- defaultPrevented:", event.defaultPrevented);
// });

// let button = document.getElementById("btn");
// let mylink = document.querySelector("a");
// mylink.addEventListener("click", function (event) {
//   if (event.ctrlKey) {
//     console.log("New tab m open hoga");
//   } else if (event.shiftKey) {
//     console.log("New Window m open hoga");
//   } else if (event.type === "click") {
//     event.preventDefault();
//     console.log("link open nahi hua");
//   } else {
//     console.log("invalid");
//   }
// });

// let ClickArea = document.getElementById("ClickArea");
// let customMenu = document.getElementById("customMenu");
// ClickArea.addEventListener("contextmenu", function (event) {
//   event.preventDefault();
//   event.stopPropagation();

//   customMenu.style.top = event.clientY + "px";
//   customMenu.style.left = event.clientX + "px";
//   customMenu.style.display = "block";

//   console.log(event.clientX, event.clientY);
// });

// document.body.addEventListener("click", function () {
//   customMenu.style.display = "none";
// });

// customMenu.querySelectorAll("button").forEach((btn) => {
//   btn.addEventListener("click", function (event) {
//     console.log("Button clicked:", this.textContent);
//     customMenu.style.display = "none";

//     console.log(event.clientX, event.clientY);
//     console.log(event);
//     console.log("clicked");
//   });
// });

// Question 3: Double Click Detection
// let lastClickTime = 0;

// let button = document.getElementById("btn");
// button.addEventListener("click", function (event) {
//   const currentTime = new Date().getTime();
//   if (currentTime - lastClickTime < 500) {
//     console.log("double Click ");
//     lastClickTime = 0;
//   } else {
//     console.log("single click");
//     lastClickTime = currentTime;
//   }
//   console.log(event.timeStamp);
// });

// Question 4: Drag and Drop

// let starX, startY, endX, endY;
// let isDraging = false;
// let box = document.getElementById("dragable");
// dragable.addEventListener("mousedown", function (event) {
//   isDraging = true;
//   starX = event.clientX;
//   startY = event.clientY;
//   console.log(starX, startY);
// });

// document.addEventListener("mouseup", function (event) {
//   if (isDraging) {
//     endX = event.clientX;
//     endY = event.clientY;
//   }
//   console.log(endX, endY);
//   calculateMove();
//   isDraging = false;
// });

// function calculateMove() {
//   let deltaX = endX - starX;
//   let deltaY = endY - startY;
//   let distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

//   console.log(`moved : ${distance.toFixed(2)}px`);
// }

//  Keyboard Shortcut Handler

// document.addEventListener("keydown", function (event) {
//   event.preventDefault();
//   if (event.ctrlKey && event.key === "s") {
//     console.log("save shortcut");
//   }

//   if (event.ctrlKey && event.key === "z") {
//     console.log("undo shortcut");
//   }
//   if (event.key === "Escape") {
//     console.log("close dialog");
//   }
// });

// Event Delegation Practice

// let listcontainer = document.getElementById("itemlist");
// listcontainer.addEventListener("click", function (event) {
//   if (event.target.classList.contains("delete")) {
//     let listitem = event.target.parentElement;
//     listitem.remove();
//     console.log("item removed", event.target.closest("li"));
//   }
// });

//  Scroll Direction Detector
// document.body.style.height = "1000px";
// let lastscrollY = window.scrollY;

// window.addEventListener("scroll", function (event) {
//   const currentscrooly = window.scrollY;
//   if (currentscrooly > lastscrollY) {
//     console.log("down scrool");
//   }

//   if (currentscrooly < lastscrollY) {
//     console.log("up scrool");
//   }
//   lastscrollY = currentscrooly;
// });

// console.log("one");
// console.log("two");
// setTimeout(() => {
//   console.log("im m a set time out");
// }, 5000);
// console.log("three");
// call back hell

// function getData(userdata, getnextdata) {
//   setTimeout(() => {
//     console.log("im user data", userdata);
//     if (getnextdata) {
//       console.log("im get next data");
//       getnextdata();
//     }
//   }, 4000);
// }
// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     });
//   });
// });

// let promise = new Promise((resolve, reject) => {
//   console.log("im a promies");
//   resolve("success");
// });
// promise
//   .then((result) => {
//     console.log(result);
//     return promise;
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Custom Event Creator

// 1. PEHLE event listener register karo

// document.addEventListener("userLogin", function (event) {
//   console.log("User login", event.detail);
//   console.log("Username", event.detail.username);
//   console.log(" time", event.detail.timestamp);
// });

//   const loginEvent = new CustomEvent("userLogin", {
//     detail: {
//       username: "usama",
//       timestamp: new Date(),
//     },
//   });

// document.dispatchEvent(loginEvent);

// /////

// let btn = document.getElementById("loginbtn");
// let box = document.getElementById("massagebox");
// // 1. PEHLE event listener register karo
// document.addEventListener("userLogin", function () {
//   console.log("User login", event.detail);
//   console.log("Username", event.detail.username);
//   console.log(" time", event.detail.timestamp);
//     // Massagebox mein data show karo
//   const massage = document.getElementById("massagebox");
//   massage.innerHTML = `
// <h3>login succesfull</h3>
// <p> Username:${event.detail.username}</P>
// <p>time ${event.detail.timestamp}</p>
// `;
// });

// btn.addEventListener("click", function () {
//   // 3. Event create karo
//   const loginEvent = new CustomEvent("userLogin", {
//     detail: {
//       username: "usama",
//       timestamp: new Date(),
//     },
//   });
// });

// document.dispatchEvent(loginEvent);

// Question 9: Form Validation with Events

// let submitbtn = document.getElementById("submit");
// submitbtn.addEventListener("submit  ", function (event) {
//   console.log(event.target);
//   event.preventDefault();
// });

// let form = document.getElementById("logingform");
// form.addEventListener("submit", function (event) {
//   let isvalid = true;

//   // Clear previous errors
//   hideError("username");
//   hideError("email");
//   hideError("password");

//   let username = event.target.querySelector("#username").value;
//   let email = event.target.querySelector("#email").value;
//   let password = event.target.querySelector("#password").value;

//   if (username.length < 5) {
//     showError("username", "userName must be at least 5 character");
//     isvalid = false;
//   }

//   if (!email.includes("@")) {
//     showError("email", "Enter valid Email");
//     isvalid = false;
//   }
//   if (password.length < 8 || /\s+/.test(password)) {
//     showError(
//       "password",
//       "no sombul and password must be at least 8 character"
//     );
//     isvalid = false;
//   }

//   if (!isvalid) {
//     event.preventDefault();
//   } else {
//     event.preventDefault();
//     console.log("Form would be submitted with following data:");
//     console.log("Username:", username);
//     console.log("Email:", email);
//     console.log("Password:", password);
//     console.log("Timestamp:", new Date().toLocaleString());
//     alert("form has been successfully submitted");
//   }
// });
// function showError(fieldid, message) {
//   const errorElement = document.getElementById(fieldid + "Error");
//   if (errorElement) {
//     errorElement.textContent = message;
//     errorElement.style.display = "block";
//   }

//   const inputfield = document.getElementById(fieldid);
//   if (inputfield) {
//     inputfield.classList.add("input-error");
//   }
// }

// function hideError(fieldid) {
//   const errorElement = document.getElementById(fieldid + "Error");
//   if (errorElement) {
//     errorElement.style.display = "none";
//   }

//   const inputfield = document.getElementById(fieldid);
//   if (inputfield) {
//     inputfield.classList.remove("input-error");
//   }
// }

// document.addEventListener("click", function (event) {
//   console.log("click Element :", event.target);
//   console.log("click Class : ", event.target.classList);

//   if (event.target.closest(".deletebtn")) {
//     console.log("click on eidt button");
//     console.log("atcull button: ", event.target.closest(".deletebtn"));
//     console.log("click done");
//     console.log(event.target);
//     console.log(event.currentTarget);
//   }
//   if (event.target.closest(".editbtn")) {
//     console.log("click on eidt button");
//     console.log("atcull button: ", event.target.closest(".editbtn"));
//     console.log("click done");
//     console.log(event.target);
//     console.log(event.currentTarget);
//   }
// });

// document.addEventListener("click", function (event) {
//   if (event.target.classList.contains("delete")) {
//     console.log("click here");
//   }
// });

// bubbling Event

// document.getElementById("grandparent").addEventListener(
//   "click",
//   function (event) {
//     event.stopPropagation();
//     console.log("im a grand parent :", event.target);
//   },
//   true
// );

// document.getElementById("parent").addEventListener(
//   "click",
//   function (event) {
//     console.log("im a parent :", event.target);
//     event.stopPropagation();
//   },
//   true
// );

// document.getElementById("child").addEventListener(
//   "click",
//   function (event) {
//     console.log("im a child :", event.target);
//     event.stopPropagation();
//   },
//   true
// );

// /////todo item list with out event delegation
// function addNewItem() {
//   const li = document.createElement("li");
//   li.innerHTML = `new task <button class="delete">Delete</button>`;
//   document.getElementById("todoList").appendChild(li);

//   li.querySelector(".delete").addEventListener("click", function () {

//     li.remove();
//   });
// }

// /// /////todo item list with event delegation

// document.getElementById("todoList").addEventListener("click", function (event) {
//   if (event.target.classList.contains("delete")) {
//     event.target.closest("li").remove();
//   }
// });

// function addNewItem() {
//   const li = document.createElement("li");
//   li.innerHTML = `new Task<button class ="delete">delete</button> `;
//   document.getElementById("todoList").appendChild(li);
// }

// document.getElementById("parent").addEventListener("click", function (event) {
//   console.log(" eyent target :", event.target);
//   console.log("event current target", event.currentTarget);
// });

// document
//   .getElementById("shopingcart")
//   .addEventListener("click", function (event) {
//     console.log("Clicked element:", event.target);

//     if (event.target.classList.contains("remove-item")) {
//       removefromcart(event.target.dataset.id);
//     }

//     if (event.target.classList.contains("increase-qty")) {
//       increaseQty(event.target.dataset.id);
//     }

//     if (event.target.classList.contains("decrease-qty")) {
//       decreaseQty(event.target.dataset.id);
//     }
//   });

// // remove item function

// function removefromcart(itemid) {
//   const itemElement = document.querySelector(`[data-id="${itemid}"]`);
//   console.log(`[data-id="${itemid}"]`);
//   if (itemElement) {
//     console.log(itemElement);

//     itemElement.remove();
//     console.log(`item ${itemid} delete from cart`);
//   }
// }

// // Increase quantity function
// function increaseQty(itemid) {
//   const itemElement = document.querySelector(`[data-id="${itemid}"]`);
//   console.log(itemElement);

//   console.log(`[data-id="${itemid}"]`);

//   if (itemElement) {
//     const quantityElement = itemElement.querySelector(".quantity");
//     let currquantity = parseInt(quantityElement.textContent);
//     quantityElement.textContent = currquantity + 1;
//   }
// }

// function decreaseQty(itemid) {
//   const itemElement = document.querySelector(`[data-id="${itemid}"]`);
//   console.log(itemElement);

//   console.log(`[data-id="${itemid}"]`);

//   if (itemElement) {
//     const quantityElement = itemElement.querySelector(".quantity");
//     let currquantity = parseInt(quantityElement.textContent);
//     if (currquantity > 1) {
//       quantityElement.textContent = currquantity - 1;
//       console.log(`item ${itemid} quantity  decrease to ${currquantity - 1}`);
//     } else {
//       removefromcart(itemid);
//     }
//   }
// }

// function addnewitem() {
//   const newitemid = Date.now();
//   const cart = document.getElementById("shopingcart");

//   const newitem = document.createElement("div");
//   newitem.className = "cart-item";
//   newitem.setAttribute(`data-id`, newitemid);
//   newitem.innerHTML = `
//         <span class="item-name">New Product ${newitemid}</span>
//         <span class="item-price">$100</span>
//         <button class="increase-qty" data-id="${newitemid}">+</button>
//         <span class="quantity">1</span>
//         <button class="decrease-qty" data-id="${newitemid}">-</button>
//         <button class="remove-item" data-id="${newitemid}">🗑️ Remove</button>
//     `;
//   cart.append(newitem);
//   console.log(`new item ${newitemid} add`);
// }

//

// const child = document.querySelector("p");
// const parent = child.parentElement;
// console.log(parent);

// const element = document.querySelector("span");
// const parentDiv = element.closest(".parent");
// console.log(parentDiv);

// const element = document.querySelector("p");
// const parentpara = element.parentNode;
// console.log(parentpara);

// const parent = document.querySelector(".parent");
// const child = parent.children;
// console.log(child);

// const parent = document.querySelector(".parent");
// const child = parent.childNodes;
// console.log(child);

// const parent = document.querySelector(".parent");
// const firtschild = parent.firstElementChild;
// console.log(firtschild);

// const parent = document.querySelector(".parent");
// const lastchild = parent.lastElementChild;
// console.log(lastchild);

// const sibling = document.querySelector(".second");
// const firstsibling = sibling.nextElementSibling;
// console.log(firstsibling);

// const sibling = document.querySelector("span");
// const firstsibling = sibling.previousElementSibling;
// console.log(firstsibling);

// const sibling = document.querySelector(".second");
// const firstsibling = sibling.previousSibling;
// console.log(firstsibling);

// document
//   .querySelector(".shoping-cart")
//   .addEventListener("click", function (event) {
//     if (event.target.classList.contains("delete-btn")) {
//       const item = event.target.closest(".cart-item");
//       item.style.opacity = "0.5";
//       item.style.transform = "translateX(-20px)";
//       item.style.transition = "all 0.3s ease";

//       setTimeout(() => {
//         item.remove();
//         updatecarttotal();
//       }, 300);
//     }
//   });

// function addnewitem() {
//   const newitem = document.createElement("div");
//   newitem.className = "cart-item";
//   newitem.innerHTML = `<div class="item-detail">
//   <div class="item-name">New product</div>

//     <div class="item-price">$555</div>

//   </div>
//   <button class ="delete-btn">Delete</button>
//   `;

//   const shopingcart = document.querySelector(".shoping-cart");
//   const addbtn = document.querySelector(".additem");
//   shopingcart.insertBefore(newitem, addbtn);
// }

// function updatecarttotal() {
//   const item = document.querySelector(".cart-item");
//   console.log(` cart update .total item ${item}`);
// }

// const element = document.querySelector(".second");
// let prvsibling = [];
// let prv = element.previousElementSibling;

// while (prv) {
//   prvsibling.push(prv);
//   prv = prv.previousElementSibling;
// }

// console.log(prvsibling);

// const nextsibling = [];
// let next = element.nextElementSibling;
// while (next) {
//   nextsibling.push(next);
//   next = next.nextElementSibling;
// }
// console.log(nextsibling);

// const activeitem = document.querySelector(".active");
// let prev = activeitem.previousElementSibling;
// while (prev) {
//   prev.style.opacity = "0.6";
//   prev = prev.previousElementSibling;
// }
// console.log(activeitem);

// const activeItem = document.querySelector(".active");
// let pver = activeItem.previousElementSibling;
// while (pver) {
//   pver.style.opacity = "0.6";
//   pver = pver.previousElementSibling;
// }
// console.log(activeItem);

// const cuurentItem = document.querySelector(".current");
// let prev = cuurentItem.previousElementSibling;
// while (prev) {
// prev.textContent = "✓ " + prev.textContent;
//   prev = prev.previousElementSibling;
// }
// console.log(cuurentItem);

// const select = document.querySelectorAll(".selected");
// select.forEach((btn) => {
//   let prev = btn.previousElementSibling;
//   while (prev) {
//     prev.style.color = "lightblue";
//     prev.style.opacity = "0.6";
//     prev = prev.previousElementSibling;
//   }
//   console.log(btn);
// });

// ///////////////////element Delegation

// const cartContainer = document.getElementById("maincart");
// cartContainer.addEventListener("click", function (event) {
//   let target = event.target;
//   let item = target.closest(".cartitem");
//   if (target.classList.contains("btn-remove")) {
//     item.style.opacity = "0";
//     setTimeout(() => {
//       item.remove();
//     }, 300);
//     updatecarttotal();
//   } else if (target.classList.contains("btn-increase")) {
//     const quantity = item.querySelector(".quantity");
//     quantity.textContent = parseInt(quantity.textContent) + 1;
//     updatecarttotal();
//   } else if (target.classList.contains("btn-decrease")) {
//     const quantity = item.querySelector(".quantity");
//     if (parseInt(quantity.textContent) > 1) {
//       quantity.textContent = parseInt(quantity.textContent) - 1;
//       updatecarttotal();
//     }
//   }
// });

// function addnewitem() {
//   const newItem = document.createElement("div");
//   newItem.className = "cartitem";
//   newItem.setAttribute("data-id", Date.now());
//   newItem.innerHTML = ` <span class="item-name">Iphone</span>
//         <span class="item-price">$999</span>
//         <button class="btn-remove">Remove</button>
//         <button class="btn-increase">+</button>
//         <span class="quantity">1</span>
//         <button class="btn-decrease">-</button>`;
//   cartContainer.appendChild(newItem);
// }
// function updatecarttotal() {
//   console.log("item is update");
// }

// const container = document.querySelector(".container");

// function handleAllClick() {
//   console.log("click done");
// }

// function handleAllInput() {
//   console.log("input done");
// }

// function handleAllChange() {
//   console.log("change done");
// }

// container.addEventListener("click", handleAllClick);
// container.addEventListener("input", handleAllInput);
// container.addEventListener("change", handleAllChange);
// console.log("container ", container);

// function createDynamicform() {
//   const form = document.createElement("form");
//   form.innerHTML = `<input type="text" class="dynamic-field>
//   <select class ="dynamic-select>
//   <option>Option1</option>
//   <option>Option2</option>
//   <option>Option3</option>
//   </select>
//   <button class="dynamic-btn"> Submit</button>
//   `;
//   document.body.appendChild(form);
// }

// document
//   .getElementById("addnewitem")
//   .addEventListener("click", function (event) {
//     createDynamicform();
//   });
// createDynamicform();

// document
//   .querySelector(".product-list")
//   .addEventListener("click", function (event) {
//     let target = event.target;
//     let product = target.closest(".product");
//     if (target.classList.contains("btn-delete")) {
//       const nextproduct = product.nextElementSibling;
//       const previousProduct = product.previousElementSibling;
//       console.log("Next product ", nextproduct);
//       console.log("Previous Product ", previousProduct);

//       const title = product.querySelector(".title");

//       const price = product.querySelector(".price");
//       console.log("title ", title.textContent);
//       console.log("Price ", price.textContent);

//       const productList = product.parentElement;
//       console.log("Product List ", productList.textContent);
//     }
//   });

// function getAllPreviousSibling(element) {
//   let siblibg = [];
//   let prev = element.previousElementSibling;

//   while (prev) {
//     siblibg.push(prev);
//     prev = prev.previousElementSibling;
//   }
//   console.log(siblibg);
// }
// const current = document.querySelector(".btn-delete");
// const priviousSibling = getAllPreviousSibling(current);

// function getAllNextSibling(element) {
//   let siblibg = [];
//   let next = element.nextElementSibling;

//   while (next) {
//     siblibg.push(next);
//     next = next.nextElementSibling;
//   }

//   return siblibg;
// }
// const current = document.querySelector(".title");
// const nextSibling = getAllNextSibling(current);
// console.log(siblibg);

// function getSpecificChildren(parent, selector) {
//   console.log(parent);
//   console.log(selector);
//   return Array.from(parent.children).filter((child) => {
//     return child.matches(selector);
//   });
// }
// let list = document.querySelector(".list");
// let listItem = getSpecificChildren(list, "li.active");
// console.log(listItem);
// const nav = document.querySelector(".main-nav");
// nav.addEventListener("click", function (event) {
//   const checkedItem = event.target.closest(".nav_item");

//   if (checkedItem) {
//     const allItem = Array.from(nav.children);
//     allItem.forEach((item) => {
//       item.classList.remove("active");
//     });
//     checkedItem.classList.add("active");

//     const nextItem = checkedItem.nextElementSibling;
//     const previtem = checkedItem.previousElementSibling;
//     console.log("next item", nextItem);
//     console.log("prev item", previtem);
//   }
// });

// window.alert("hello World");
// window.confirm("are you sure ");

// console.log("inner Hight ", innerHeight);
// console.log("inner Width", innerWidth);

// console.log("browser", navigator.userAgent);
// console.log("platform", navigator.platform);
// console.log("language", navigator.language);
// console.log("Online", navigator.onLine);
// console.log("cookies", navigator.cookieEnabled);

// navigator.geolocation.getCurrentPosition((position) => {
//   console.log("latitude", position.coords.latitude);
//   console.log("longitude", position.coords.longitude);
// });

// if (navigator.language.startsWith("en")) {
//   showHideUrdu();
// }

// function showHideUrdu() {
//   console.log("urdu language");
// }

// if (navigator.platform.includes("Win")) {
//   showWindowDownlode();
// }

// function showWindowDownlode() {
//   console.log("Downlode");
// }

// function enableChromeFeatures() {
//   console.log("Chrome");
// }

// if (navigator.userAgent.includes("Chrome")) {
//   enableChromeFeatures();
// }

// if (!/Android|iphone|ipad/.test(navigator.userAgent)) {
//   lodeMobileVersion();
// }

// function lodeMobileVersion() {
//   console.log("not Found");
// }

// navigator.geolocation.getCurrentPosition((pos) => {
//   nearByResturent(pos.coords.latitude, pos.coords.longitude);
// });

// function nearByResturent() {
//   console.log("Resturent is here ");
// }

// if (navigator.cookieEnabled) {
//   showcookiesWarining();
// }

// function showcookiesWarining() {
//   console.log("not allowed");
// }
// console.log("Screen width", screen.width);
// console.log("screen Height", screen.height);

// console.log("availWidth", screen.availWidth);

// console.log("availHeight", screen.availHeight);

// console.log("color Depth", screen.colorDepth);

// console.log("pixal depth", screen.pixelDepth);

// console.log("location href", location.href); //file:///E:/usama%20khanzada/js/jsnew/index.html?

// console.log("location hostname", location.hostname); // jo website ka hoste hoga
// console.log("path", location.pathname); //file:///E:/usama%20khanzada/js/jsnew/index.html?
// console.log("protocol", location.prothocol);
// console.log("search", location.search);
// console.log(history.back());
// console.log("forward", history.forward());
// console.log("go", history.go(-1));
// console.log(history.go(2));
// console.log("length", history.length);

// let backBtn = document.getElementById("goback");
// backBtn.addEventListener("click", function (e) {
//   if (history.length > 7) {
//     history.back();
//   } else {
//     alert("NO Previous Page in History");
//   }
// });
// let forwardbtn = document.getElementById("goforward");
// forwardbtn.addEventListener("click", function (e) {
//   history.forward();
// });

// let currentStep = 1;

// function nextstep() {
//   document.getElementById(`step${currentStep}`).style.display = "none";

//   currentStep++;

//   document.getElementById(`step${currentStep}`).style.display = "block";

//   history.pushState(null, " ", `/step${currentStep}`);
// }

// function previosstep() {
//   document.getElementById(`step${currentStep}`).style.display = "none";

//   currentStep--;
//   document.getElementById(`step${currentStep}`).style.display = "blcok";
//   history.back();
// }

// function submitform() {
//   document.getElementById(`step${currentStep}`).style.display = "none";
//   currentStep++;
//   document.getElementById(`step${currentStep}`).style.display = "block";
//   console.log("form sibmit");
//   history.back();
// }

// /////////////////////////////
// let currentStep = 1;
// formData = {};

// function savestep1() {
//   currentStep = 2;
//   formData.name = document.getElementById("name").value;

//   // Step change karo
//   document.getElementById("step1").style.display = "none";
//   document.getElementById("step2").style.display = "block";
//   // History mein data save karo
//   const stateData = {
//     currentStep: 2,
//     formData: formData,
//   };

//   history.pushState(stateData, "step-2", "/step2");
// }

// function savestep2() {
//   currentStep = 3;
//   formData.address = document.getElementById("address").value;

//   // Step change karo

//   document.getElementById("step2").style.display = "none";
//   document.getElementById("step3").style.display = "block";

//   document.getElementById(
//     "reviewData"
//   ).innerHTML = `<p>Name:${formData.name}</P>
//   <P>Address:${formData.address}</P>`;

//   // History mein data save karo

//   const stateData = {
//     currentStep: 3,
//     formData: formData,
//   };

//   history.pushState(stateData, "step-3", "/step3");
// }

// function goback() {
//   if (currentStep > 1) {
//     document.getElementById(`step${currentStep}`).style.display = "none";
//     currentStep--;
//     document.getElementById(`step${currentStep}`).style.display = "block";
//   }
// }
// function submitform() {
//   alert("Form Submitted Successfully!");
//   console.log("Form Data:", formData);
// }
// // Back/Forward buttons handle karo

// window.addEventListener("popstate", function (event) {
//   if (event.state) {
//     console.log("Recoverd Data", event.state);

//     // Saved data use karo

//     formData = event.state.formData || {};
//     const step = event.state.currentStep || 1;

//     // Correct step show karo

//     showstep(step);
//   }
// });

// function showstep(step) {
//   // / Sab steps hide karo

//   document.querySelectorAll("[id^='step']").forEach((ele) => {
//     ele.style.display = "none";
//   });
//   // Required step show karo
//   document.getElementById(`step${step}`).style.display = "block";
//   //  Required step show karo

//   if (formData.name) {
//     document.getElementById("name").value = formData.name;
//   }

//   if (formData.address) {
//     document.getElementById("address").value = formData.address;
//   }
// }

// const user = { name: "usama", age: 25, marks: [10, 20, 30] };

// localStorage.setItem("user", JSON.stringify(user));
// const savedUser = JSON.parse(localStorage.getItem("user"));
// console.log(savedUser);

// if (typeof storage !== "undefined") {
//   sessionStorage.setItem("name", "usama");
//   console.log(sessionStorage.getItem("name"));
// } else {
//   alert("local Storage not supported");
// }

// function isLocalStorage() {
//   try {
//     localStorage.setItm("test", "test");
//     localStorage.removeItem("test");
//     return true;
//   } catch (e) {
//     return false;
//   }
// }
// console.log("local storage supported", isLocalStorage());

// const user = { name: "usama", age: 25, marks: [10, 20, 30] };

// sessionStorage.setItem("user", JSON.stringify(user));

// const savedUser = JSON.parse(sessionStorage.getItem("user"));
// console.log(savedUser);

// browser Detection

// function detectionBrowser() {
//   if (navigator.userAgent.includes("Chrome")) {
//     return "Chrome Browser";
//   } else if (navigator.userAgent.includes("Firefox")) {
//     return "Firefox Browser";
//   } else {
//     return "other Browser";
//   }
// }

// console.log("you are using :", detectionBrowser());

//  chack Internet connection

// function syncPendingData() {
//   document.getElementById("status").textContent = "YOU ARE ONLINE";
//   document.getElementById("status").style.color = "green";
// }
// function showofflinemassage() {
//   document.getElementById("status").textContent = "YOU LOST CONNECTION";
//   document.getElementById("status").style.color = "red";
// }
// window.addEventListener("online", syncPendingData);
// window.addEventListener("offline", showofflinemassage);

// if (navigator.onLine === true) {
//   syncPendingData();
// } else {
//   showofflinemassage();
// }

// function applytheme(theme) {
//   document.body.classList = theme + "-theme";
//   const button = document.querySelector(".theme-btn");
//   const themestatus = document.getElementById("themestatus");
//   if (theme === "dark") {
//     button.textContent = "Switch to Light Theme";
//     themestatus.textContent = "Dark";
//   } else {
//     button.textContent = "switch to Dark Theme";
//     themestatus.textContent = "light";
//   }
// }

// function toggleTheme() {
//   const currenttheme = localStorage.getItem("theme") || "light";
//   const newtheme = currenttheme === "light" ? "dark" : "light";
//   localStorage.setItem("theme", newtheme);
//   applytheme(newtheme);

//   console.log("Current Theme:", currenttheme);
// }

// function detectsystemtheme() {
//   if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
//     return "dark";
//   }

//   return "light";
// }
// window.addEventListener("load", function () {
//   const savedItem = localStorage.getItem("theme");

//   if (savedItem) {
//     applytheme(savedItem);
//   } else {
//     const systemtheme = detectsystemtheme();
//     localStorage.setItem("theme", systemtheme);
//     applytheme(systemtheme);
//   }
// });

// window
//   .matchMedia("(prefers-color-scheme:dark)")
//   .addEventListener("change", (event) => {
//     if (!localStorage.getIteme("theme")) {
//       const newtheme = event.matches ? "dark" : "light";
//       applytheme(newtheme);
//     }
//   });

// function applytheme(theme) {
//   document.body.classList = theme + "-theme";

//   const button = document.getElementById("theme-btn");
//   const themestatus = document.getElementById("themestatus");
//   if (theme === "dark") {
//     button.textContent = "switch to Light theme";
//     themestatus.textContent = "Dark";
//   } else {
//     button.textContent = "switch to Dark Theme";
//     themestatus.textContent = "light";
//   }
// }

// function toggleTheme() {
//   const currenttheme = localStorage.getItem("theme") || "light";
//   const newtheme = currenttheme === "light" ? "dark" : "light";
//   localStorage.setItem("theme", newtheme);
//   applytheme(newtheme);
// }

// function updateconnectionstatus() {
//   const statusElement = document.getElementById("connectionstatus");
//   if (navigator.onLine) {
//     statusElement.textContent = "you are Online";
//     statusElement.className = "status online";
//   } else {
//     statusElement.textContent = "you are offLine";
//     statusElement.className = "status offline";
//   }
// }

// function showdeviceinfo() {
//   const infoElement = document.getElementById("deviceinfo");
//   const deviceinfo = `<p><strong>Screen Size:</strong>${screen.width} X ${
//     screen.height
//   }</p>
//   <p><strong>Available Screen Size:</strong>${screen.availWidth} X ${
//     screen.availHeight
//   }</p>
//   <p><strong>Color Depth:</strong>${screen.colorDepth}</p>
//   <p><strong>User Agent:</strong> ${navigator.userAgent}</p>
//   <p><strong>Platform:</strong> ${navigator.platform}</p>
//   <p><strong>Language:</strong> ${navigator.language}</p>
//   <p><strong>Online Status:</strong> ${
//     navigator.onLine ? "Online" : "Offline"
//   }</p>`;

//   infoElement.innerHTML = deviceinfo;
// }

// function savetostorage() {
//   const userinput = document.getElementById("usertext").value;

//   if (userinput.trim()) {
//     localStorage.setItem("userData", userinput);
//     showsavedata();
//     alert("data saved successfully");
//   } else {
//     alert("Please Enter Some data");
//   }
// }

// function showsavedata() {
//   const savedata = localStorage.getItem("userData");
//   const savedDataElemant = document.getElementById("saveData");
//   savedDataElemant.textContent = savedata || "NO data saved";
// }

// function clearstorage() {
//   localStorage.removeItem("userData");
//   showsavedata();
//   alert("Data cleared");
// }

// function checkmobileDevice() {
//   const isMobile =
//     screen.width < 768 ||
//     /Mobile|Android|iPhone|iPad/.test(navigator.userAgent);

//   const mobilenotice = document.getElementById("mobilenotice");
//   if (isMobile) {
//     mobilenotice.style.display = "block";
//     console.log("Mobile Device Detected");
//   }
// }

// function initializeApp() {
//   const savedtheme = localStorage.getItem("theme") || "light";
//   applytheme(savedtheme);
//   updateconnectionstatus();
//   showdeviceinfo();
//   showsavedata();
//   checkmobileDevice();

//   console.log(" App initialize successfully");
// }

// window.addEventListener("load", initializeApp);

// window.addEventListener("online", function () {
//   updateconnectionstatus();
//   console.log(" netWork connection Restored");
// });
// window.addEventListener("offline", function () {
//   updateconnectionstatus();
//   console.log(" netWork connection lost");
// });

// window.addEventListener("resize", function () {
//   showdeviceinfo();
//   checkmobileDevice();
// });

// setTimeout(() => {
//   console.log("usama");
// }, 3000);

// function main() {
//   console.log("usama");
// }

// setTimeout(main, 3000);

// setTimeout(
//   (name, age) => {
//     console.log(`my name is ${name} and my age is ${age}`);
//   },
//   2000,
//   "usama",
//   25
// );

// setInterval(() => {
//   console.log("usama");
// }, 1000);

// let seconds = 0;
// const intervalId = setInterval(() => {
//   seconds++;
//   console.log(`second: ${seconds}`);
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log(" stops");
// }, 5000);

// setInterval(() => {
//   let now = new Date();
//   document.getElementById("clock").textContent = now.toLocaleTimeString();
// }, 1000);

// let currentSlider = 0;
// let slider = [0, 1, 2];

// setInterval(() => {
//   currentSlider = (currentSlider + 1) % slider.length;
//   document.getElementById("clock") = slider[currentSlider];
// }, 3000);

// let timeout = setTimeout(() => {
//   console.log("usama");
// }, 2000);
// clearTimeout(timeout);

// let count = 0;
// const intervalID = setInterval(() => {
//   count++;
//   console.log(`Count : ${count}`);

//   if (count === 5) {
//     clearInterval(intervalID);
//     console.log("stop");
//   }
// }, 1000);

// function startCount(second) {
//   const countElement = document.getElementById("countdown");
//   const IntervalId = setInterval(() => {
//     countElement.textContent = `${second} left`;
//     second--;

//     if (second < 0) {
//       clearInterval(IntervalId);
//       countElement.textContent = "time's up";
//     }
//   }, 1000);
// }
// startCount(5);

// function typeWriter(text, ElementId, speed = 100) {
//   const element = document.getElementById(ElementId);
//   let i = 0;
//   element.textContent = " ";

//   const intervalId = setInterval(() => {
//     if (i < text.length) {
//       element.textContent += text.charAt(i);
//       i++;
//     } else {
//       clearInterval(intervalId);
//     }
//   }, speed);
// }

// typeWriter("hello World", "countdown", 50);

// let savetimeout;
// function autoSave() {
//   clearInterval(savetimeout);

//   savetimeout = setInterval(() => {
//     const content = document.getElementById("editor").Value;
//     localStorage.setItem("draft", content);
//     console.log("Auto Save at : ", new Date().toLocaleTimeString());
//   }, 2000);
// }
// document.getElementById("editor").addEventListener("input", autoSave);

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, (i + 1) * 1000);
// }

// function dealy(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function demo() {
//   console.log("starting .....");
//   await dealy(2000);
//   console.log("After 2 second .....");
//   await dealy(1000);
//   console.log("After 1 second .....");
// }
// demo();

// const element = document.getElementById("element");
// element.classList.add("active");
// element.classList.remove("active");
// element.classList.add("highlight", "animated", "large");

// if (element.classList.contains("large")) {
//   element.classList.remove("large");
// }
// element.classList.remove("highlight", "animated", "large");

// const btn = document.getElementById("btn");
// const heading = document.getElementById("heading");
// btn.addEventListener("click", function () {
//   heading.classList.add("active");
// });

// const element = document.getElementById("element");
// element.classList.add("active");
// element.classList.toggle("active");

// function toggleTheme() {
//   const btn = document.getElementById("theme-btn");
//   btn.addEventListener("click", function () {
//     document.body.classList.toggle("dark-theme");

//     if (document.body.classList.contains("dark-theme")) {
//       btn.textContent = `switch to dark`;
//     } else {
//       btn.textContent = `switch to light`;
//     }
//   });
// }
// toggleTheme();

// const element = document.getElementById("element");
// element.classList.add("active");
// element.classList.replace("active", "highlight");

// function navbar() {
//   const navItem = document.querySelectorAll(".nav-item");
//   navItem.forEach((item) => {
//     item.addEventListener("click", function () {
//       navItem.forEach((i) => {
//         i.classList.remove("active");
//       });
//       this.classList.add("active");
//     });
//   });
// }
// navbar();

// const passwordInput = document.getElementById("password");
// const toggleBtn = document.getElementById("toggle-password");

// toggleBtn.addEventListener("click", function () {
//   const type =
//     passwordInput.getAttribute("type") === "password" ? "text" : "password";
//   passwordInput.setAttribute("type", type);
//   toggleBtn.classList.toggle("fa-eye");
//   toggleBtn.classList.toggle("fa-eye-slash");
//   if (toggleBtn.classList.contains("fa-eye-slash")) {
//     toggleBtn.textContent = `Hide`;
//   } else {
//     toggleBtn.textContent = `Show`;
//   }
// });

// const accordionItem = document.querySelectorAll(".accordion-item");
// accordionItem.forEach((item) => {
//   const heder = item.querySelector(".accordion-heder");
//   heder.addEventListener("click", function () {
//     accordionItem.forEach((i) => {
//       i.classList.remove("active");
//     });
//     item.classList.toggle("active");
//   });
// });

// const type = input.getAttribute("type");
// console.log(type);

// const id = input.getAttribute("id");
// console.log(id);

// const placeholder = input.getAttribute("placeholder");
// console.log(placeholder);

// const dataId = input.getAttribute("data-id");
// console.log(dataId);

// const input = document.getElementById("Input-text");

// if (input.hasAttribute("required")) {
//   console.log("this is requide");
// } else {
//   console.log("not working");
// }

// const img = document.getElementById("myimg");
// img.setAttribute("src", "./img/newimg.png");
// img.setAttribute("width", "300");
// img.setAttribute("hight", "200");
// img.setAttribute("alt", "A man");
// img.setAttribute("data-loaded", "true");
// img.setAttribute("data-category", "nature");

// const input = document.getElementById("input");

// if (input.hasAttribute("disabled")) {
// input.removeAttribute("disabled");
// console.log("remove  disabled");
// }

// input.removeAttribute("required");

// input.removeAttribute("readonly");

// const btn = document.getElementById("btn");
// const toggle = document.getElementById("toggle-btn");
// toggle.addEventListener("click", function () {
//   btn.toggleAttribute("disabled", false);
//   console.log("clicked", btn.hasAttribute("disabled"));
// });

// const input = document.getElementById("input");

// const attributes = input.attributes;
// console.log(input.attributes["id"]);

// console.log(input.attributes.getNamedItem("id"));

// for (i = 0; i < attributes.length; i++) {
//   const attir = attributes[1];
//   console.log(`${attir.name}=${attir.value}`);
// }

// for (attri of attributes) {
//   console.log(`${attri.name}=${attri.value}`);
// }

// const attriArry = Array.from(attributes);
// attriArry.forEach((attri) => {
//   console.log(`${attri.name}=${attri.value}`);
// });

// const newattri = document.createAttribute("data-custom");
// newattri.value = "hello";
// console.log(newattri);

// attributes.removeNamedItem("id");

// const attriArry = Array.from(attributes);
// attriArry.forEach((attri) => {
//   console.log(`${attri.name}=${attri.value}`);
// });

// const userData = document.getElementById("usercard");
// const dataId = userData.dataset.userId;
// const dataName = userData.dataset.userName;
// const dataAge = userData.dataset.userAge;
// const dataPremium = userData.dataset.isPremium;
// const dataSignup = userData.dataset.signupDate;
// console.log(dataId);
// console.log(dataName);
// console.log(dataAge);
// console.log(dataPremium);
// console.log(dataSignup);

// userData.dataset.userRole = "admin";
// userData.dataset.userRole = "student";
// const userrole = userData.dataset.userRole;
// console.log(userrole);
// // console.log(dataId);

// console.log(userData.dataset);

// const key = Object.keys(userData.dataset);
// console.log(key);
// const values = Object.values(userData.dataset);

// console.log(values);
// for (const key in userData.dataset) {
//   console.log(`keys: ${key} , values: ${userData.dataset[key]}`);
// }

// delete userData.dataset.userId;
// userData.removeAttribute("data-user-name");
// console.log(userData.dataset);

// function addtoCart(parentElement) {
//   const productId = parentElement.dataset.productId;
//   const price = parseInt(parentElement.dataset.price);
//   const stock = parseInt(parentElement.dataset.stock);
//   const category = parentElement.dataset.category;
//   if (stock > 0) {
//     parentElement.dataset.stock = (stock - 1).toString();
//     updateUI(productId, price, category, parentElement.id);
//   }
// }

// function updateUI(productId, price, category, ElementId) {
//   console.log("Product ID:", productId);
//   console.log("Price:", price);
//   console.log("Product ID:", productId);
//   console.log("Price:", price);
//   console.log("Category:", category);
//   console.log("Item added to cart! ✅");
//   console.log("parent element id", ElementId);
// }

// const img = document.getElementById("myImage");

// img.onload = function () {
//   this.setAttribute("data-loaded", "true");
//   console.log("image Loaded", this.getAttribute("data-loaded"));
// };
// img.onerror = function () {
//   this.removeAttribute("src");
//   this.setAttribute("data_error", "true");
// };

// const input = document.getElementById("emil");
// function isvalidEmail() {
//   const email = input.value;
//   const isValid = email.includes("@");

//   if (isValid) {
//     input.removeAttribute("aria-invalid");
//     input.setAttribute("aria-describedby", "email-valid");
//     console.log("success");
//   } else {
//     input.setAttribute("aria-invalid", "true");
//     console.log("Error");
//   }

//   if (input.hasAttribute("required")) {
//     console.log("required");
//   }
// }

// const element = document.getElementById("myElement");
// element.remove();
// const massageError = document.getElementById("error");
// if (massageError) {
//   massageError.remove();
// }

// const items = document.querySelectorAll(".Items");
// window.addEventListener("click", function () {
// items.forEach((el) => {
//   el.remove();
// });
// });

// function removeItem() {
// const items = document.querySelector(".Items");
// items.remove();
// console.log("item remove");
//   const items = document.querySelector(".Items:nth-child(1)");
//   items.remove();
//   console.log("item remove");
// }

// const parent = document.getElementById("myElement");
// const child = document.getElementById("error");

// parent.innerHTML = " ";

// parent.textContent = "";
// parent.removeChild(child);

// const lastchild = parent.lastElementChild;
//  parent.removeChild(lastchild);
// const secondChild = parent.children[0];
// parent.removeChild(secondChild);

// function removeItem() {
// const list = document.getElementById("myList");
//   if (list.children.length > 0) {
//     const lastChild = list.lastElementChild;
//     // lastChild.remove();
//     list.removeChild(lastChild);
//     console.log("item remove");
//   }
// }
// list.innerHTML = " ";
// list.textContent = "hello world";
