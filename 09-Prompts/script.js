/*

in prompt even if we enter the number we will get string as an output 

we can write prompt or window.prompt


Prompt code is like alert code, with two differences.

In a prompt, you need a way to capture the user's response. That means you need to startby declaring a variable, followed by an equal sign.
In a prompt, you can specify a second string. This is the default response that appears in the field when the prompt displays. If the user leaves the default response as-is and justclicks OK, the default response is assigned to the variable. It's up to you whether you include a default response.

*/

// prompt("Question ?", default response)


// let species = prompt("Enter your species ?", "Human")
// alert("Your Specie is "+ species)


// let name = prompt("Enter your good name :")
// let greet = "Have a great day,"
// let banger = "!"
// alert(greet + " " + name + banger)

// let question = "What is your hobby ?"
// let defaultRes = "Action"
// let promptBox = prompt(question, defaultRes)
// alert("This is your hobby " + promptBox)

// let a = 17
// alert(typeof a)

// let num = prompt("Enter the number : ")
// alert(typeof num)

let cats = window.prompt("Enter the number of cat :")
alert (cats + 1)        // instead of adding it concatenates