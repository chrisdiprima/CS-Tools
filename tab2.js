let format = /[^01]/g;
let system = "Binary";

document.getElementById("num1").addEventListener("input", function () {
	this.value = this.value.replace(format, "");
	calculate();
});

document.getElementById("num2").addEventListener("input", function () {
	this.value = this.value.replace(format, "");
	calculate();
});

document.getElementById("operation").addEventListener("change", function () {
	calculate();
});

document.getElementById("format").addEventListener("change", function () {
	if (this.value == "Decimal") {
		format = /[^0-9]/g;
		system = this.value;
	} else if (this.value == "Binary") {
		format = /[^01]/g;
		system = this.value;
	} else {
		format = /[^0-9A-Fa-f]/g;
		system = this.value;
	}
	calculate();
});

function calculate() {
	if (system === "Binary") {
		let num1 = parseInt(document.getElementById("num1").value, 2) || 0;
		let num2 = parseInt(document.getElementById("num2").value, 2) || 0;

		let operation = document.getElementById("operation").value;
		let result;

		switch (operation) {
			case "AND":
				result = num1 & num2;
				break;
			case "OR":
				result = num1 | num2;
				break;
			case "XOR":
				result = num1 ^ num2;
				break;
		}

		result = parseInt(result, 10).toString(2);

		document.getElementById("bitwiseResult").textContent = result;
	} else if (system === "Decimal") {
		let num1 = parseInt(document.getElementById("num1").value, 10) || 0;
		let num2 = parseInt(document.getElementById("num2").value, 10) || 0;

		let operation = document.getElementById("operation").value;
		let result;

		switch (operation) {
			case "AND":
				result = num1 & num2;
				break;
			case "OR":
				result = num1 | num2;
				break;
			case "XOR":
				result = num1 ^ num2;
				break;
		}

		document.getElementById("bitwiseResult").textContent = result;
	} else {
		let num1 = parseInt(document.getElementById("num1").value, 16) || 0;
		let num2 = parseInt(document.getElementById("num2").value, 16) || 0;

		let operation = document.getElementById("operation").value;
		let result;

		switch (operation) {
			case "AND":
				result = num1 & num2;
				break;
			case "OR":
				result = num1 | num2;
				break;
			case "XOR":
				result = num1 ^ num2;
				break;
		}

		document.getElementById("bitwiseResult").textContent = result
			.toString(16)
			.toUpperCase();
	}
}
