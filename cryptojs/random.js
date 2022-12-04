const keccak256 = require("keccak256");

let num = Math.floor(1000 + Math.random() * 9000);
console.log("random 4 dig: ", num);

let hashedNum = keccak256(num).toString("hex");

console.log("hashed num: ", hashedNum);
