
// // Define a function named difference that takes a parameter n
// function difference(n) {
//     // Check if n is less than or equal to 13
//     if(n <= 13) {
//         return 13 - n;
//     } else
//     return (n - 13) * 2;
// }

// // Log the result of calling the difference function with the argument 32 to the console
// console.log(difference(18));

// // Log the result of calling the difference function with the argument 11 to the console
// console.log(difference(11)); 





// // sum of two integers , triple if equal

// function sum(a, b) {
//     if(a === b) {
//         return 3 * (a+b);
//     }
//     else {
//         return a+b;
//     }
// }
// console.log(sum(3600, 3600));
// console.log(sum(9276552, 9276552));






// // check if 2 numbers are in range 50 to 99

// function check(a, b) {
//     if(a >= 50 && a < 100 && b >= 50 && b < 100) {
//         return true;
//     }
//     else{
//         console.log("enter valid numbers");
//         return false;
//     }
// }
// console.log(check(58, 50));
// console.log(check(60, 68));


//--------------------------------------------------------------------------------------------

// // write a js program to get all the even numbers from 2357 to 6739

// for(let i= 2357; i<= 6739; i++) {
//     if(i% 2 ==0) {
//         console.log(i);
//     }
   
// }


// other method  

function myne(num) {

    if(num % 2 == 0){
        return true;
    }
    else 
        return false;
}
console.log(myne(234));






// // diff between number and 19, triple if greater than 19

// let num = 12;
// let result;

// if(num >= 19) {
//  result = num *3;
// }
// else {
//     result = 19 - num;
// }
// console.log(result);







// js program for dynamic array property names

let kalyanam = {['akhil']: 89, ['avinash']: 78, ['aditya']: 95, ['kirtana']: 88, ['shilpika']: 92};

for(let[key , value] of Object.entries(kalyanam)) {
    if(value > 90) {
        console.log(key);
    }
}







// find age of kirtana

// function prank(age) {
//     if(kirtana.age > 20) {

//         console.log("age is accepted");
//     }
//     else{
//         console.log("")
//     }
// }







// // function to show pritesh age

// function pin2(age) {
    
//     if(age != 20 && age >= 22) {
//         console.log("pritesh need marriage");

//     }
//     else{
//         console.log("pritesh has to wait till he settles");
//     }
//     console.log("pritesh has completed masters in US");
// }
// pin2(31);



// Write a JavaScript program 
// to check whether a given integer is within 20 of 100 or 400

// function full(num) {
//     let a = Math.abs(100 - num) <=20;
//     let b = Math.abs(400 - num) <= 20;

//     return a || b;

// }
// console.log(full(90));









// //Write a JavaScript program to check two given integers 
// // whether one is positive and another one is negative

function f(a, b) {

    if((a > 0 ||  b > 0) && (a < 0 || b < 0)) {
        return true;

    }
    return false;
}
console.log(f(0, 33));






//Write a JavaScript program to create another string by adding "Py" in front of a given string. 
// If the given string begins with "Py" return the original string

function fuf() {
    let word = "priya";
    

    if(word.startsWith("py")) {
        return word;
    }
     else {
     return "py" + word;
     }
}
console.log(fuf());





// Write a JavaScript program to remove a character at the specified position
//  in a given string and return the modified string

function shilpika() {
    let starin = "delhipori";
    let karam = starin.slice()
    let pul = starin.charAt(2) = "s";
    return pul;
}
shilpika();






// Write a JavaScript program to remove a character at the 
// specified position in a given string and return the modified string.


function Kpi() {
    let juli = "printu";
    let pos1 = juli.slice(0,1)  + juli.slice(2,6);
    console.log(pos1);
    return pos1;
}
Kpi();



//Use of Slice

// function Kpi() {
//     let juli = "gawligoda";
//     let pos1 = juli.slice(0,1)+ "ow" + juli.slice(1,7)+ "u";
//     console.log(pos1);
//     return pos1;
// }
// Kpi();



//splice and slice 


// let arr = ["pintu", "aditya", "vamsi", "deepu", "manish", "kirtana", "shilpika", "pooji"];
// let curk = arr.splice(1, 1, "poojitha");
// console.log(curk);
// console.log(arr);






// function fruh(6, position) {
// let ark = "priteshpoojitha";
// let muty = ark.split(" ");
// let sary = muty.slice(8, position) + muty.slice(position + 1);
// let hyud= sary.join();
// console.log(hyud);
// }





// let auranga = "priteshpoojitha";
// let suri = auranga.slice(0,8) +  "u" + auranga.slice(8);
// console.log(suri);




// remove a character from a string

