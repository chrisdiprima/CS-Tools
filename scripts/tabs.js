document.getElementById("tab1").onclick = (e) => {
	window.location.href = "../number-converter.html"; // Use relative path
};

document.getElementById("tab2").onclick = (e) => {
	window.location.href = "../bitwise-calculator.html"; // Use relative path
};

document.getElementById("tab3").onclick = (e) => {
	window.location.href = "../ascii-converter.html"; // Use relative path
};

document.querySelectorAll("input").forEach((input) => {
	input.addEventListener("focus", function () {
		this.dataset.placeholder = this.placeholder;
		this.placeholder = "";
	});

	input.addEventListener("blur", function () {
		this.placeholder = this.dataset.placeholder;
	});
});
