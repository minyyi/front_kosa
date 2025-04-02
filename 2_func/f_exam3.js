/* 실행컨텍스트 */
// let var1 = 10;

// function func() {
//   let var2 = 20;
//   console.log(var1);
// }
// func();

// let value = "value1";

// function printFunc() {
//   let value = "value2";
//   function printValue() {
//     return value;
//   }
//   console.log(printValue());
// }
// printFunc(); //value2

// let value = "value1";
// function printValue() {
//   return value;
// }
// function printFunc(func) {
//   let value = "value2";
//   console.log(func());
// }

// printFunc(printValue);

// let numberThree = 3;
// function functionOne() {
//   let numberThree = 100;
//   functionTwo();
// }
// function functionTwo() {
//   console.log(numberThree);
// }

// functionOne();

/* var 키워드
    함수레벨 스코프만 적용
   let, const 키워드
    함수레벨, 블록레벨 스코프도 적용  
*/

// var i = 999;

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(i); //10

// let i = 999;

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(i); //999

var var3 = 100;

function func3() {
  var var3 = 200;
  console.log(var3);
}
func3(); //200
console.log(var3); //100
