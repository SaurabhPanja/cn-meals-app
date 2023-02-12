(() => {
  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);
  const meadId = urlParams.get("meal-id");

  meadId &&
    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + meadId)
      .then((res) => res.json())
      .then((data) => {
        const meal = data["meals"][0];
        const name = meal.strMeal;
        const img = meal.strMealThumb;
        const instructions = meal.strInstructions;
        document.querySelector("#meal-card").innerHTML = `
        <div class="card p-2">
                <img src="${img}" class="card-img-top m-auto p-2" id="meal-img">            
                <h5 class="card-title text-center">${name}</h5>
                <hr>
                <h6 class="card-subtitle mb-2 text-muted">Instructions</h6>
                <p class="card-text" id="meal-instruction">${instructions}</p>
        </div>
        `;
      })
      .catch((err) => {
        document.querySelector(
          ".container"
        ).innerHTML = `An error occured while looking for the meal with meal-id ${meadId}!`;
      });
})();