function frut(str, pos) {
    let varanasi = str.substring(0, pos);
    let kasi = str.substring(pos +1, str.length);
    return (varanasi + kasi);
}
console.log(frut("kirtanaditya", 6));
console.log(frut("priteshpoojitha", 8));




function theacha(str, pos) {
    let karthikeya = str.substring(0, pos);
    let anaram = str.substring(pos +1, str.length);
    return (karthikeya + anaram);
}
console.log(theacha("vakkantham", 8));
console.log(theacha("punarnava", 4));



// check for a number which is 20 less than to 100 or 400
function testhundred(x) {
  return ((Math.abs(100 - x) <= 20) ||
	 (Math.abs(400 - x) <= 20));
  }



  //Write a JavaScript program to create a new string from a given string
  //  by changing the position of the first and last characters. 
  // The string length must be broader than or equal to 1

  function ulta(str) {
    if(str.length <= 1) {
        return str
    }

    let aathi = str.substring(0, str.length-1);

    return str.charAt(str.length-1) + aathi + str.charAt(0);

    }

    console.log(ulta('kirtana'));



//Write a JavaScript program to create another string from a given string with 
// the first character of the given string added to the front and back.

function fulls() {
    let word = "kirtana";
    
    let kalongi = word.charAt(0)+ word + word.charAt(0);
    console.log(kalongi);
}
fulls();


//Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7

function mult(num) {

    if(num > 0){

        if(num % 3 == 0 || num % 7 == 0) {

        return true;
    }
    return false;
    }
}
console.log(mult(76));



//Write a JavaScript program to create a string from a given string. 
// This is done by taking the last 3 characters and adding them at both the front and back. 
// The string length must be 3 or more.

function stringLast3char(str) {

    if(str.length >= 3) {
        let arthi = str.substring(str.length-3);
        let sinsom = arthi + str + arthi;
        console.log(sinsom);

    }
    else 
        return false;
}
stringLast3char("aditya");



//Write a JavaScript program to check whether a string 
// starts with 'Java' if it does not otherwise


function gurt(str) {
    if(str < 4) {
        return false;
    }

    let front = str.substring(str.length-4);
    if(front === "adhi") {
        return true;
    }
    else{
        return false;
    }
    
}
console.log(gurt("kirtanadhi"));










function adhikeshava(str) {
    if(str.length > 4) {
        let chard = str.substring(str.length);
        if(chard === "kir") {

            return true;
        }


    }
    else 
        return false;
}
console.log(adhikeshava("paalapintukir"));







//Write a JavaScript program to check whether two given integer values are 
// in the range 50..99 (inclusive). Return true if either of them falls within the range.

function fity(num1, num2, num3) {
if((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99) || (num3 >= 50 && num3 <= 99)) {
    return true;
}
else
    return false; 

}
console.log(fity(25, 34, 35));







//Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position
//  in a given string. If "Script" appears in the string, 
// return the string without "Script" otherwise return the original one.

function removeScriptdi() {

    return str.replace("Script", "");
    
}
removeScriptdi("javascript");
removeScriptdi("typescript");









//Write a JavaScript program to find the largest of three given integers

function highest(at, bat, cat) { 
    if(at > bat & at > cat ) {
        return "value of at is highest";
    }
    else if(bat > at & bat > cat) {
        return "value of bat is highest";
    }
    else if(cat > at & cat > bat) {
        return "value of cat is highest";
    }
    else{
        return "enter the correct value";
    }

}
console.log(highest(35, 94, 63));




//Write a JavaScript program to find the closest value to 100 from two numerical values.


function nearest(num1, num2) {
    let adhi = Math.abs(num1 - 100); 
    let kheer = Math.abs(num2 - 100);

    if(adhi < kheer) {
        return num1;
    }
    else if (kheer < adhi) {
        return num2;
    }
    else{
        return num1;
    }
}
console.log(nearest(99,101));



//W a JS program to check whether two numbers are in the range 40..60 or 70..100 inclusive

function range(num1, num2) {
    if((num1 >= 40) && (num1 <= 60) && (num2 >= 40) && (num2 <= 60)|| (num1 >= 70) && (num1 <= 100) && (num2 >= 70) && (num2 <= 100)) {
        return true
    }

    return false;

}
console.log(range(80, 89));



//Write a JavaScript program to find the largest number from the two given positive integers.
// The two numbers are in the range 40..60 inclusive.

function two(num1, num2) {

    if((num1 >= 40 && num1 <= 60) && (num2 >= 40 && num2 <=60)) {
        if(num1 > num2) {
            return num1;
        }
        else
            return num2;
    }
    else 
        return "please enter in the range of 40 to 60";
}
console.log(two(56, 48));





//WAP to check whether a specified character exists betwn 2nd & 4th positions in a givn string


