var registrationForm = document.getElementById("registrationForm");
var formMessage = document.getElementById("formMessage");

if (registrationForm) {
    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (formMessage) {
            formMessage.textContent = "Thank you! Your Smart Rent registration has been submitted successfully.";
        }

        registrationForm.reset();
    });
}
