const form = document.querySelector(".login-form");

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const pass = formElements.password.value;

  if (mail === "" || pass === "") {
    return alert("Всі поля повинні бути заповнені.");
  }
  const formData = {
    mail,
    pass,
  };
  console.log(formData);
  event.currentTarget.reset();
}