function pposition(str) {

    if(str.charAt(1) === "r" && str.charAt(3) === "t") {
        return true;
    }
    return false;
}
console.log(pposition("pritesh"));
console.log(pposition("kirtana"));
console.log(pposition("aditya"));
console.log(pposition("manish"));
console.log(pposition("vamsi"));





//WA JS program that checks whether the last digit of three positive integers is the same.


function comp(num1, num2, num3) {

    if(num1 > 0 && num2 > 0 && num3 >0) {
        
        if(num1 % 10 === num2 % 10 && num1 % 10 === num3 % 10 && num2 % 10 === num3 % 10) {
            return true;
        } 
        return false;

    }
    else{
        return "please enter positive integers only";
    }
}
console.log(comp(71, 51, 31));





//Write a JavaScript program to produce a new string that has the first 3 characters in 
// lower case from a given string. If the string length is less than 3 convert all the 
// characters to upper case.


function caseStud(str) {

    if(str.length < 3) {
        return str.toUpperCase();
    }

    
    let surp = str.substring(0, 3);
    let allsmal = surp.toLowerCase();

    let kgh = allsmal + str.substring(3);
    //let result = a + b + c + str;
    return kgh;
    
}
console.log(caseStud("ALEKHYA"));






//Write a JavaScript program to evaluate a student's total marks across various examinations 
// and determine their grade. The grading criteria are as follows:


//1.If total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.
//2.If the examination is labeled as "Final-exam," 
//  the student will receive an A+ grade only if their total marks are 90 or greater. 
//  Assume that final examination means we pass 'true' as second parameter otherwise blank.
//3.If the student achieves an A+ grade, the program should return 'true'; otherwise, 
//  it should return 'false'.

function failYa(exam, marks) {
    if(exam === 'Final Exam' && marks >= 90) {
        return 'A+ grade in final exams';
    }
    else if(exam !== 'Final Exam' && (marks >= 89 && marks <= 100)) {
        return 'A+ grade';
    }
    else 
        return undefined;
    
    }
    
console.log(failYa('Final Exam', 99));



// SAME ABOVE CODE  SHORTCUT CODE


function fun(marks, isFinal) {
    if(isFinal === true) {
        return marks >= 90;
    }

    else {
        return marks >= 89 && marks <= 100;
    }

}
console.log(fun(92, false));
console.log(fun(78, true));
console.log(fun(84, true));
console.log(fun(99, false));







//Write a JavaScript program to compute the sum of the two given integers. 
// If the sum is in the range 50..80 return 65 otherwise return 80.


function sum(num1, num2) {
    let add = num1 + num2;
    if(add > 50 && add < 80) {
        return 65;
    }
    else 
        return 80;
}
console.log(sum(34, 40));







// WA JS prog to check from two given integers whether one of them is 8 or 
// their sum or difference is 8.

function fum(int1, int2) {
    let add = int1 + int2;
    let subt = int1 - int2;
    let subr = int2 - int1;
    if(int1 === 8 || int2 === 8 || add === 8 || subt === 8 || subr === 8) {
        return true;
    }
    else 
        return false; 

}
console.log(fum(17,9));





//example for callback


function morning(name) {

    return `Good morning ${name.toUpperCase()}`;
}

function night(name) {

    return `Good night ${name.repeat(3)}`;
}

function greet(name, callback) {

    const myName = "kirtana";
    console.log(`${callback(name)}, my name is ${myName}`);
}

greet('vamsi', morning);
greet('deepu', night);









//Write a JavaScript program to check a set of three numbers; if the three numbers are the same 
// return 30; otherwise return 20; and if two numbers are the same return 40.


function fultoo(a, b, c) {

    if((a = b) & (a = c) & (b = c)) {

        return 30;
    }
    else if((a != b) & (a != c) & (b != c)) {
        return 20;
    }
    else{
        return 40;
    }
}
console.log(fultoo(47, 43, 47));




//Write JS code to check whether three given numbers are increasing in strict or in soft mode.  
//Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

function gurg(a, b, c) {

    if(c > b && b > a) {
        return "strict mode";
    }

    else if(c > b){
        return "safe mode";
    }
    else{
        return "undefined";

    }
}

console.log(gurg(32, 56, 67));
console.log(gurg(23, 34, 67));
console.log(gurg(75, 43, 21));






//Write a JavaScript program to check from three given numbers (non negative integers) that two
//  or all of them have the same rightmost digit.


function hyud(a, b, c) {
    return a%10 === b%10 && b%10 === c%10 && a%10 === c%10;
}
console.log(hyud(312, 52, 832));
console.log(hyud(7, 17, 87));
console.log(hyud(25, 45, 7895));





//Write a JavaScript program that evaluates three given integers to determine if any one 
// of them is greater than or equal to 20 and less than at least one of the other two.


