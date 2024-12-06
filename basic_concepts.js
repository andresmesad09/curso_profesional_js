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

/*
conditions
*/
let years = 30;
if (years >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

let score = 80;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log("F");
}


/*
loops
*/
// for loop (initial; condition(t/f); incremental )
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//use break
for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i == 5) {
        break; //stop loop
    }
}
//use continue
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log("Even number: " + i);
        continue; // skip
    }
    console.log(i);
}

//while loop
let i = 1;
while (i <= 10) {
    console.log(i);
    i++; //make sure to always change the variable that is being compared
}

//do - while
console.log("Do - while loop");
let j = 1;
do {
    //it's executed at least 1
    console.log(j);
    j++;
} while (j <= 10);

/*
undefined (not value assigned), null (value assigned but it's empty), y NaN (not a number)
*/
console.log("\nUndefined, null, NaN\n")
let nombre;
console.log(nombre);
console.log(typeof nombre);
let apellido = null;
console.log(apellido);
console.log(typeof apellido);
let num = 10;
let num2 = "Andres";
console.log(num * num2);
console.log(typeof (num * num2));