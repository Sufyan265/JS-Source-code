
// second page me imported program ko access krny k liya syntax ↓ 
const slamFunc = require("./_44_Modules1") 

// ya phir is tra destructuring ka use kr skty he ↓ 
const {slam, slamName} = require("./_44_Modules1.js")


// // pahly function ko access krny k liya .functionName likhe 2nd function ko access krny k liya slamFunc.2ndFunctionName likhe ↓ 
slamFunc.slam()
slamFunc.slamName("Anas")

console.log("____________________________2")

slam()
slamName("Hassan") 


// is method ko chlany k liya [package.json] file me ["type": "module",] type kre ↓ 
// ES6 import method ↓ 

/*
import sufyan, {slam2, slamName2} from "./_44_Modules2.js"; // CommonJS module

slam2()
slamName2("Haseeb")
sufyan()
*/

