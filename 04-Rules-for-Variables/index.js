/*
Bookish

Variable Names Legal and Illegal
You've already learned three rules about naming a variable: 
You can't enclose it inquotation marks. 
The name can't be a number or start with a number. 
It can't be any of JavaScript's keywords—the special words that act as programming instructions, like alertand var.

Here are the rest of the rules:
A variable name can't contain any spaces.

A variable name can contain only letters, numbers, dollar signs, and underscores.
Though a variable name can't be any of JavaScript's keywords, it can contain keywords.
For example, userAlert and myVar are legal.

Capital letters are fine, but be careful. Variable names are case sensitive. A rose is not a Rose. If you assign the string "Floribundas" to the variable rose, and then ask JavaScript for the value assigned to Rose, you'll come up empty.

I teach the camelCase naming convention. Why "camelCase"? Because there is a hump or
two (or three) in the middle if the name is formed by more than one word. A camelCase
name begins in lower case. If there's more than one word in the name, each subsequent
word gets an initial cap, creating a hump. If you form a variable name with only one
word, like response, there's no hump. It's a camel that's out of food. Please adopt the
camelCase convention. It'll make your variable names more readable, and you'll be less
likely to get variable names mixed up.

Examples:
userResponse
userResponseTime
userResponseTimeLimit
response

Make your variable names descriptive, so it's easier to figure out what your code means
when you or someone else comes back to it three weeks or a year from now. Generally,
userName is better than x, and faveBreed is better than favBrd, though the shorter names
are perfectly legal. You do have to balance readability with conciseness, though.
bestSupportingActressInADramaOrComedy is a model of clarity, but may be too much
for most of us to type or read. I'd shorten it.
*/












/* Chat GPT


Certainly! Here are some rules for writing variables in JavaScript that are important for beginners to understand:

1. **Variable Names:**
   - Variable names must start with a letter (a-z, A-Z), underscore (_), or dollar sign ($).
   - Subsequent characters can be letters, numbers, underscores, or dollar signs.
   - Variable names are case-sensitive. This means "myVariable" and "myvariable" are considered different variables.

2. **Keywords:**
   - You cannot use reserved JavaScript keywords as variable names. For example, you cannot use `if`, `else`, `while`, `function`, etc. as variable names.

3. **Camel Case:**
   - It's a common convention to use camel case for variable names. For example, `myVariableName` instead of `myvariablename` or `my_variable_name`.

4. **Descriptive Names:**
   - Choose meaningful and descriptive names for your variables to make your code more readable. For example, use `counter` instead of `c` or `userInput` instead of `u`.

5. **Constants:**
   - If a variable's value should not be changed, use the `const` keyword to declare it. For example: `const pi = 3.14159;`.

6. **Var, Let, and Const:**
   - There are three ways to declare variables in JavaScript: `var`, `let`, and `const`.
   - Use `let` for variables whose values may change over time.
   - Use `const` for variables that should not change after they are assigned.
   - Avoid using `var` unless you have a specific reason to do so. `let` and `const` are more modern and provide better scoping.

7. **Scope:**
   - Variables are scoped to the function or block in which they are declared.
   - Be aware of variable scope and avoid naming conflicts. Variables declared inside a function are local to that function and do not affect variables outside it.

8. **Initialization:**
   - It's a good practice to initialize variables when you declare them. For example, `let counter = 0;`. Uninitialized variables are set to `undefined` by default.

9. **Global Variables:**
   - Avoid using too many global variables, as they can lead to naming conflicts and make your code harder to maintain.

10. **Commenting:**
    - Add comments to explain the purpose of your variables, especially when the code is complex or when the variable's purpose might not be immediately obvious.

Here's an example of declaring and using variables in JavaScript:

```javascript
// Declare and initialize a variable
let userName = "John";

// Declare a constant
const maxAttempts = 3;

// Using variables
console.log("Hello, " + userName);

// Reassign a variable
userName = "Alice";

// Note that you can't reassign a constant
// maxAttempts = 5; // This will result in an error
```

These rules will help you write clean, readable, and error-free JavaScript code as a beginner.
*/