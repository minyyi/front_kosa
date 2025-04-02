// 스프링 책에 있는 예제

let replyService = (function () {
  //
  function create() {
    console.log("create");
  }
  function update() {
    console.log("update");
  }
  function getList(param, callback) {
    //분리
    let data = "결과값: " + param;
    callback(data);
  }

  return {
    create: create,
    update: update,
    getList: getList,
  };
})();

// replyService.create();
function show() {
  replyService.getList("kosa", function (result) {
    console.log("내가 원하는 형태의 출력 " + result);
    console.log(result + "가 원하는 형태의 출력");
  });
}

show();
