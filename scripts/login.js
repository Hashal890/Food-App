import navbar from "./navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let user = JSON.parse(localStorage.getItem("user")) || [];
if (user === []) window.location.href = "signup.html";
let form = document.querySelector("form");
form.addEventListener("submit", () => {
  event.preventDefault();
  if (
    user.email === form["email"].value &&
    user.password === form["password"].value
  )
    window.location.href = "index.html";
  else alert("Enter vaild credentials!");
});
