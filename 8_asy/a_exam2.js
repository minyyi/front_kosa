/* promise */
// const timeoutPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("done");
//   }, 2000);
// });

// timeoutPromise.then((res) => {
//   console.log("----------then");
//   console.log(res);
// });

const getPromise = (second) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, second * 1000);
  });

// getPromise(3)
//   .then((res) => {
//     console.log("--------1th then");
//     console.log(res);
//     return getPromise(2);
//   })
//   .then((res) => {
//     console.log("--------2nd then");
//     console.log(res);
//   });

//async-await
async function runner() {
  const result = await getPromise(1);
  console.log(result);
  const result1 = await getPromise(2);
  console.log(result1);
  const result2 = await getPromise(3);
  console.log(result2);
}

// runner();
// console.log("donedone");

function moneyLend(borrow) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject("채무자 파산");
      }
      resolve(borrow * 1.1);
    }, 1000);
  });
}

async function lend() {
  try {
    const lend1 = await moneyLend(10);
    const lend2 = await moneyLend(10);
    const lend3 = await moneyLend(10);
    const lend4 = await moneyLend(10);
    const lend5 = await moneyLend(10);

    console.log("대출금액: " + lend5 + "만원");
  } catch (error) {
    console.log(error);
  } finally {
    console.log("대금 종료");
  }
}

lend();
console.log("끝");
