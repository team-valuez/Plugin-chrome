function scanCurrentTab() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const currentUrl = tabs[0].url;
      document.getElementById('currentUrl').textContent = currentUrl;
      chrome.tabs.executeScript(
        tabs[0].id,
        { file: 'contentScript.js' },
        function() {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
          }
        }
      );
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    scanCurrentTab();
  });
  