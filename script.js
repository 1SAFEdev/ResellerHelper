window.onload = function () {
	var itemTitle = document.getElementById("item-title").value;
	var description = "Listing includes: " + itemTitle + " \n\nFeel free to send a reasonable offer, and I'll see what I can do." +
		"\n\nCheck out my other items to see if there is anything you would like to bundle!\n\nAll recorded measurements are approximate! Please view all pictures before purchasing!";
	document.getElementById("description").value = description;
}

function addListing() {
	var itemTitle = document.getElementById("item-title").value;
	var description = "Listing includes: " + itemTitle + " \n\nFeel free to send a reasonable offer, and I'll see what I can do." +
		"\n\nCheck out my other items to see if there is anything you would like to bundle!\n\nAll recorded measurements are approximate! Please view all pictures before purchasing!";
	var descriptionOption = document.getElementById("description-option").value;

	switch (descriptionOption) {
		case "Mercari":
			description = "Listing includes: " + itemTitle + " \n\nAll measurements are approximate and please view all pictures before purchasing! :)\n\nReturn policy\nIf your item does not fit, we offer free 30 day returns! Please note that the item must be returned in the exact condition it was shipped out. We request that you select 'Item does not fit' when opening a return. Thank you!";
			break;
		case "Ebay":
			description = "Listing includes: " + itemTitle + " \n\nPlease view all pictures before purchasing! :) \n\nReturn Policy \nIf you are unhappy with your item or if it doesn't fit, don't worry because we offer free 30-day returns! Please note that the item must be returned in the exact condition it was shipped out. Thank you! :)";
			break;
		default:
			description;
			break;
	}

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