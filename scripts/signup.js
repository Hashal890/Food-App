import navbar from "./navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let user = JSON.parse(localStorage.getItem("user"));
let form = document.querySelector("form");
form.addEventListener("submit", () => {
  event.preventDefault();
  let user = {
    name: form["name"].value,
    email: form["email"].value,
    number: form["number"].value,
    password: form["password"].value,
  };
  localStorage.setItem("user", JSON.stringify(user));
  // location.reload();
  // console.log(window.location.href);
  window.location.href = "login.html";
});
