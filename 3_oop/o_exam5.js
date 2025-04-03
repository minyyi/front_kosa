/* 클래스기반 객체지향 프로그래밍 */

class IdolModel {
  #name; //private선언한 것임
  #year;

  constructor(name, year) {
    this.#name = name;
    this.#year = year;
  }
  set name(name) {
    this.#name = name;
  }
  get name() {
    return this.#name;
  }
  get toString() {
    return this;
  }
  static returnGroupName() {
    return "아이브";
  }
}

yuzin = new IdolModel("안유진", 2003);
// yuzin.name = "장원영";
console.log(yuzin.name); //undefined => private # 선언해서 직접접근 불가능 => get/set 함수 필요요
console.log(IdolModel.returnGroupName());
console.log(yuzin.toString);
