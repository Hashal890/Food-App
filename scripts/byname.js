let result = document.getElementById("result");
let id;

let debounce = (func, delay) => {
  if (id) clearTimeout(id);
  id = setTimeout(() => {
    func();
  }, delay);
};

let getData = async () => {
  let search = document.querySelector("#search").value;
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
  displayData(data.meals);
};

let displayData = (data) => {
  result.innerHTML = null;
  if (data === null)
    return (result.innerHTML = `<h1>Oops data not found!</h1>`);
  data.forEach((el) => {
    let image = document.createElement("img");
    image.src = el.strMealThumb;
    let name = document.createElement("h3");
    name.innerText = el.strMeal;
    let gredients = document.createElement("h3");
    gredients.innerText = `Used gredients are:- ${el.strIngredient1}, ${el.strIngredient2}, ${el.strIngredient3}, ${el.strIngredient4}, ${el.strIngredient5}, ${el.strIngredient6}, ${el.strIngredient7}, ${el.strIngredient8}, ${el.strIngredient9}, ${el.strIngredient10}`;
    let div = document.createElement("div");
    div.append(image, name, gredients);
    result.append(div);
  });
};
