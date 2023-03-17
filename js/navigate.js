const form = document.getElementById("contact-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  sendEmail();
});

function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  Email.send({
    SecureToken: "xnnprxihxesqnyez",
    From: email,
    To: "cyberantproject@gmail.com",
    Subject: subject,
    Body: "Name: " + name + "<br>Email: " + email + "<br>Message: " + message,
  }).then(function (response) {
    if (response == "OK") {
      alert("Thank you for your message. We will get back to you soon!");
      form.reset();
    } else {
      alert("Something went wrong. Please try again later.");
    }
  });
}
