function loop() {
  let splittedH2 = document
    .querySelector(
      "body > div.container > div.main-body.ng-scope > div.play.sync-page-form > div.Get-started > h2"
    )
    .outerText.split(" ");
  if (splittedH2.length > 1) {
    let friend = splittedH2[0];
    alert(friend);
    setFriend(friend);
    return;
  }
  setTimeout(loop, 1000);
}

function setFriend(friend) {
  chrome.storage.sync.set({ friend }, () => {
    console.log("Title is set to " + friend);
  });
}

loop();
