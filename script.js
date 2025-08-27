//your JS code here. If required.
const form = document.getElementById("userForm");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent default form submission

      const age = document.getElementById("age").value.trim();
      const name = document.getElementById("name").value.trim();

      // 1️⃣ Validation
      if (age === "" || name === "") {
        alert("Please enter valid details.");
        return;
      }

      // 2️⃣ Promise with chaining
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (parseInt(age) > 18) {
            resolve(`Welcome, ${name}. You can vote.`);
          } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
          }
        }, 4000); // 4-second delay
      })
      .then((message) => {
        // First .then handles success
        alert(message);
        return "Validation complete. Proceeding...";
      })
      .then((nextStep) => {
        // Second .then continues the chain
        console.log(nextStep);
        alert("Thank you for using our service.");
      })
      .catch((error) => {
        // Handles rejection
        alert(error);
      })
      .finally(() => {
        // Always runs
        console.log("Form submission attempt finished.");
      });
    });

