document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userform");

    form.addEventListener("submit", handleSubmit);
});

function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const age = document.getElementById("age").value.trim();
    const name = document.getElementById("name").value.trim();

    // Validate inputs
    if (!validateInputs(age, name)) return;

    // Process the promise
    processAgePromise(age, name);
}

function validateInputs(age, name) {
    if (age === "" || name === "") {
        alert("Please enter valid details.");
        return false;
    }
    return true;
}

function processAgePromise(age, name) {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (parseInt(age) >= 18) { // Change to >= 18
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000); // 4-second delay
    })
    .then(showSuccessMessage)
    .catch(showErrorMessage)
    .finally(() => console.log("Form submission attempt finished."));
}

function showSuccessMessage(message) {
    alert(message);
    console.log("Validation complete. Proceeding...");
    alert("Thank you for using our service.");
}

function showErrorMessage(error) {
    alert(error);
}