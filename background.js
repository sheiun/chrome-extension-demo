chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.contentScriptQuery == "getAnswers") {
    debugger;
    let url = request.url;
    fetch(url)
      .then(response => response.json())
      .then(response => response.data.questions) // array
      .then(questions => questions.map(q => q.choosenOption))
      .then(response => sendResponse(response))
      .catch();
    return true;
  }
});

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (details.url.includes("friends")) {
      fetch(details.url.replace("friends", "friend"))
        .then(r => r.json())
        .then(r => r.data.questions) // array
        .then(r => r.map(q => q.choosenOption))
        .then(r => {
          chrome.storage.sync.set({ questions: r }, () => {
            console.log("questions is set to " + r.toString());
          });
        });
    }
  },
  { urls: ["*://*.buddymojo.com/api/v1/quiz/18*"] }
);
