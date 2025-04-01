// console.log(add(10, 20));
// console.log(add2(100, 200));

// 선언적 함수
function add(a, b) {
  let sum = a + b;
  return sum;
}

// console.log(add(10, 20)); //30

// 익명함수
let add2 = function (a, b) {
  let sum = a + b;
  return sum;
};
// console.log(add2);
// console.log(typeof add2); //function
// console.log(add2(100, 200));

// add2 vs add2()

let plus = add2; // 함수: 주소값 할당 - function(a,b){}
let plus2 = add2(20, 30); //50

// console.log(typeof plus);
// console.log(typeof plus2);
// console.log(plus);
// console.log(plus2);

// 함수의 파라미터에 함수를 전달할 수 있다.
let foo = function (func) {
  if (typeof func === "function") {
    func();
  }
};

foo(function () {
  console.log("parameter에 함수 전달 예제");
  return add2(10, 20);
});

function test(a) {
  return function (b) {
    let cal = a - b;
    return cal;
  };
}

const result1 = test(2);
console.log(result1(2));
const result2 = test(3);
console.log(result2(4));

let foo2 = function () {
  return function () {
    console.log("함수를 리턴하는 예제");
  };
};

let box = foo2();
box();
// 1
// let call = function (mode) {
//   if (mode === "plus") {
//     return function add(a, b) {
//       let result = a + b;
//       return result;
//     };
//   } else if (mode === "minus") {
//     return function minus(a, b) {
//       let result = a - b;
//       return result;
//     };
//   }
// };

// 2
function call(mode) {
  let obj = {
    plus: function (a, b) {
      return a + b;
    },
    minus: function (a, b) {
      return a - b;
    },
  };
  return obj[mode];
}

let func2 = call("minus");
console.log(func2(50, 30));

//콜백함수
function sortDes(a, b) {
  return b - a;
  // if (a > b) {
  //   return -1;
  // } else if (b > a) {
  //   return 1;
  // } else {
  //   return 0;
  // }
}

let arr = [96, 46, 24, 2, 35, 56];
console.log(arr.sort());
console.log(arr.sort(sortDes));
