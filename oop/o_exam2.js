/* 생성자 함수를 이용한 객체 생성 */

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
Student.prototype.getSum = function () {
  return this.kor + this.eng + this.mat;
};
const student1 = new Student("박길동", 80, 70, 90);
console.log(student1.getSum);
// IdolModel.prototype.sayHello = function () {
//   return `${this.name}이 인사합니다.`;
// };
// const wonyoung = new IdolModel("장원영", 2002);
// console.log(yujin.sayHello());

let students = [];

students.push(new Student("박길동", 80, 70, 90));
students.push(new Student("김길동", 30, 40, 60));
console.log(student.toString());

for (let i in students) {
  //   console.log(value);
  //   console.log(key);
  console.log(students[i].toString());
}
// for (let student of students) {
//   console.log(student.toString());
// }

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.getArea = function () {
    return this.width * this.height;
  };
}

let rec = [];
rec.push(new Rectangle(5, 5));
rec.push(new Rectangle(10, 5));
for (let area of rec) {
  console.log(area.getArea());
}
// for (let i in rec) {
//   console.log(rec[i].getArea());
// }
// const rec1 = new Rectangle(10, 10);
// console.log(rec1.getArea());
