/*
n++ : Post increment, increment is done after this line of code is executed.
++n : Pre increment, increment is done as soon as this line of code is executed.
*/


let x = 7
let y = x++        // y = 7 & x = 8
console.log("x =", x, ",y =", y)
let z = --y        // z = 6 & y = 6 
console.log("z =", z, ", y =",y)
let m = --x        // m = 7 & x = 7
console.log("m =",m,", x =",x)
let n = x++        // n = 7 & x = 8
console.log("n =",n,", x =",x)




let num = 3
console.log("num :" + num)

let n1 = num++        // n1 will be assigned 3 and then num will be incremented to 4
console.log("n1 :" + n1)
console.log("num :" + num)

let n2 = ++num        // n2 will be incremented to 5 and then assigned to num
console.log("n2 :" + n2)
console.log("num :" + num)