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
