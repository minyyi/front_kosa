// console.log("abc");
/* 
여러줄 주석
*/

//변수 선언, 초기화
// var num = 100;
// console.log(num);
// console.log(typeof num);

// num = "안녕";
// console.log(num);
// console.log(typeof num);

/* 컴파일언어: 데이터혀, 문법 => 업격히 요구
   인터프리터 언어: 문법적으로 느슨해도 허용
*/

// var : 여러 큰 스코프에서 공유하기 위한 최상위 변수 사용 => 오염 가능성 높음
// 최근에는 거의 사용하지 않음
// let : 작은 스코프에서 로컬변수 사용
// const : 상수값으로 사용

let intNum = 10;
let floatNum = 3.14;
// console.log(typeof intNum); //number
// console.log(typeof floatNum); //number

let sinS = "single";
let doubleS = "double";
// console.log(typeof sinS); //string
// console.log(typeof doubleS); //string

/* 
    Template literal
    1. newline -> \n
    2. tab -> \t
    3. 백슬러시 문자열 안에서 표현 => \\
*/
const kosa = "이현서\\최지현";
// console.log(kosa);
const kosa2 = `
홍길동\\\박길동\\!@#$%^&^
`;
// console.log(kosa2);
const groupName = "kosa";
// console.log(groupName + " 김길동");
// console.log(`${groupName} asdf qwe`);

// let boolVar = true;
// console.log(typeof boolVar); //boolean
// console.log(!!false); //false
// console.log(!!""); //false
// console.log(!!0); //false
// console.log(undefined); //false
// console.log(!!null); //false
// console.log(!!"0"); //true
// console.log(!!{}); //true
// console.log(!![]); //true

// let emptyVar;
// console.log(typeof emptyVar); //undefined

// let nullVar = null;
// console.log(typeof nullVar);

// let fun = function () {};
// console.log(typeof fun); //function

let person = {
  name: "홍길동",
  age: 20,
};

console.log(typeof person); //object
console.log(person.name);
console.log(person["age"]);

const kosaMember = ["백시관", "김도원", "조성욱", "김효연"];
console.log(typeof kosaMember);
console.log(kosaMember);

const test1 = "1";
const test2 = 1;
console.log(test1 == test2); //true
console.log(test1 === test2); //false

const symbol1 = Symbol("1");
const symbol2 = Symbol("1");
console.log(symbol1 === symbol2); //false
