(() => {
    const favMeals = JSON.parse(localStorage.getItem("favMeals")) || {};
    let favMealsEle = ""
    for (const mealId in favMeals) {
        favMealsEle += `<li class="list-group-item"><a class="dropdown-item d-inline" href="/meals.html?meal-id=${mealId}">${favMeals[mealId]}</a><button class="btn btn-danger float-end">Remove</button></li>`
    }

    document.querySelector("#fav-meals").innerHTML = favMealsEle;

    //logic to remove meal from favorite from list
    document.querySelectorAll(".btn-danger").forEach(
        btn => btn.addEventListener("click", function(e){
            const mealId = this.parentNode.querySelector("a").href.split("=")[1];
            const favMeals = JSON.parse(localStorage.getItem("favMeals")) || {};
            delete favMeals[mealId];
            localStorage.setItem("favMeals", JSON.stringify(favMeals));
            this.parentNode.remove();
        })
    );

  })();
  