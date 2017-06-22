chrome.runtime.onInstalled.addListener(function (object) {
    // Save default settings
    chrome.storage.sync.set({
    	'preferences' : {
    		'user': true,
    		'shotDescription': true,
    	}
    });

    // Open Success Message
    chrome.tabs.create({url: "../html/options.html?installation=success"}, function (tab) {});
});