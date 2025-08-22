const validEmail = "user@example.com";
const validPassword = "123456";

document.getElementById("email").addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
		event.preventDefault();
		document.getElementById("password").focus();
	}
});

document.getElementById("password").addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
		event.preventDefault();
		document.getElementById("loginForm").requestSubmit(); // triggers submit handler below
	}
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
	event.preventDefault(); // prevent reload

	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;

	if (email === validEmail && password === validPassword) {
		console.log("Redirecting to home.html...");
		window.location.href = "../websites/home.html";
	} else {
		alert("Invalid email or password");
	}
});
