// console.log(5 == 5); //t
// console.log(5 == "5"); //t
// console.log(5 === "5"); //f

// console.log(0 == ""); //t
// console.log(true == 1);

// for ~ in vs for~ of

const gildong = {
  name: "홍길동",
  year: 2000,
  company: "kosa",
};
for (let key in gildong) {
  console.log(key);
  console.log(gildong[key]);
}

const kosaMember = ["이민영", "강신혁", "김선욱", "유지훈"];
console.log("=====================");
for (let key in kosaMember) {
  //   console.log(key);
  console.log(`${key}: ${kosaMember[key]}`);
}
for (let value of kosaMember) {
  console.log(value);
}
console.log("Cat" || "Dog"); //Cat
console.log("" || "Dog"); //Dog

let event2 = "";
event2 = event2 || "영화보기";
if (event2) {
  console.log("놀기");
} else {
  console.log("일하기");
}
