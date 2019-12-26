let url =
  "https://cn.buddymojo.com/api/v1/quiz/18?type=friend&stats=1&userQuizId=1228288";

chrome.storage.sync.get(["questions", "friend"], function(result) {
  let div = document.createElement("div");
  div.innerText = result.questions;
  document.querySelector("div").appendChild(div);
  console.log("Value currently is " + result.questions);
  if (result.friend) {
    document.querySelector("h1").innerText = result.friend;
  }
});
