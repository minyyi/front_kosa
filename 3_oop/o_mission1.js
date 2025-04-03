/* 
1. Rectangle 생성자 함수를 class기반으로 수정하자
2. 상속을 이용해서 Square 구현해보자자
*/

class Rectangle {
  width;
  height;
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea = () => {
    return "넓이: " + this.width * this.height;
  };
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

const rec1 = new Rectangle(3, 4);
console.log(rec1.getArea());
const squ1 = new Square(5);
console.log(squ1.getArea());
const squ2 = new Square(10);
console.log(squ2.getArea());
