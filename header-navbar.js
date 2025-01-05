document.addEventListener("DOMContentLoaded", function () {
    fetch("header-navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-navbar").innerHTML = data;
        })
        .catch(error => console.error("Error loading header-navbar:", error));
});
