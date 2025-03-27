const input = document.getElementById("charInput");
const result = document.getElementById("asciiResult");

input.addEventListener("input", function () {
	const char = input.value;
	const asciiCode = char ? char.charCodeAt(0) : "";
	result.textContent = char ? `ASCII Code: ${asciiCode}` : "";
});