function fulOne(x, y, z) {

    // if((x || y || z >= 20)  && (x < y || z &&  y < z || x && z < x || y)) {
    //     return true;

    // }

    return x > 20 && (x < y || x < z) || y > 20 && (y < x || y < z) || z > 20 && (z < y || z < x);

}
console.log(fulOne(18, 7, 12));
console.log(fulOne(46, 65, 85));
console.log(fulOne(178, 79, 342));





//Write a JavaScript program that checks two integer values and returns true if either 
// one is 15 or if their sum or difference is 15.


function fyun(a, b) {

    if(a == 15 || b == 15 || (a + b == 15) || (a-b == 15)) {

        return true;
    }
    return false;
}
console.log(fyun(12, 15));




// Write a JavaScript program to check two given non-negative integers if one (not both) is a
//  multiple of 7 or 11.

function mult(a, b) {
    if(a > 0 || b > 0) {
        if(a % 7 == 0 || a % 11 == 0  && b% 7 == 0 || b % 11 == 0 ) {
            return true;
        }

    return true
    }
    return false;
    
}
console.log(mult(45, 35));





//Write a JavaScript program to check whether a given number exists in the range 40..10000.  
//For example 40 presents in 40 and 4000

function gru(num) {

    if(num >= 40 && num <= 4000) {
        return true;
    }
    return false;
}
console.log(gru(4000));





//Write a JavaScript program to reverse a given string.

function gult(str) {
    return str.split("").reverse().join("");
}
console.log(gult("london"));
console.log(gult("aeroplane"));




//Write a JavaScript program to replace every character in a given string with the 
// character following it in the alphabet.


function fyn(str) {

    let fuli = str.split("");

    for(let i = 0; i<fuli.length; i++) {

    switch(fuli[i]) {

        case "":
        undefined;

    case "z": 
        fuli[i] = "a";
    
    case "Z":
        fuli[i] = "A";

    default:
        fuli[i] = String.fromCharCode( 1 + fuli[i].charCodeAt(0));
    }
}
    return fuli.join("");
}
console.log(fyn("shikhara"));
console.log(fyn("SAGARASANGAMAM"));







//Write a JavaScript program to capitalize the first letter of each word in a given string

function say(str) {
    str = str.split(" ");

    for(let i = 0; i< str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);

    }
    return str.join("");
}
console.log(say("sahasra"));
console.log(say("sangam"));





//Write a JavaScript program to convert letters of a given string alphabetically.



function syti(str) {

    return str.split("").sort().join("");
}
console.log(syti("flowers"));
console.log(syti("carona"));
console.log(syti("spatikalingam"));





//Write a JavaScript program to check whether the characters a and b are separated by exactly
//  3 places anywhere (at least once) in a given string.


function ethin(str) {
    return (/a...b/).test(str) || (/b...a/).test(str);
}
console.log(ethin("samant bhumi"));
console.log(ethin("marg harath"));
console.log(ethin("bhagavath agaman"));
console.log(ethin("suryahb"));







//Write a JavaScript program to count the number of vowels in a given string

// function dest(str) {

//     let dure = str.split("");
//     for(let i = 0; i< dure[0]; i++ ) {

//         if(str[i] = "a" || "e" || "i" || "o" || "u") {
//             return console.log(str[i]);
            
//         }
//     }
//     return str[i];
// }
// console.log(dest("pritesh"));
// console.log(dest("kirtana"));






//Write a JavaScript program to create a new string without the first and last characters 
// of a given string.


function ghee(str) {

    //return str.charAt(0, str.length-1);

    return str.substring(1, str.length-1);
}
console.log(ghee("php"));
console.log(ghee("kirikirik"));
console.log(ghee("pk"));







//Write a JavaScript program to concatenate two strings except for their first character.  


function gud(str1, str2) {

    let firsts = str1.substr(1, str1.length-1);
    let seconds = str2.substr(1, str2.length-1);

    return firsts + seconds;

}
console.log(gud("priyatham", "apriyam"));
console.log(gud("kirtana", "aditya"));






//Write a JavaScript program to move the last three characters to the start of a given string. 
// The string length must be greater than or equal to three.
function trve(str) {

    return str.slice(-3)+ str.slice(0, -3);
}
console.log(trve("manam"));
console.log(trve("janam"));
console.log(trve("manaswini"));

console.log(trve("Python"));
console.log(trve("JavaScript"));
console.log(trve("Hi")); 






//Write a JavaScript program to display the city name if the string begins with "Los" or 
// "New" otherwise return blank


