(()=>{

    document.querySelector("#search-input").addEventListener("keyup", function(e){
        const keyWord = this.value;
        console.log("loading..")
        keyWord && fetch("https://www.themealdb.com/api/json/v1/1/search.php?f="+keyWord)
        .then(res=>res.json())
        .then(data=>{
            const meals = data['meals'];
            const mealsEle = meals.reduce((acc, meal )=> {
                return (
                    acc + `<li> ${meal.strMeal}</li>`
                )
            }, "");
            console.log(mealsEle)
        })
        .catch(err=>{
            console.log("No result found!")
        })
    });
})();