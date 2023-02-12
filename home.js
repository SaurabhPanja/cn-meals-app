(()=>{

    document.querySelector("#search-input").addEventListener("keyup", function(e){
        const keyWord = this.value;
        const searchResult = document.querySelector("#search-result");
        if(keyWord.length > 0){
            searchResult.classList.add("show");
            searchResult.innerHTML = `<li><a class="dropdown-item" href="#">Loading ...</a></li>`
        }else{
            searchResult.classList.remove("show");
            searchResult.innerHTML = "";
        }


        keyWord && fetch("https://www.themealdb.com/api/json/v1/1/search.php?f="+keyWord)
        .then(res=>res.json())
        .then(data=>{
            const meals = data['meals'];
            const mealsEle = meals.reduce((acc, meal )=> {
                return (
                    acc + `
                    <li>
                        <a class="dropdown-item d-inline" href="/meals.html?meal-id=${meal.idMeal}">${meal.strMeal}</a>
                        <span class="fav-icon">+</span>
                        <span class="unfav-icon">-</span>
                    </li>`
                )
            }, "");
            searchResult.innerHTML = mealsEle;
            // console.log(meals)
        })
        .catch(err=>{
            searchResult.innerHTML = `<li><a class="dropdown-item" href="#">No result found!</a></li>`
        })
    });
})();