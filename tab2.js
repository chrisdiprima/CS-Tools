document.getElementById("num1").addEventListener("input", function () {
	this.value = this.value.replace(/[^01]/g, "");
	calculate();
});

document.getElementById("num2").addEventListener("input", function () {
	this.value = this.value.replace(/[^01]/g, "");
	calculate();
});

document.getElementById("operation").addEventListener("change", function () {
	if (document.getElementById("operation").value === "NOT") {
		document.getElementById("num2").style.display = "none";
	} else {
		document.getElementById("num2").style.display = "block";
	}
	calculate();
});

function calculate() {
	let num1 = parseInt(document.getElementById("num1").value, 2) || 0;
	let num2 = parseInt(document.getElementById("num2").value, 2) || 0;

	console.log(num1);
	console.log(num2);

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
		case "NOT":
			result = ~num1;
			break;
	}

	result = parseInt(result, 10).toString(2);

	document.getElementById("bitwiseResult").textContent = result;
}
