const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  sendEmail(name, email, message);
});

const sendEmail = (name, email, message) => {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "uzor1997@gmail.com",
    password: "bemzqraelafthtmx",
    To: "uzor1997@gmail.com",
    From: "uzor1997@gmail.com",
    Subject: `${name} sent you a message from your website`,
    Body: `Name: ${name} <br /> Email: ${email} <br /> Message: ${message}`,
  }).then((message) => alert("message successfully sent"));
};
