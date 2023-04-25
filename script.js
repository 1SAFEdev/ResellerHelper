window.onload = function () {
	var itemTitle = document.getElementById("item-title").value;
	var description = "Listing includes: " + itemTitle + " \n\nFeel free to send a reasonable offer, and I'll see what I can do." +
		"\n\nCheck out my other items to see if there is anything you would like to bundle!";
	document.getElementById("description").value = description;
}

function addListing() {
	var itemTitle = document.getElementById("item-title").value;
	var description = "Listing includes: " + itemTitle + " \n\nFeel free to send a reasonable offer, and I'll see what I can do." +
		"\n\nCheck out my other items to see if there is anything you would like to bundle!";

	document.getElementById("description").value = description;
}

function copyToClipboard(text) {
	navigator.clipboard.writeText(text);
}

document.querySelector('label[for="item-title"]').addEventListener('click', function () {
	var itemTitle = document.getElementById("item-title").value;
	copyToClipboard(itemTitle);
});

document.querySelector('label[for="description"]').addEventListener('click', function () {
	var description = document.getElementById("description").value;
	copyToClipboard(description);
});