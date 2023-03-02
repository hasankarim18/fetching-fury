




const loadMeals = (search='s=fish')=> {
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?"+search;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displayMeals(data)
    })
}


const displayMeals = (meals) => {
    console.log(meals);
}


loadMeals()
