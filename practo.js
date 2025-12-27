//CALL, APPLY, BIND


function greet(greeting, punctuation) {
  console.log(greeting + ' ' + this.name + punctuation);
}
const person = { name: 'Alice' };
greet.call(person, 'Hello', '!'); // Output: Hello Alice!




const args = ['Hi', '??'];
greet.apply(person, args); // Output: Hi Alice??



const boundGreet = greet.bind(person, 'Hey', '.');
boundGreet(); // Output: Hey Alice.





// USING CALL, APPLY, BIND

// CALL() 




let sundari = {
    name: "Kirtana"
}

function asking(city){

    console.log(this.name +  "from"  + city );
}

asking.call(sundari, "Hyderabad" );







// FOR PRACTISE 

function run(person1) {
    console.log(this.name + "is very good with" + person1);
}

let useree = {
    name : "Kirtana "
};
run.call(useree, " Aditya");





// BIND 


let boy = {
    name : "pritesh"
}

let bounding = dear.bind(boy , "hyderabad");

function dear(area) {
    console.log(this.name + " is good at " +area)
}
bounding();




//APPLY

function acting(activity) {

    console.log(this.name + " always plays " + activity);
    //console.log(activity + " always played by" + this.name);
}

let man = {
    name : ["pritesh"]
}

acting.apply(man , ["cricket"]);





// //using call apply bind


function marriage(couple) {
    console.log(this.name + " weds" + couple);
}

let personn = {
    name : "krishna "
} 

marriage.call(personn, " kirtana");


//------------------------------------------------------

function marriage(couple) {
    console.log(this.name + " weds" + couple);
}

let peopl = {
    name : ["krishna"]
}

marriage.apply(peopl,  [" kirtana"]);


//-------------------------------------------

function marriage(couple) {
    console.log(this.name + " weds" + couple);
}

let guilt = {
    name : 'krishna'
}

let para = marriage.bind(guilt, ' kirtana');
para();






//ONE MORE TIME PRACTISE OF APPLY

function marriage(couple, marks) {
    console.log(this.name + " weds" + couple + " has got " + this.marks + " marks");
}

let peop = {
    name : ["krishna"],
    marks : 35
}

marriage.apply(peop, [" kirtana"]);



// PRACTISE OF PROTOTYPAL CODE 


const animal = {
    speak() {
        console.log(" the animal gives sound");
    }
};




// prototypal code 


let animaly = {
    eats: true,
    walk() {
        console.log("Animal walking");
    }
};

let rabbit = {

    jumps: true,
    __proto__: animaly
};

console.log(rabbit.eats);
rabbit.walk();

console.log(rabbit.jumps);



//PRACTISE 

let krishna = {

    eat: true,
    exercise : false,
    walk: true,
    sex(){
        console.log("jvfzxfhgjl;vl");
    }
};

let kirtana = Object.create(krishna);
    
console.log(kirtana.walk);
kirtana.sex();
     {
        console.log("flkxydfj;ugiytukxiytz");
    }


console.log(kirtana.walk);
console.log(krishna.dance);
console.log(kirtana.eat);
console.log(kirtana.exercise);



//PURE PROTOTYPAL 


const anim = {
  init(name) {
    this.name = name;
  },
  speak() {
    console.log(this.name + " makes a sound");
  }
};

const dog = Object.create(anim);
dog.init("Rex");
dog.speak();






//PRACTISE on PROTOTYPAL  using Object.create


const animale = {
  init(name) {
    this.name = name;
  },
  speak() {
    console.log(this.name + " makes a sound");
  }
};


const dogi = Object.create(animale);

dogi.bark = function () {
  console.log(this.name + " barks");
};
console.log(dogi);









//PRACTISE 


let grad = {
    name: "pritesh"
}

let anima = () => {
    console.log(grad.name);
};
anima();





// PRACTISE OF CURRYING CODE 

function atlas(a) {
    return function(p) {
        return function(k) {
            return a-p-k;
        };
    }
}
let attal = atlas(23) (43) (63);
console.log(attal);






function parvathi(p) {
    return function shakthi(k){
        return p + k;
    
    };
}
let addThem = parvathi(69);

