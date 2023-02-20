/*
수 이어쓰기 1

문제
1부터 N까지의 수를 이어서 쓰면 다음과 같이 새로운 하나의 수를 얻을 수 있다.

1234567891011121314151617181920212223...

이렇게 만들어진 새로운 수는 몇 자리 수일까? 이 수의 자릿수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 N(1 ≤ N ≤ 100,000,000)이 주어진다.

출력
첫째 줄에 새로운 수의 자릿수를 출력한다.

예제 입력 1 
5
예제 출력 1 
5
예제 입력 2 
15
예제 출력 2 
21
*/

const fs = require("fs");
let input = +fs.readFileSync("./test_coding_baek/input.txt").toString().trim();

let answer = 0;
let num = 1;
let d = 10
let s = 1;
while(num<=input){
  if(Math.floor(num/d)==0){
    num++;
    answer+=s;
  }else{
    d*=10;
    s++;
  }
}

console.log(answer)