function hre(str) {

    if(str.substring(0, 3) == "Los" || (str.substring(0, 3) == "New") || (str.substring(0, 3) == "Old")) {
        return str;
    }
    return ;
}
console.log(hre("Oldcity"));
console.log(hre("New york"));
console.log(hre("New jersey"));
console.log(hre("Pakija"));





//Write a JavaScript program to create a new string from a given string. This program removes 
// the first and last characters of the string if the first or last character is 'P'. 
// Return the original string if the condition is not satisfied.


function gulp(str) {
    let ipos = 0;
    let lpos = str.length;

    if(str.length > 0 && str.charAt(0) == 'P') {

        ipos++;
    }
    if(str.length > 1 && str.charAt(str.length-1) == 'P') {
        lpos--;
    }
    return str.substring(ipos, lpos);
}
console.log(gulp("PasupulaP"));
console.log(gulp("PrithaP"));
console.log(gulp("chinthamani"));








//Write a JavaScript program to create a new string using the first and last n characters 
// from a given string. The string length must be larger than or equal to n.


function gta(str, n) {
    let syrtng = str.substr(0, n);

    let fryut = str.substr(str.length - n);

    return syrtng + fryut;
}
console.log(gta("priyanuri", 3));
console.log(gta("pritesh", 3));
console.log(gta("kirtana", 3));






//Write a JavaScript program to compute the sum of three elements of a given array of 
// integers of length 3.


function ourt(a, b, c) {
    return a + b + c;

}
console.log(ourt(341, 541, 241));
console.log(ourt(3, 4, 6));







//Write a JavaScript program to rotate the elements left in a given array of integers of 
// length 3.


//---WRONG APPROACH---
function thirugu(array) {
    return [array[1], array[2], array[0]];
}
console.log(thirugu[[23], [43], [22]]);
console.log(thirugu[[98], [42], [86]]);
console.log(thirugu[[26], [39], [74]]);







//Write a JavaScript program to check whether 1 appears in the first or last position 
// of a given array of integers. The array length must be larger than or equal to 1.


function hyd(array) {
    let endpos = array.length -1;

    if(array[0] == 1 || endpos == 1) {
        return true;
    }
    return false;
}
console.log(hyd([1, 45, 6, 89, 32, 8]));
console.log(hyd([4, 54, 34, 30, 82]));






//Write a JavaScript program to check whether the first and last elements are the same 
// in a given array of integers of length 3.


function swd(nums) {
    let end = nums.length-1;
    if(nums.length >= 2) {
        return nums[0] == nums[end];
    }
    else{
        return false;
    }
}
console.log(swd([1, 45, 1]));
console.log(swd([2, 45, 63, 3, 2]));
console.log(swd([23, 5, 89, 3, 12]));






//Write a JavaScript program to reverse the elements of a given array of integers of length 3.


function err(nums) {
    return nums.reverse();

}
console.log(err([32, 42, 12, 6, 83]));
console.log(err([9, 97, 36, 97, 78]));
console.log(err([42, 78, 83, 32]));









//Write a JavaScript program to find the largest value between the first and last elements 
// and set all the other elements to that value. Display the updated array. 


//CHECK ONCE MIGHT BE WRONG

function kiye(nums) {

    let allamai = nums[0] > nums[2] ? nums[0] : nums[2] ;

    nums[0] = allamai;
    nums[1] = allamai;
    nums[2] = allamai;

    return nums;
}
console.log(kiye([23, 54, 12]));
console.log(kiye([7, 84, 24]));
console.log(kiye([85, 34, 65]));


//ES6 

let fure = (nums) => {
    const ture = Math.max(...nums);

    nums[0] = ture;
    nums[1] = ture;
    nums[2] = ture;

    return nums;
}
console.log(fure[20, 39, 40]);
console.log(fure[64, 73, 90]);


//largest number in array

let shivam = (array) => {
    let firdt = array[0];
    let secondt = array[array.length-1];

    let maxvalue = Math.max(firdt, secondt);

    for(let i =0; i< array.length; i++) {

        array[i] = maxvalue;
    }

    return array;

};
console.log(shivam([92, 63, 21, 73, 90]));  // 92 ....



//finding largest string alphabetically



let semyam = (array) => {
    let maxValue = array.sort()[array.length - 1];

    return array.map(() => maxValue);
};

console.log(semyam(["vamsi", "manish", "avinash", "pintu"]));      //vamsi .......





//WORK ON THIS

//function middle_elements(a, b) 
let gut = (a, b) => {
  var new_array = []
  new_array.push(a[1], b[1]);

    return new_array;
}
console.log(gut([1, 2, 3], [1, 5, 6]));  
console.log(gut([3, 3, 3], [2, 8, 0]));  
console.log(gut([4, 2, 7], [2, 4, 5])); 







//Write a JavaScript program to create an array by taking the first and last elements 
// from a given array of integers. The length must be larger than or equal to 1.



