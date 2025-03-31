document.getElementById("tab1").onclick = (e) => {
	window.location.href = chrome.runtime.getURL("../number-converter.html");
};

document.getElementById("tab2").onclick = (e) => {
	window.location.href = chrome.runtime.getURL("../bitwise-calculator.html");
};

document.getElementById("tab3").onclick = (e) => {
	window.location.href = chrome.runtime.getURL("../ascii-converter.html");
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
