// Get the input fields and button
const purchaseField = document.getElementById("purchaseField");
const shippingField = document.getElementById("shippingField");
const sellField = document.getElementById("sellField");
const calculateButton = document.getElementById("calculateButton");

// Get the result and profit labels
const resultLabel = document.getElementById("resultLabel");
const profitLabel = document.getElementById("profitLabel");
const roiLabel = document.getElementById("roiLabel");

// Add event listener to the Calculate button
calculateButton.addEventListener("click", () => {
	calculatePercentage();
});

function calculatePercentage() {
	try {
		const purchasePrice = parseFloat(purchaseField.value);
		const shippingCostInput = shippingField.value;
		const shippingCost = shippingCostInput ? parseFloat(shippingCostInput) : 0;
		const sellPrice = parseFloat(sellField.value);
		const difference = (sellPrice * 0.84) - purchasePrice - shippingCost;
		const percentage = ((purchasePrice + shippingCost) / sellPrice) * 100;
		const roi = (difference / purchasePrice) * 100;

		let roiColor = "";
		if (roi >= 70) {
			roiColor = "green";
		} else if (roi >= 30) {
			roiColor = "orange";
		} else {
			roiColor = "red";
		}

		let profitColor = "";
		if (difference > 0) {
			profitColor = "green";
		} else {
			profitColor = "red";
		}

		resultLabel.innerText = `The buy price is ${percentage.toFixed(2)}% of the sell price.`;

		profitLabel.innerText = `The profit after 16% fees is $${difference.toFixed(2)}.`;
		profitLabel.style.color = profitColor;

		roiLabel.innerText = `The ROI is ${roi.toFixed(2)}%.`;
		roiLabel.style.color = roiColor;

	} catch (error) {
		// Handle errors here
	}
}