function twel(array) {
    if(array.length >= 1) {

        let first = array[0];
        let second = array[array.length-1];

        return first + second;
    }
}
console.log(twel([32, 16, 28, 12, 98]));






let twel = (array) => {
    if(array.length >= 1) {

        let first = array[0];
        let last = array[array.length-1];

        return first + last;
        
    }
}
console.log(twel([32, 16, 28, 12, 98]));






//Write a JS program to test whether an array of integers of length 2 contains 1 or 3.

//CHECK THE CODE I THINK ITS WRONG
function sady(nums) {
    if(nums.indexOf(1) !== -1 || nums.indexOf(3) !== -1) {
        return true;
    }else{
    return false;
    }
}
console.log(sady[34, 15]);
console.log(sady[73, 41]);






//Write a JavaScript program to test whether an array of integers of length 2 does not 
// contain 1 or 3.


//I THINK ITS WRONG
let kushi = (nums) => {
    if(nums.indexOf(1) == -1 && nums.indexOf(3) == -1) {
        return true;
    }else{
        return false;
    }
}
console.log(kushi([5, 16]));






//Write a JavaScript program to test whether a given array of integers contains 30 and 40 
// twice. The array length should be 0, 1, or 2.


function guli(arr) {
    let hud = arr[0];
    let mud = arr[1];

    return (hud === 30 && mud === 30) || (mud === 40 && hud === 40);
}
console.log(guli([76, 30]));
console.log(guli([40, 80]));






//Write a JavaScript program to swap the first and last elements of a given array of 
// integers. The array length should be at least 1.


let swap = (arr) => {
    [arr[0], arr[arr.length-1]] = [arr[arr.length-1], arr[0]];
    return arr;
};
console.log(swap([23, 2, 76, 1]));
console.log(swap([89, 64, 42, 21, 12]));





//Write a JavaScript program to add two digits to a given positive integer of length two.


function twoDigit(art) {
    return art % 10 + Math.floor(art/10);
}
console.log(twoDigit(89));
console.log(twoDigit(187));





//Write a JavaScript program to find the longest string from a given array of strings


function longStr(str) {
    
    let max = str[0].length;
    str.map(p => max = Math.max(max, p.length));
    return str.filter(p => p.length === max);  

}
console.log(longStr(["pintesh", "is", "a", "great", "bf"]));
console.log(longStr(["kirana", "is", "also", "greatest", "but ", "a", "girl"]));


//ALTERNATIVE SOLUTION
//function longStr(arr) {
//     let max = Math.max(...arr.map(p => p.length));
//     return arr.filter(p => p.length === max);
// }






//Js program to replace each character in a given string with the next in English alphbet.  
//Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.


function nextReplac(str) {

    let result = "";
    
    for(let i= 0; i< str.length; i++) {
        let ch = str[i];

    if(ch >= 'a' && ch <='z') {
        if(ch === 'z')

            result += a;
        
        else
            result += String.fromCharCode(ch.charCodeAt(0) +1);
        
    }
    else if(ch >= 'A' && ch <= 'Z'){
        if(ch === 'Z')
        result += A;

        else{
            result += String.fromCharCode(ch.charCodeAt(0) +1);
        }
        
    }
    else{
        result += ch;
    }

    }
    return result;
}
console.log(nextReplac("good"));
console.log(nextReplac("mayanthrikapuram"));








//85. Write a JavaScript program to divide a given array of positive integers into two parts. 
// First element belongs to the first part, second element belongs to the second part, 
// and third element belongs to the first part and so on. Now compute the sum of two parts 
// and store it in an array of size two.


function sree(array) {

  let result = [0, 0]; // Initialize an array to store alternate sums
  for(let i = 0; i < array.length; i++) 
  {	
    if(i % 2) {
        result[0] += array[i];
     } // If index is odd, add the element to the second sum
    else {
      result[1] += array[i]; // If index is even, add the element to the first sum
    }
  }
  return result; // Return the array of alternate sums
}
console.log(sree([12, 23, 16, 43, 8, 6]));
console.log(sree([16, 63, 6, 22, 11, 56]));







//87. Write a JavaScript program to determine if two arrays of integers of the same length are 
// similar. The arrays will be similar if one array can be obtained from another array by 
// swapping at most one pair of elements.


