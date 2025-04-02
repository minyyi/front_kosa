/* 
함수 클로져 
    => 함수 호출 이후에도 메모리 살리고싶을 때?
                         함수의 실행 컨텍스트 영역을 유지 
*/

function outerFunc() {
  let x = 10;
  let innerFunc = function () {
    console.log(x);
  };
  return innerFunc;
}

let inner = outerFunc();
inner(); // 10

//데이터 캐싱 전
function cashFunction(newNumb) {
  //아주 오래 소요되는 작업
  let number = 10 * 10;
  return number * newNumb;
}

console.log(cashFunction(10)); // 실행 할 때마다 아주 오래 소요되는 작업을
console.log(cashFunction(20)); // 계속 다시 실행함

//데이터 캐싱 후

function cashFunction2(newNumb) {
  //아주 오래 소요되는 작업
  let number = 10 * 10; //메모리 사라지지 않고 남겨둠

  function innerCashFunction(newNumb) {
    return number * newNumb;
  }
  return innerCashFunction;
}

const runner = cashFunction2(); // 처음호출할 때 number생성 후 픽스
console.log(runner(30)); // 메모리에 남아있는 number을 가져오고
console.log(runner(40)); // innerCashFunction함수 실행

function outer(arg1, arg2) {
  let sum = arg1 + arg2;
  function inner(num) {
    return sum - num;
  }
  return inner;
}
function outer(arg1, arg2) {
  let sum = 0;
  let avr = 0;
  let count = 0;
  function inner(arg1, arg2) {
    sum += arg1 + arg2;
    count += 2;
    avr = sum / count;
    console.log(sum);
    console.log(avr);
    return avr;
  }
  return inner;
}
function outer(arg1, arg2) {
  function inner(innerArg) {
    console.log((arg1 + arg2) / innerArg);
  }
  return inner;
}

let inner2 = outer(16, 14);
inner2(10);
outer(16, 14)(10);
// let runner2 = outer(16, 14);
// console.log("1", runner2(16, 18));
// console.log("2", runner2(14, 12));
