let title = document.querySelector(
  "body > div.container > div.main-body.ng-scope > div.play.sync-page-form > div.Get-started > h2"
).outerText;

chrome.storage.sync.set({ key: value }, function() {
  console.log("Value is set to " + value);
});