console.log(addThem(21));






function add(a) {
  return function(b) {
    return a + b;
  };
}

const add5 = add(5);
console.log(add5(3)); // 8




//Real World Usage of CURRYING

const multiply = a => b => a * b;

const single = multiply(1);
const double = multiply(2);
const triple = multiply(3);

console.log(single(10));  //10
console.log(double(10)); // 20
console.log(triple(10)); // 30



// CLEAN VALIDATION LOGIC

const minLength = min => str => str.length >= min;

const isPasswordValid = minLength(8);

isPasswordValid("hello");       // false
isPasswordValid("hello1234");   // true



//Currying + Array methods (very efficient)

const greaterThan = x => y => y > x;

const greaterThan10 = greaterThan(10);

const great = greaterThan(10).filter(item => greaterThan(greaterThan(10)));

console.log(great);



//[5, 12, 18, 3].filter(greaterThan10);   // [12, 18]



//Function composition (advanced efficiency)

const trim = str => str.trim();
const toUpper = str => str.toUpperCase();

const compose = f => g => x => f(g(x));

const transform = compose(toUpper)(trim);

transform("  hello  "); // "HELLO"

console.log(transform);



//Currying vs bind() (important interview comparison)

//Using currying    (it is for closures)    (its Functional style)

const add = a => b => a + b;
const add51 = add(5);

console.log(add51(3));


// Using bind (it is for 'this')   (its OOPS style)

function add(a, b) {
  return a + b;
}

const ad51 = add.bind(null, 5);
console.log(ad51(2));


//------------------------------------------------------------

function mald(a) {
    return function (b){
        return a + b;
    }
}
let mosam = mald.call(null, 6);

console.log(mosam(3));


//--------------------------------------------------------

//Convert normal → curried (INTERVIEW FAVORITE)


function sum(a, b, c) {
  return a + b + c;
}


const sum = a => b => c => a + b + c;

sum(1)(2)(3); // 6



//-----------------------------------------------------



//Code of CLOSURES

function car() {
    this.name = "Audi"; 
        return function bike() {
        console.log(this.name);
    }
    bike.call(this);
}
car();
console.log(car);


//---------------------------

function cary(name) {
    //let name = "audi";
    return function biky() {
        console.log(name);
    }

}
let kangaro = cary("audi");
kangaro();
//console.log(kangaro);




//===========================================
// closure example 

function outer(a) {
  let b = 10;
  return function inner(c) {
    console.log(a, b, c);
  };
}

const fn = outer(5);
fn(3);     // 5 10 3 




// PRACTISE OF 'this' KEYWORD 











// PRACTISE OF HOISTING 








// PRACTISE OF PROMISES 

//API call (Fetch data)

