let age = 12;
let year = 2021;

// comment
console.log(age, year);

age = 23;
console.log(age);

/* const birthYear = 1920;
console.log(birthYear); */


// STRINGS
console.log(' ');
console.log("STRINGS");

let email = 'mario@cart.co.uk';
console.log('String: ', email);

// string concatenation
let firsName = 'Joe';
let secondName = 'Mo';

let fullName = firsName + ' ' + secondName;

console.log(fullName);

// getting characters
console.log(fullName[0]);

// string length
console.log(fullName.length);

// string methodds
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);

let index = email.indexOf('@');
console.log(`index of '@' in ${email}: `, index);

// common string methods
result = email.lastIndexOf('o');
console.log('LastIndexOf("o"): ', result);

result = email.slice(1, 11);
console.log('slice(1, 11): ', result);

result = email.substring(1, 11);
console.log('substing(1, 11): ', result);

result = email.substr(1, 11);                // old function
console.log('substr(1, 11): ', result);

result = email.replace('a', 'b');
console.log('replace a to b: ', result)


// NUMBERS
console.log(' ');
console.log("NUMBERS");

let radius = 10;
const pi = 3.1415;

console.log(radius, pi);

// math operators +, -, *, /, **, %

result = radius % 3;
console.log(result);

// circle area
result = pi * radius**2;
console.log(result); 

// order of operation B I D M A S
// Brackets ()        4 + (2*5) = 14
// Indices **         2**3 = 8
// Division /         20/4 = 5
// Multiplication *   2*3 = 6
// Addidion           2*2 + 4 = 8
// Substraction       (3 + 2) - 1 = 4

let likes = 10;
console.log(likes);

likes = likes + 1;
console.log(likes);

likes ++; //----->    likes = likes + 1;
console.log(likes);

likes += 10;
console.log(likes);

likes /= 2;
console.log(likes);

// Not a Number
console.log(5 / 'hello');

result = 'the blog has ' + likes + ' likes';
console.log(result);


// Tamplate strings
console.log(' ');
console.log('Tamplate strings');
const title = 'Best book';
const author = 'Mario';
likes = 300;

// concatenation way
result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log(result);

// template string way
result = `The blog called ${title} by ${author} has ${likes} likes.`;
console.log(result);

// creating html templates
let html = `
  <h2>${title}</h2>
  <p>By ${author}</p>
  <span>This article seen ${likes} times. </span>  
`;

console.log(html);
document.write(html);

document.getElementById("blog").innerHTML = html + result; // Inserting in <div> block with id = "blog"


// ARRAYS
console.log(' ');
console.log('ARRAYS');

let ninjas = ['shaun', 'ryu', 'chun-li'];
console.log(ninjas);        // => shaun ryu chun-li
console.log(ninjas[0]);     // => shaun

ninjas[1] = 'ken';
console.log("Ninjas: ", ninjas);        // => shaun ken chun-li

let random = ['shaun', 'crystal', 20, 30];
console.log('Random: ',random);                       // => shaun crystal 20 30

console.log('Length of random: ', random.length);     // => 4

result = ninjas.join('+');
console.log("Join method: ", result);                 // => shaun+ken+chun-li

result = ninjas.indexOf('chun-li');
console.log('The index of chun-li is: ', result);     // => 2

// array concatenation (adding one aray to another)
result = ninjas.concat(['ryu', 'boo']);
console.log(result);