function ord(arr1, arr2) {

 for(let i =0; i<arr1.length; i++){
    for(let j = i; j<arr1.length; j++){

        let result = true;
        temp = arr1[i];

        arr1[i] = arr1[j];
        arr1[j] = temp;


        for(let k = 0; k<arr1.length; k++){

            if(arr1[k] != arr2[k]){
                result = false;
                break;
            }
        }

        if(result){
            return true;
        }
        arr1[j] = arr1[i];
        arr1[i] = temp;
    }
 }
 return false;
}
console.log(ord([10, 25, 50], [10, 20, 30]));
console.log(ord([10, 20, 30], [10, 20, 30]));
console.log(ord([30, 20, 10], [30, 20, 10]));
console.log(ord([40, 50, 60], [10, 20, 30]));
console.log(ord([198, 205, 5000], [101, 202, 3088]));









// Write a JavaScript program to find the shortest possible string. This can be converted 
// into a string and converted into a palindrome by adding characters to the end of it.

// function shortestPalin(str) {
//     let flag;
//     for(let i = str.length; ; i++) {
//         flag = true;
//         for(let j = 0; j< i-j-1; j++){
//             if(i-j-1 < str.length && str[j]!= str[i-j-1]) {
//                 flag = false;
//                 break;
//             }
//         }
//         if(flag){
//              for (let j = str.length; j < i; j++) {
//             str += str[i - j - 1];
//       }
//          return str;
//         }
//     }
// }
// console.log(shortestPalin('122'));
// console.log(shortestPalin('abcddc'));






// Function to build a palindrome from a given string
function build_Palindrome(new_str) {
  var flag; // Variable to check if a palindrome is found
  for (var i = new_str.length;; i++) { // Loop to increment the length for building a palindrome
    flag = true; // Set the flag initially to true for each iteration
    for (var j = 0; j < i - j - 1; j++) { // Loop to check for palindrome condition
      // Check if characters symmetrically positioned around the center are equal
      if (i - j - 1 < new_str.length && new_str[j] != new_str[i - j - 1]) {
        flag = false; // Set flag to false if characters are not equal
        break; // Break the loop if not a palindrome
      }	
    }
    if (flag) {
      // If a palindrome is found, complete the palindrome by adding the remaining characters
      for (var j = new_str.length; j < i; j++) {
        new_str += new_str[i - j - 1];
      }
      return new_str; // Return the palindrome
    }
  }
}

console.log(build_Palindrome("abcddc")); // Output the result for the given string
console.log(build_Palindrome("122")); // Output the result for the given string





//99. Write a JavaScript program to check whether it is possible to rearrange the characters 
// of a given string.This is in such a way that it will become equal to another given string.


function frut(str1, str2) {
    let arr1 = str1.split('');
    let arr2 = str2.split('');
    result = true;

    arr1.sort();
    arr2.sort();

    for(let i = 0; i< Math.max(arr1.length, arr2.length); i++) {
        if(arr1[i]!= arr2[i]) {
            result = false;
        }
    }

    return result;

}
console.log(frut("shy", "mis"));
console.log(frut("jim", "mij"));
console.log(frut("sid", "dis"));





// js prog to check if there is at least one element in two given sorted arrays of integers.

function atleastOne(arry1, arry2) {
    for(let i = 0; i< arry1.length; i++){

        if(arry2.indexOf(arry1[i]) !== -1) {
            return true;
        }
    }
    return false;
}
console.log(atleastOne([1, 4, 6], [6, 5, 3]));
console.log(atleastOne([3, 9, 0], [1, 4, 8]));




// Write a JavaScript program to find the number of times to replace a given number with 
// the sum of its digits. This is until it converts to a single-digit number.

// Function to calculate the sum of digits in a number
function digit_to_one(num) {
    // Inner function to compute the sum of digits in a number
    let digitSum = function(num) {
        let digit_sum = 0; // Initialize the variable to store the sum of digits
        while (num) { // Loop to extract digits and sum them
            digit_sum += num % 10; // Add the last digit to the sum
            num = Math.floor(num / 10); // Remove the last digit from the number
        }
        return digit_sum; // Return the sum of digits
    };

    let result = 0; // Initialize the counter for the number of steps

    while (num >= 10) { // Loop until the number becomes a single digit
        result += 1; // Increment the counter for each step
        num = digitSum(num); // Get the sum of digits and assign it to the number
    }

    return result; // Return the count of steps required
}

// Example usage of the function
console.log(digit_to_one(123));  
console.log(digit_to_one(156));



//OTHER WAY


function digit_to_one(num) {

    // Function to calculate the sum of digits
    function digitSum(n) {
        let sum = 0;
        while (n > 0) {
            sum += n % 10;     // take last digit
            n = Math.floor(n / 10);  // remove last digit
        }
        return sum;
    }

    let count = 0;

    // Keep repeating until num becomes a single digit
    while (num >= 10) { 
        num = digitSum(num);  // replace num with sum of digits
        count++;              // increase step count
    }

    return count;  
}

console.log(digit_to_one(999));





//PRACTISE


