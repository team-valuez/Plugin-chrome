hrome.browserAction.onClicked.addListener(function(tab) {
  chrome.windows.getCurrent(function(window) {
    var updateInfo = {
      width: 400,
      height: 600
    };
    chrome.windows.update(window.id, updateInfo);
  });
});