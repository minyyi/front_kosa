/* 
Prototype
*/

const testObj = {};
// console.log(testObj.__proto__);

function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}

// console.log(IdolModel.prototype);
// console.log(IdolModel.prototype.constructor === IdolModel); //true

const yujin = new IdolModel("안유진", 2003);

console.log(yujin.__proto__); //{}
console.log(IdolModel.__proto__); //[Function (anonymous)] Object
console.log(IdolModel.prototype); //{}
console.log(yujin.__proto__ === IdolModel.prototype); //true
console.log(yujin.__proto__ === IdolModel.__proto__); //false
console.log(yujin.prototype === IdolModel.prototype); //false
console.log(yujin.prototype === IdolModel.__proto__); //false
console.log(yujin.prototype); //undefined
console.log(IdolModel.prototype.__proto__); //[Object: null prototype] {}

console.log(testObj.__proto__ === Object.prototype); //true
console.log(yujin.toString()); //Object의 프로토타입안에 있는 toString()를 호출 가능
console.log(Object.prototype.toString()); //[object Object] : 위 결과값과 같음
console.log(IdolModel.prototype.__proto__ === Object.prototype); //true
IdolModel.prototype.sayHello = function () {
  return `${this.name}이 인사합니다.`;
};
const wonyoung = new IdolModel("장원영", 2002);
console.log(yujin.sayHello());
console.log(wonyoung.sayHello());
console.log(yujin.__proto__ === wonyoung.__proto__); // true
console.log(yujin.sayHello === wonyoung.sayHello); //true
console.log(yujin.sayHello); //[Function (anonymous)]
console.log(yujin.hasOwnProperty("sayHello")); //false

function Student(name, kor, eng, mat) {
  //프로퍼티 초기화 (자바 생성자 함수와 같음)
  this.name = name;
  this.kor = kor;
  this.eng = eng;
  this.mat = mat;

  //   this.getSum = function () {
  //     return this.kor + this.eng + this.mat;
  //   };
  //   this.getAverage = function () {
  //     return this.getSum() / 3;
  //   };
  //   this.toString = function () {
  //     return this.name + "\t" + this.getSum() + "\t" + this.getAverage();
  //   };
}
console.log("================exam2================");
// Student.prototype.getSum = function () {
//   return this.kor + this.eng + this.mat;
// };
// Student.prototype.getAverage = function () {
//   return this.getSum() / 3;
// };
// Student.prototype.toString = function () {
//   return this.name + "\t" + this.getSum() + "\t" + this.getAverage();
// };
Student.prototype = {
  getSum: function () {
    return this.kor + this.eng + this.mat;
  },
  getAverage: function () {
    return Math.round(this.getSum() / 3);
  },
  toString: function () {
    return this.name + "\t" + this.getSum() + "\t" + this.getAverage();
  },
};

// const student1 = new Student("박길동", 80, 70, 90);
let students = [];

students.push(new Student("박길동", 80, 70, 90));
students.push(new Student("김길동", 30, 40, 60));

// for (let i in students) {
//   console.log(students[i].toString());
// }
for (let student of students) {
  console.log(student.toString());
}

// console.log(student1.getSum());
// console.log(student1.getAverage());
// console.log(student1.toString());
