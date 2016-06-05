chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({url: "../html/options.html?installation=success"}, function (tab) {
    });
});