/* 
언어를 javascript로 할 경우 입출력 받는 가이드


[ fs module ] 

//한 줄 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

//여러 줄 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


[ readline module ]

//한 줄 입력
let input;
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(line) {
    // input = line;
    input = parseInt(line);
    rl.close();
}).on("close", function(){
    solution(input);
    process.exit();
})

function solution(input){
    console.log(input-543);
}

//여러줄 입력
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input;
let list = [];
rl.on("line", function (line) {
    input = line;
    rl.close();
}).on("close", function () {

    //한줄에 입력된 값을 띄어쓰기 기준으로 list배열에 삽입.
    list.push(input.split(' ').map((el) => el));
    
    //입력된 문자열이 전부 정수라면 parseInt로 형변환
    list.push(input.split(' ').map((el) => parseInt(el)));

    solution(list);
    process.exit();
});

function solution(input) {
   console.log(list);
}

*/