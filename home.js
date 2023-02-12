(() => {
  document
    .querySelector("#search-input")
    .addEventListener("keyup", function (e) {
      const keyWord = this.value;
      const searchResult = document.querySelector("#search-result");
      if (keyWord.length > 0) {
        searchResult.classList.add("show");
        searchResult.innerHTML = `<li><a class="dropdown-item" href="#">Loading ...</a></li>`;
      } else {
        searchResult.classList.remove("show");
        searchResult.innerHTML = "";
      }

      keyWord &&
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=" + keyWord)
          .then((res) => res.json())
          .then((data) => {
            const meals = data["meals"];
            const mealsEle = meals.reduce((acc, meal) => {
              return (
                acc +
                `
                    <li>
                        <a class="dropdown-item d-inline" href="/meals.html?meal-id=${meal.idMeal}">${meal.strMeal}</a>
                        <button class="btn btn-success btn-sm p-1 m-1 fav-icon">+</button>
                    </li>`
              );
            }, "");
            searchResult.innerHTML = mealsEle;

            document.querySelectorAll(".fav-icon").forEach((favIcon) =>
              favIcon.addEventListener("click", function (e) {
                const mealId = this.parentNode
                  .querySelector("a")
                  .href.split("=")[1];
                const favMeals =
                  JSON.parse(localStorage.getItem("favMeals")) || [];
                if (!favMeals.includes(mealId)) favMeals.push(mealId);
                localStorage.setItem("favMeals", JSON.stringify(favMeals));

                this.classList.add("disable");
                this.innerHTML = "Added";
              })
            );
          })
          .catch((err) => {
            // when no result found it throws an error, using it to show no result found
            console.log(err);
            searchResult.innerHTML = `<li><a class="dropdown-item" href="#">No result found!</a></li>`;
          });
    });
})();
