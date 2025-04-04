/* 정규표현식 */

//1. 문자열.match(RegExp) => 매칭된 결과 (문자열)리턴
// const result = "sports".match(/sp/);
// console.log(result);

//2. RegExp.exec('string') => 매칭된 결과(string) 리턴
// const str = "alsdmfa spoie dfjsarse wklfaslkdajsdfasdJSfazverw";
// const re = /js/gi; //flag -i:대소문자 구분없이, g: 전역검사
// let result = re.exec(str);

// while (result) {
//   console.log(result);
//   result = re.exec(str);
// }
// Q April 3 2025 뽑아내기

// const str = "This is a data : April 3 2025";
// const re = /\w*\s\d+\s\d+/;
// // let result = re.exec(str);
// let result = str.match(re);
// console.log(result);

// string.replace(regexp, 변경 문자열)
// const str = "오늘 우리는 SW세상에 살고 있다. sw가 매우 중요하다.";
// const result = str.replace(/sw/gi, "소프트웨어");
// console.log(result);

// email check!
// const re = /^[a-zA-Z]+\w*@[a-zA-Z]{3,5}.[a-zA-Z]{2,3}$/;
const re = /^\D\w+\w@\w+.\w{2,3}$/gi;
const str = "ymy0613@gmail.com";
console.log(re.test("ymy0613@gmail.com"));
console.log(re.test("0613@gmail.com"));
console.log(re.test("ymy0613gmail.com"));
console.log(re.test("ymy0613@gl.com"));
console.log(re.test("ymy0613@gmail.comsdfgsdf"));
const result = re.test(str);

if (result) {
  console.log("정상");
} else {
  console.log("비정상");
}
