let url =
  "https://cn.buddymojo.com/api/v1/quiz/18?type=friend&stats=1&userQuizId=1228288";

// chrome.runtime.sendMessage(
//   { url, contentScriptQuery: "getAnswers" },
//   response => {
//     let div = document.createElement("div");
//     div.innerText = response;
//     document.querySelector("div").appendChild(div);
//   }
// );

chrome.storage.sync.get(["questions"], function(result) {
  let div = document.createElement("div");
  div.innerText = result.questions;
  document.querySelector("div").appendChild(div);
  console.log("Value currently is " + result.questions);
});
