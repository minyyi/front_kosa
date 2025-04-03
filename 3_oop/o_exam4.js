//부모 생성자
function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}

IdolModel.prototype.sayHello = function () {
  return `${this.name}이/가 인사합니다.`;
};

//자식 생성자
function FemaleIdolModel(name, year) {
  this.name = name;
  this.year = year;

  this.dance = function () {
    return `${this.name}가 춤을 춥니다`;
  };
}

const gaeul = new IdolModel("가을", 2004);
const ray = new FemaleIdolModel("레이", 2004);

console.log(gaeul.__proto__ === IdolModel.prototype);
console.log(gaeul.sayHello());
console.log(ray.dance());

/* 함수의 prototype변경 => 상속 구현 */
// console.log(ray.sayHello()); //TypeError: ray.sayHello is not a function

FemaleIdolModel.prototype = IdolModel.prototype;
const eseo = new FemaleIdolModel("이서", 2007);
console.log(gaeul.__proto__ === FemaleIdolModel.prototype);
console.log(ray.prototype === IdolModel.prototype);

console.log(eseo.sayHello());
console.log(eseo.dance());
