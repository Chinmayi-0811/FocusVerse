function register() {

  let username =
    document.getElementById("newUsername").value;

  let password =
    document.getElementById("newPassword").value;

  let message =
    document.getElementById("registerMessage");

  if(
    username === ""
    ||
    password === ""
  ) {

    message.style.color =
      "red";

    message.innerText =
      "Please fill all fields";

    return;
  }

  localStorage.setItem(
    "username",
    username
  );

  localStorage.setItem(
    "password",
    password
  );

  message.style.color =
    "#00ff95";

  message.innerText =
    "Registration Successful!";

  setTimeout(() => {

    window.location.href =
      "login.html";

  }, 1000);
}