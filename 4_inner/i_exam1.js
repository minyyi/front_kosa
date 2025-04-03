/* Array 배열 */

let kosaMebers = ["현서", "지현", "유정", "효연"];

console.log(kosaMebers);

// push()

console.log(kosaMebers.push("시관")); //5
console.log(kosaMebers); //[ '현서', '지현', '유정', '효연', '시관' ]

//pop()

console.log(kosaMebers.pop()); //마지막 아웃
console.log(kosaMebers);

// shift()
console.log(kosaMebers.shift()); // 처음 아웃
console.log(kosaMebers);

// splice()
console.log(kosaMebers.splice(0, 2)); //[ '지현', '유정' ]
console.log(kosaMebers); //[ '효연' ]

// 불변성 함수
kasaMembers = ["인우", "지혜", "정윤", "지훈"];

console.log("=====================================");
console.log(kasaMembers);

// concat()
console.log("concat: ", kasaMembers.concat("서진"));
console.log(kasaMembers);

//slice()
console.log("slice: ", kasaMembers.slice(0, 2));
console.log(kasaMembers);

//배열 복사
// let kasaMembers2 = kasaMembers;
// console.log(kasaMembers2 === kasaMembers);

// kasaMembers2.push("길동");
// console.log(kasaMembers);

// spread operator
let kasaMembers2 = [...kasaMembers];
kasaMembers2.push("길동");
console.log(kasaMembers);
console.log(kasaMembers2);
console.log(kasaMembers2 === kasaMembers);

let kosamebers2 = ["민영", "신혁", ...kasaMembers, "선욱"];
console.log("kosamebers2: ", kosamebers2);

let arr = [100, 200, 300];

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...arr));

//join()
console.log(kasaMembers.join());
console.log(kasaMembers.join(" "));
console.log(kasaMembers.join("/"));

console.log(kasaMembers.sort());
console.log(kasaMembers.reverse());

const books = [
  {
    name: "이것이 자바다",
    price: 30000,
    publisher: "한빛미디어",
  },
  {
    name: "스프링 정석",
    price: 35000,
    publisher: "길벗",
  },
  {
    name: "도커의 완성",
    price: 20000,
    publisher: "이지스퍼블릭",
  },
];

/* 
 이름을 기준으로 오름차순하여 전체 출력 (for in, for of)
*/

console.log(books.sort());
// for (let book in books) {
//   console.log(book["name"]);
// }
// for (let i in books) {
//   console.log(books[i]["name"].sort());
// }
// for (let book of books) {
//   console.log("of: ", book.sort());
// }

// let nameSort =
// books.sort(function (a, b) {
//   const book1 = a.name;
//   const book2 = b.name;
//   if (book1 > book2) {
//     return 1;
//   } else if (book1 < book2) {
//     return -1;
//   } else {
//     return 0;
//   }
// });
// let priceSort = books.sort((a, b) => a.price - b.price);

// console.log(nameSort);
// books.sort((a, b) => a.name.localeCompare(b.name));
// console.log("for in을 사용한 출력:");
// for (const index in books) {
//   console.log(
//     `책 ${Number(index) + 1}: 이름 - ${books[index].name}, 가격 - ${
//       books[index].price
//     }, 출판사 - ${books[index].publisher}`
//   );
// }

books.sort((a, b) => (a.name > b.name ? 1 : -1));

books.forEach((book) => {
  console.log(
    `책이름: ${book.name}, 가격: ${book.price}, 출판사: ${book.publisher}`
  );
});

for (let i in books) {
  let book = books[i];
  console.log(
    `책이름: ${book.name}, 가격: ${book.price}, 출판사: ${book.publisher}`
  );
}

for (let book of books) {
  console.log(
    `책이름: ${book.name}, 가격: ${book.price}, 출판사: ${book.publisher}`
  );
}
