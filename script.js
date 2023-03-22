const form = document.querySelector("#form");
const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  valida();
});
function valida() {
  userNameValue = userName.value;
  emailValue = email.value;
  passwordValue = password.value;
  passwordConfirmationValue = passwordConfirmation.value;

  if (userNameValue == "") {
    setErroFor(userName, "O nome do usuario é obrigatorio");
  } else {
    setSuccessFor(userName);
  }
  if (emailValue == "") {
    setErroFor(email, "O email é obrigatorio");
  } else if (!checkEmail(emailValue)) {
    setErroFor(email, "Digite um email valido");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue == "") {
    setErroFor(password, "O senha é obrigatorio");
  } else if (passwordValue.length < 7) {
    setErroFor(password, "O senha precisa ter no minimo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmationValue == "") {
    setErroFor(passwordConfirmation, "O confirmação da senha é obrigatoria");
  } else if (passwordConfirmationValue != passwordValue) {
    setErroFor(passwordConfirmation, "A senha não confere");
  } else {
    setSuccessFor(passwordConfirmation);
  }
}

function setErroFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}
function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
