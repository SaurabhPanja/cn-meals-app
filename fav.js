(() => {
    const favMeals = JSON.parse(localStorage.getItem("favMeals")) || [];
    let favMealsEle = ""
    for (const mealId in favMeals) {
        favMealsEle += `<li class="list-group-item"><a class="dropdown-item d-inline" href="/meals.html?meal-id=${mealId}">${favMeals[mealId]}</a><button class="btn btn-danger float-end">Remove</button></li>`
    }

    document.querySelector("#fav-meals").innerHTML = favMealsEle;

  })();
  