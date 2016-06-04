function save_options() {
	var user = document.getElementById('user').checked;
	var shotDescription = document.getElementById('shotDescription').checked;
	
	chrome.storage.sync.set({
		'preferences' : {
			'user': user,
			'shotDescription': shotDescription,
		}
	}, function() {
		// Update status to let user know options were saved.
		var status = document.getElementById('status');
		status.textContent = 'Settings successfully updated.';
		setTimeout(function() {
			status.textContent = '';
		}, 5000);
	});
}

// Restores select box and checkbox state using the preferences stored in chrome.storage.
function restore_options() {
	chrome.storage.sync.get({
		'preferences' : {
			'user' : true,
			'shotDescription': true,
		}
	}, function(items) {
		document.getElementById('user').checked = items.preferences.user;
		document.getElementById('shotDescription').checked = items.preferences.shotDescription;
	});
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('user').addEventListener('change', save_options);
document.getElementById('shotDescription').addEventListener('change', save_options);

