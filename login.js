function login() {

  let username =
    document.getElementById("username").value;

  let password =
    document.getElementById("password").value;

  let savedUsername =
    localStorage.getItem("username");

  let savedPassword =
    localStorage.getItem("password");

  let message =
    document.getElementById("message");

  if(
    username === savedUsername
    &&
    password === savedPassword
  ) {

    message.style.color =
      "#00ff95";

    message.innerText =
      "Login Successful!";

    setTimeout(() => {

      window.location.href =
        "dashboard.html";

    }, 1000);

  } else {

    message.style.color =
      "red";

    message.innerText =
      "Invalid Username or Password";
  }
}