let result = document.getElementById("result");
let id;

let debounce = (func,delay)=>{
    if(id) clearTimeout(id);
    id = setTimeout(() => {
        func();
    }, delay);
}

let getData = async ()=>{
    let search = document.querySelector("#search").value;
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    displayData(data.meals);
}

let displayData = (data)=>{
    result.innerHTML = null;
    if(data===null) return result.innerHTML = `<h1>Oops data not found!</h1>`;
    data.forEach((el)=>{
        let image = document.createElement("img");
        image.src = el.strMealThumb;
        let name = document.createElement("h3");
        name.innerText = el.strMeal;
        let gredients = document.createElement("h3");
        gredients.innerText = `Used gredients are:- ${el.strIngredient1}, ${el.strIngredient2}, ${el.strIngredient3}, ${el.strIngredient4}, ${el.strIngredient5}, ${el.strIngredient6}, ${el.strIngredient7}, ${el.strIngredient8}, ${el.strIngredient9}, ${el.strIngredient10}`;
        let div = document.createElement("div");
        div.append(image,name,gredients);
        result.append(div);
    });
}

// idMeal: "53010"
// strArea: "Greek"
// strCategory: "Lamb"
// strCreativeCommonsConfirmed: null
// strDrinkAlternate: null
// strImageSource: null
// strIngredient1: "Bulgur Wheat"
// strIngredient2: "Lamb Mince"
// strIngredient3: "Cumin"
// strIngredient4: "Coriander"
// strIngredient5: "Paprika"
// strIngredient6: "Garlic"
// strIngredient7: "Olive Oil"
// strIngredient8: "Bun"
// strIngredient9: "Cucumber"
// strIngredient10: "Greek Yogurt"
// strIngredient11: "Mint"
// strInstructions: "Tip the bulghar into a pan, cover with water and boil for 10 mins. Drain really well in a sieve, pressing out any excess water.\r\n\r\nTo make the tzatziki, squeeze and discard the juice from the cucumber, then mix into the yogurt with the chopped mint and a little salt.\r\n\r\nWork the bulghar into the lamb with the spices, garlic (if using) and seasoning, then shape into 4 burgers. Brush with a little oil and fry or barbecue for about 5 mins each side until cooked all the way through. Serve in the buns (toasted if you like) with the tzatziki, tomatoes, onion and a few mint leaves."
// strMeal: "Lamb Tzatziki Burgers"
// strMealThumb: "https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg"
// strMeasure1: "25g"
// strMeasure2: "500g"
// strMeasure3: "1 tsp "
// strMeasure4: "1 tsp "
// strMeasure5: "1 tsp "
// strMeasure6: "1 clove finely chopped"
// strMeasure7: "For frying"
// strMeasure8: "4"
// strMeasure9: "Grated"
// strMeasure10: "200g"
// strMeasure11: "2 tbs"
// strSource: "https://www.bbcgoodfood.com/recipes/lamb-burgers-tzatziki"
// strTags: null
// strYoutube: "https://www.youtube.com/watch?v=s7_TF4ZHjPc"