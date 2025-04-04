// function longWork() {
//   const now = new Date();
//   const milliseconds = now.getTime();
//   const afterTwoSeconds = milliseconds + 2 * 1000;

//   while (new Date().getTime() < afterTwoSeconds) {}
//   console.log("done");
// }
// longWork();

// 동기식프로그램
// console.log("hello"); //1
// longWork();//2
// console.log("world");//3 위에거 실행될때까지 기다려야함

//비동기식
// function longWork() {
//   setTimeout(() => {
//     console.log("done");
//   }, 2000);
// }

// console.log("hello"); //1
// longWork(); //3
// console.log("world"); //2
