document.getElementById("decimal").addEventListener("input", function () {
	this.value = this.value.replace(/[^0-9]/g, "");
	convertFromDecimal();
});

document.getElementById("binary").addEventListener("input", function () {
	this.value = this.value.replace(/[^01]/g, "");
	convertFromBinary();
});

document.getElementById("hex").addEventListener("input", function () {
	this.value = this.value.replace(/[^0-9A-Fa-f]/g, "").toUpperCase();
	convertFromHex();
});

function resetIfEmpty() {
	document.getElementById("decimal").value = "";
	document.getElementById("binary").value = "";
	document.getElementById("hex").value = "";
}

function convertFromDecimal() {
	let decimal = document.getElementById("decimal").value;
	if (decimal === "") return resetIfEmpty();
	document.getElementById("binary").value = parseInt(decimal, 10).toString(2);
	document.getElementById("hex").value = parseInt(decimal, 10)
		.toString(16)
		.toUpperCase();
}

function convertFromBinary() {
	let binary = document.getElementById("binary").value;
	if (binary === "") return resetIfEmpty();
	document.getElementById("decimal").value = parseInt(binary, 2);
	document.getElementById("hex").value = parseInt(binary, 2)
		.toString(16)
		.toUpperCase();
}

function convertFromHex() {
	let hex = document.getElementById("hex").value.toUpperCase();
	if (hex === "") return resetIfEmpty();
	document.getElementById("decimal").value = parseInt(hex, 16);
	document.getElementById("binary").value = parseInt(hex, 16).toString(2);
}
