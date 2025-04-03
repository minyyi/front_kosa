/* 자바스크립트 객체
 */
/* Object객체 이용 */
// let obj = new Object();
// console.log(obj);
// obj.name = "홍길동";
// obj.age = "20";

// console.log(`이름: ${obj.name}`);
// console.log(`나이: ${obj.age}`);

// function add(a, b) {
//   let sum = a + b;
//   return sum;
// }
// console.log(typeof add); //function
// console.log(typeof add()); //number
// console.log(add instanceof Object); //true

// add.result = add(10, 20);
// console.log(`결과: ${add.result}`); //결과: 30

/* 리터럴 형식으로 객체 사용 { } 
    => 1 개의 객체를 생성해서 사용하는 경우 
*/
// let obj2 = {
//   name: "김길동",
//   age: 30,
//   display: function () {
//     console.log(this.name); // this == obj2
//   },
// };

// obj2.display();
// console.log(`나이: ${obj2.age}`);
// console.log(`나이: ${obj2["age"]}`);

// Quiz

let obj = {};
obj.name = "Amy";
obj.age = 20;
obj.adult = function adult(age) {
  if (age >= 20) {
    console.log("성인입니다.");
  } else {
    console.log("성인이 아닙니다.");
  }
};
console.log(obj.name);
obj.adult(10);
obj.adult(30);
console.log(`${obj.name}은/는 ${obj.age}살입니다.`);
obj.adult(obj.age);

console.log(typeof obj.age);

/* 
객체 디스트럭처링: 객체의 프로퍼티를 풀어서 별개의 변수에 저장하는 방식
*/

let person = {
  first: "홍",
  last: "길동",
};

let { first, last } = person;
console.log(first, last);

const obj4 = {
  name: "kim gildong",
  age: 30,
  display: function () {
    console.log(this.name);
  },
};
obj4.name = "조길동";
obj4.display();
// obj4 = {}; //에러발생
