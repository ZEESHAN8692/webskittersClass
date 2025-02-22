// string Mathods
//1. length
let a = "My Name is Zeeshan";
let aa = "   My Name is Zeeshan  ";
// let b = a.length;
let c = a.toUpperCase();
let d = a.toLowerCase();
let e = a.includes("is");
let f = a.startsWith("My"); // start ka word ya leter check karta hai
let g = a.endsWith("n"); // end ka word ya leter check karta hai
let h = a.search("is"); // valuse ka index de deta hai nahi milega to -1
let i = a.match(/a/g); // ye array banata hai jo bhi leter ya word nikalna hai
let j = a.indexOf("a"); // indexOf first value ka index deta hai
let k = a.lastIndexOf("a"); // lastIndexOf last value ka index deta hai
let l = a.replace(/a/g, "l"); //  "/a/g (globaly search karta hai)"
let m = aa.trim(); // space remove karta hai
let n = a.charAt(0); // ye index ka word return kar deta hai
let o = a.charCodeAt(0); // ye keyboard ki key ka code deta hai
let p = String.fromCharCode(70); // ye key code ka key deta hai
let q = a.repeat(2); // ye jo string hoti hai repeat karta rahta hai jitni bolo
let r = a.substring(0, 5); //  ye last index ko count nahi karta hai
console.log(c);
