document.getElementById("tab1").onclick = (e) => {
	window.location.href = chrome.runtime.getURL("../number-converter.html");
};

document.getElementById("tab2").onclick = (e) => {
	window.location.href = chrome.runtime.getURL("../bitwise-calculator.html");
};

document.getElementById("tab3").onclick = (e) => {
	window.location.href = chrome.runtime.getURL("../ascii-converter.html");
};
