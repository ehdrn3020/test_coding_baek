// console.log(process.cwd());

const fs = require("fs");
// beak에 제출시
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// VS CODE 에서
let input = fs.readFileSync("./test_coding_baek/input.txt").toString().trim().split('\r\n');

console.log(input);