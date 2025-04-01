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

// 성적관리 예제
const names = ["김길동", "박길동", "조길동", "한길동"];
const scores = [88, 72, 95, 64];
//평균
const avrg = (score) => {
  let sum = 0;
  score.map((num) => {
    sum += num;
    return sum;
  });
  console.log(sum);
  return "평균점수: " + sum / score.length;
};
console.log(avrg(scores));
// 최고점수 학생
const top = (score, name) => {
  let max = 0;
  score.map((score) => {
    if (score > max) max = score;
  });
  let idx = score.indexOf(max);
  console.log(idx);
  console.log(name[idx]);
  return name[idx];
  //   for (let i = 0; i < score.length; i++) {
  //     let max = score[0];
  //     if (score[i] > max) {
  //       max = score[i];
  //       //   console.log(name[i]);
  //       //   console.log("최고점", max);
  //       return name[i];
  //     }
  //   }
};
console.log(top(scores, names));
// 합격자 목록(80점이상)

const pass = (score, name) => {
  let passList = [];
  for (let i = 0; i < score.length; i++) {
    if (score[i] >= 80) {
      //   console.log(score[i]);
      passList.push(name[i]);
      //   console.log(passList);
      //   console.log("점수", score[i]);
    }
  }
  return passList;
};

console.log(pass(scores, names));
