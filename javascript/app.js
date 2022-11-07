// Credits to W3schools

// Get modal element and make it a variable
let modal = document.getElementById('dogmodal');

// Get button element that opens modal
let button = document.getElementById('button');

// Get Close element that closes modal
let close = document.getElementsByClassName('close')[0];

// Open modal when clicked
button.onclick = function () {
	modal.style.display = 'block';
};

// Close modal when clicked
close.onclick = function () {
	modal.style.display = 'none';
};

// Close when clicked outside of modal
window.onclick = function (event) {
	if (event.target === modal) {
		modal.style.display = 'none';
	}
};