fetch("https://api.example.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });



  //(2)  Custom Promise (real scenario)

function uploadFile(file) {
  return new Promise((resolve, reject) => {
    if (file.size < 5000) {
      resolve("File uploaded successfully");
    } else {
      reject("File too large");
    }
  });
}

uploadFile({ size: 3000 })
  .then(msg => console.log(msg))
  .catch(err => console.log(err));



//(3) Same API call using async/await


async function getUsers() {
  try {
    const response = await fetch("https://api.example.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getUsers();



//(4) Sequential Tasks (very common)

async function orderFood() {
  const order = await placeOrder();
  const payment = await makePayment(order);
  const delivery = await deliverFood(payment);
  console.log("Food delivered!");
}



//ERROR HANDLING (very practical)

//With Promises    X X X X X

fetchData()
  .then(data => processData(data))
  .catch(err => console.error(err));



//With Async/Await

async function fetchDataSafe() {
  try {
    const data = await fetchData();
    processData(data);
  } catch (err) {
    console.error(err);
  }
}




//practise   Sum from 1 to N

function sumg(n) {

    let sum = 0;
    for(let i = 1; i< n; i++){

        sum = sum + i;
    }
    return sum;
}
console.log(sumg(5));



// PRACTISE OF CLOSURE








// practise 

// Prime no

function prime(num){
  if(num <= 1){
    return false;
  }
  for(let i = 2; i<= Math.sqrt(num); i++){

    if(num % i === 0){
      return false;
    }
  }

  return true;
}
console.log(prime(22));




// Factorial 

function factorial(num) {
  let fact = 1;

  for(let i = 1; i<= num; i++){
    fact = fact * i;
  }
  return fact;
}
console.log(factorial(5));



// Palindrome number

function palind(num) {

  let original = num; 
  let rev = 0;

  while(num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);

  }
  return rev === original;
}
console.log(palind(122221));




//  Reverse a number 

function reverse(num) {

let rev = 0;

while(num > 0){
   rev = rev * 10 + (num % 10);
   num = Math.floor(num / 10); 
 }
return rev;
}
console.log(reverse(1625));



// Largest number in array


function largest(arr) {

  let max = arr[0];
  for(let i = 0; i<= arr.length; i++) {

    if(arr[i] >= max){

      max = arr[i];
    }

  }
  return max;
}
console.log(largest([23, 4, 76, 2]));




// Sum of array elements

function sumArray(arr) {
  let sum = 0;
  for(let num of arr){
    sum = sum + num; 
  }
  return sum;
}
console.log(sumArray([23, 23, 23]));



// Remove duplicates

// function remove(arr) {

//   return [... new set(arr)];
// }
// console.log(remove([23, 12, 34, 2, 12, 34, 22, 87, 34]));





// Reverse array (without reverse)


function revaray(arr){

  let res = [];
  for( let i = arr.length -1; i >= 0; i--){

    res.push(arr[i]);
  }
  return res;
  }
  console.log(revaray([23, 42, 12, 22, 44, 98]));



// Reverse a number

function reverse(num) {
let rev = 0;

while(num > 0){
   rev = rev * 10 + (num % 10);
   num = Math.floor(num / 10); 
 }
return rev;
}
console.log(reverse(1625));





// Reverse a string

function reverseStr(str) {

  let rev = "";

  for(let i= str.length-1; i>= 0; i--){

    rev = rev+ str[i];
  }

  return rev;
}
console.log(reverseStr("padhanisapadhani"));




// Count Vowels in a string

function vowel(str){
  let count = 0;
  for(let ch of str){

    if("aeiou".includes(ch))
      count++;
  }
  return count;

}
console.log(vowel("kirtana"));




//CLOSURES

function add(a){
  return function (b){
    return a * b;
  };
}

let kalupu = add(3);
console.log(kalupu(9));



// CURRYING

function add(a) {
  return function (b) {
    return a + b;
  };
}

console.log(add(6)(9));



// Counter  using Closure

function also() {
  let count = 0;
  return function ak() {
    count++
    return count;
  };
}
let control = also();
console.log(control());
console.log(control());




//  find string is palindrome 


function palin(str){
  return str === str.split('').reverse().join("");
}
console.log(palin("atta"));




// Count vowels

function countVow(str) {

  let count = 0;
  for(let ch of str){
    if("aeiou".includes(ch)){
      count++;
    }
  }
  return count;
}
console.log(countVow("kirtana"));





// First Non-repeating Character

function nonrepeat(str){
  for(let ch of str){
    if(str.indexOf(ch) === str.lastIndexOf(ch)){
      return ch;
    }
  }
}
console.log(nonrepeat("alakabalam"));



//CHECK ur name whether includes 

function cal(str) {

  return str.includes("J");
}
console.log(cal("PRITESH"));



// ANAGRAM prog


function anag(a, b){
  return a.split("").sort().join('') === b.split('').sort().join('');
}
console.log(anag("listen", "silent"));



// Missing Numbers in the array

function mis(arr, n) {
  let sum = (n * (n+1))/2;
  let arsum = arr.reduce((a, b) => a + b, 0);
 return sum - arsum;
}
console.log(mis([1, 2, 4, 5, 6, 8], 8));




// 

function createCounter() {
  let count = 0;
  return {
    increment() { return ++count; },
    decrement() { return --count; },
    get() { return count; }
  };
}
console.log(createCounter());







/// practise closures


function first() {

  let ark = 2;

   function second() {

    ark++;
    console.log(ark);
   }
   return second();
}

let answer = first();
console.log(answer);


