
emailjs.init("user_PJBFDAAOKfaohrJ4cf5Zm")
const btnSubint = document.querySelector("#submit")
btnSubint.addEventListener("click", () => {
  const message_ = document.querySelector("textarea[name=message]").value
  const name_ = document.querySelector("input[name=name]").value
  const templateParams = {
    name: name_,
    message: message_,
  }

  emailjs
      .send("gmail", "template_gbvy8wn", templateParams)
      //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
      // .then(
      //   function (response) {
      //     console.log("SUCCESS!", response.status, response.text);
      //   },
      //   function (error) {
      //     console.log("FAILED...", error);
      //   }
      // );
})
