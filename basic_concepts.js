// print in console
console.log("Hello World")

// variables and constants
let age = 25;
console.log(age);
age = 27.8
console.log(age);

const salary = 8000;
console.log(salary);
// salary = 10000; // error because salary is constant

// data types
const my_name = "Andres";


// Numbers and math operations
let edad = 30;
let cambio = 2.5;
let divisor = 4;

console.log(edad + cambio);
console.log(edad - cambio);
console.log(edad * cambio);
console.log(edad / cambio);
// modulo
console.log(edad % divisor);


/*
Data types:
- string - String() class
- number - Number()
- boolean - Boolean()
- undefined
- symbol - Symbol()
- null
- bigint - BigInt()
*/
console.log(typeof edad);
console.log(typeof my_name);
console.log(typeof "20");
console.log(Number("20"));
console.log(typeof Number("20"));
console.log(parseInt("20.5"))

/*
Coercion data types
*/
console.log("20" + 20); // JS concatenates these two as strings
console.log("20" - 20); //JS subtracts these two as numbers
console.log("20" == 20); // true because doesn't check the data type
console.log("20" === 20); //false comparing data types
console.log("20" !== 20);


/*
Boolean values (true or false)
*/
console.log(Boolean(0));


/*
Compare values:
- ==  loose equality
- === strict equality
- != loose inequality
- !== strict inequality
- > greater than
- < less than
- >= greater than or equal to
- <= less than or equal to
*/
console.log("\nCompare values\n")
console.log(1 == 1);
console.log(1 == "1");
console.log(1 === "1");

/*
logic operators:
- && and
- || or
- ! not
- ?? nullish coalescing
*/
console.log("\nLogic operators\n")
console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(!true);
console.log(0 ?? "default value");
console.log(null ?? "default value");