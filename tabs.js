document.getElementById("tab1").onclick = (e) => {
	window.location.href = chrome.runtime.getURL("tab1.html");
};

document.getElementById("tab2").onclick = (e) => {
	window.location.href = chrome.runtime.getURL("tab2.html");
};

document.getElementById("tab3").onclick = (e) => {
	window.location.href = chrome.runtime.getURL("tab3.html");
};
