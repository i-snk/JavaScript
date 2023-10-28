/*
For variable we will use var, let and const 

When to Use var, let, or const?
1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. ** Only use var if you MUST support old browsers.

Variables defined with let can not be redeclared but can be initialized.

Variables defined with Const can neither be redeclared and initialized.
*/




// let is a variable holding the value
let name = "Shaan";
let nationality = "Indian";
console.log(name)

// initializing without declaring as it already declared
name = "Shayan"       
console.log(name)

// const 
const last_name = "Khan"

// Type error : Assignment to constant variable
//last_name = "ahmed"     

console.log(last_name)
console.log("My full name is" + " " + name + " " + last_name)