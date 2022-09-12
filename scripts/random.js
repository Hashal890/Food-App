import navbar from "./navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let randomData = document.getElementById("random");

let getData = async () => {
  //   let mainUrl = `https://www.themealdb.com/api/json/v1/1/categories.php?`;
  //   let mainRes = await fetch(mainUrl);
  //   let mainData = await mainRes.json();
  //   console.log(mainData);
  //   let number = Math.round(Math.random() * 10);
  //   let category = mainData.categories[number];
  //   console.log(category);
  let arr = new Array(15);
  for (let i = 0; i < arr.length; i++) {
    let url = `https://www.themealdb.com/api/json/v1/1/random.php`;
    let res = await fetch(url);
    let data = await res.json();
    arr[i] = data.meals[0];
  }
  console.log(arr);
  displayData(arr);
};

let displayData = (arr) => {
  randomData.innerHTML = null;
  arr.forEach((el) => {
    let image = document.createElement("img");
    image.src = el.strMealThumb;
    let name = document.createElement("h3");
    name.innerText = el.strMeal;
    let div = document.createElement("div");
    div.append(image, name);
    randomData.append(div);
  });
};

getData();
