// Add the target _blank to the links
addTargetToLinks();

// rerun script after change of the dom
var timeout = null;
document.addEventListener("DOMSubtreeModified", function() {
    if(timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(addTargetToLinks, 100);
}, false);

function addTargetToLinks() {
	chrome.storage.sync.get({
		'preferences' : {
			'profiles' : false,
			'shotDescription': true,
		}
	}, function(options) {
		if (!chrome.runtime.error) {
			// User Profiles
			var profiles = document.getElementsByClassName('user')[0];
			var comments = document.getElementsByClassName('comments')[0];
			var buy = document.getElementsByClassName('buy')[0];
			if(options.preferences.profiles) {
				if(profiles != null) {
					setAttributeOfElements(profiles.querySelectorAll('a'), 'target', '_blank')
				}
				if(comments != null) {
					setAttributeOfElements(comments.querySelectorAll('a.url'), 'target', '_blank')
				}
				if(buy != null) {
					setAttributeOfElements(buy.querySelectorAll('a'), 'target', '_blank')
				}
			}

			// Links in Shot Descriptions
			var shotDescription = document.getElementsByClassName('shot-desc')[0];
			if(options.preferences.shotDescription && shotDescription != null) {
				setAttributeOfElements(shotDescription.querySelectorAll('a'), 'target', '_blank')
			}
		}
	});
}

function setAttributeOfElements(elements, attributeName, attributeValue) {
	for (var i=0; i < elements.length; i++) {
		elements[i].setAttribute(attributeName, attributeValue);
	}	
}