function additivePersistence(num) {

    let sum = 0;
    while(num) {
        sum = num % 10;
        num = Math.floor(num / 10);
        return sum;
    }
    let result = 0;

    while(num >=10) {

        result += 1;

    }
    return result;
}
console.log(additivePersistence(123));
console.log(additivePersistence(156));






// js program to sort an array of all prime numbers between 1 and a given integer. 


function primes(n) {
    if(n < 2){
        return false;
    }
for(i = 2; i< n; i++) {
    if(n % i == 0) {
        return false;
    }
}
return true;

}
console.log(primes(23));
console.log(primes(29));
console.log(primes(88));
console.log(primes(100));





// Write a JavaScript program to find the longest string in a given array.

function longStr(str) {

    let emptyStr = '';
    for(let i= 0; i< str.length; i++){
        if(str[i].length > emptyStr.length){
            emptyStr = str[i];
        
        }
    }

    return emptyStr;
}
console.log(longStr(['pritesh', 'aditya', 'krishna', 'vamsi']));
console.log(longStr(['poojita', 'shilpika', 'kirtana', 'nikhitha']));



// js prog to find the smallest prime number strictly greater than a given number.


// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to find the smallest prime greater than a given number
function nextPrime(n) {
    let candidate = n + 1; // strictly greater than n

    while (true) {
        if (nextPrime(candidate)) {
            return candidate;
        }
        candidate++;
    }
}

// Example usage
console.log(nextPrime(10)); // 11
console.log(nextPrime(17)); // 19
console.log(nextPrime(1));  // 2






// JavaScript program to find the number of even digits in a given integer.

// function evenDigits(num){

//     return (num  % 2 == 0);
// }
// console.log(evenDigits(42));
// console.log(evenDigits(21));

//THIS WORKS ONLY FOR CHECKING TRUE/FALSE 





// Function to count the number of even digits in a given number
function even_digits(num) {
  let count = 0;
  // Loop until 'num' becomes 0
  while (num) {
    // Increment 'count' if the last digit of 'num' is even
    count += num % 2 === 0;
    // Remove the last digit by integer division
    num = Math.floor(num / 10);
  }
  return count; // Return the count of even digits
}

// Test cases
console.log(even_digits(123));         // 1
console.log(even_digits(1020));        // this gives  3 as 0, 2, 0 are even
console.log(even_digits(102));           // this wil give 2 as 0 and 2 are evan 






//PROGRAM ON PROTOTYPE

function Person(name) {

    this.name = name;

}

Person.prototype.greet = function() {
    console.log(`hello my name is ${this.name}`);
};

const user = new Person("Aditya");
user.greet();

console.log(user.__proto__=== Person.prototype);





//USING CURRYING


function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function (...nextArgs) {
      return curried(...args, ...nextArgs);
    };
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

curriedAdd(1)(2)(3); 
curriedAdd(1, 2)(3);
curriedAdd(1)(2, 3);




//IMPLEMENT CURRYING 

function add(a, b, c) {
  return a + b + c;
}


function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}



//FLEXIBLE CURRYING FUNCTION 


function sum(a, b, c) {
  return a + b + c;
}

sum(1)(2)(3);
sum(1, 2)(3);
sum(1)(2, 3);


function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
}






//CLOSURE CURRYING 

function makeCounter() {
  let count = 0;
  return function inc() {
    return ++count;
  };
}

const c1 = makeCounter();
const c2 = makeCounter();

console.log(c1(), c1(), c2());







//Function to calculate alternate sums of elements in an array

function alternate_Sums(arr) {
  var result = [0, 0]; // Initialize an array to store alternate sums
  for(var i = 0; i < arr.length; i++) 
  {	
    if(i % 2 == 1) result[1] += arr[i]; // If index is odd, add the element to the second sum
    else
      result[0] += arr[i]; // If index is even, add the element to the first sum
  }
  return result; // Return the array of alternate sums
}

// Example usage
console.log(alternate_Sums([1, 3, 6, 2, 5, 10]));
console.log(alternate_Sums([1, 4, 7, 8, 9, 2]));




//this, hoisting, prototypal inheritance, callback, promise, async await, closures, map filter reduce, event loop. //






const obj = {
  name: "Arrow",
  greet() {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};
console.log(greet());





function add(a, b, c, de, z) {
  return a + b + c + de + z;
}
console.log(add(14, 56, 32, 78, 96));

function subtract(a) {
    return function (b) {
        return function(c) {
            return function(de) {
                return function(z) {
                    return a - b - c - de - z;
                }
            }
        }
    }
}
console.log(subtract(63) (62) (80) (12) (73));




const person = {
  name: "Pritesh",
  greet() {
    console.log(this.name);
  }
};

const fn = person.greet;
fn();



