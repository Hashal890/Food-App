import navbar from "./navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let recipieofday = document.getElementById("recipieofday");

let getData = async () => {
  let url = `https://www.themealdb.com/api/json/v1/1/random.php`;
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
  displayData(data.meals);
};

let displayData = (data) => {
  recipieofday.innerHTML = null;
  data.forEach((el) => {
    let image = document.createElement("img");
    image.src = el.strMealThumb;
    let name = document.createElement("h3");
    name.innerText = el.strMeal;
    let desc = document.createElement("p");
    desc.innerText = `These are instructions:- ${el.strInstructions}`;
    let div = document.createElement("div");
    div.append(name, desc);
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "main");
    mainDiv.append(image, div);
    recipieofday.append(mainDiv);
  });
};

getData();
