// 함수 호출할 때 파라미터 개수가 일치하지 않아도 오류 X
// function add(a, b, c) {
//   console.log(a, b, c);
// }
// add(10, 20);
// add(10, 20, 30, 40, 50);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function calcurate(total, tax = 0.1, tip = 0.2) {
  return total + total * tax + total * tip;
}

console.log(calcurate(100));
console.log(calcurate(100, 0.5, 0.1));

let greeting = function (name) {
  return "Hello" + name;
};

let greeting2 = (name) => {
  return `Hello ${name}`;
};

let greeting3 = (name) => `Hello ${name}`;
console.log(greeting3("박길동")); //Hello 박길동

// const add = function (a, b) {
//   return a + b;
// };

const add = (a, b) => {
  return a + b;
};

console.log(add(10, 20));

const numbers = [1, 2, 3, 4, 5];
const result = numbers.map((num) => num * num);
console.log(result);
