const sum = (a, b) => {
  let result = a + b;
  return result;
};
sum(3, 5);
console.log("합: ", sum(3, 5));

let num = [1, 2, 3, 4, 5, 6];
const filterEven = (num) => {
  let evenarr = [];
  let oddarr = [];
  num.map((num) => {
    if (num % 2 == 0) {
      evenarr.push(num);
    } else {
      oddarr.push(num);
    }
  });
  return `짝수: [${evenarr}] , 홀수: [${oddarr}]`;
};
filterEven(num);
console.log(filterEven(num));
