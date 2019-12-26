chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (details.url.includes("friends")) {
      debugger;
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
