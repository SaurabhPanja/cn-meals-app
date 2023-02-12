# Meals App

### Problem statement.

Create a meal app to store and search meals. Use ONLY vanilla javascript, no libraries or frameworks allowed for Javascript (you can use any css framework like Bootstrap).

---

The app is built using html, css, vanilla javascript and boostrap.

The utilizes free api available from https://www.themealdb.com/

The app has 3 routes. They are as follow

* / 
    * `homepage` has a search box, you can search a dish and it will show the result of the search in real-time.
    * On clicking on the result it will take you to the details page of that meal.


* /meals.html?meal-id={meal-id}
    * See details of a meal, it take meal-id as a get parameter.
    * The route is used by the search page to populate the search result with a generated link. When the link is clicked with `meal-id` populated in the search result. This route handles it and loads the details page for the mea.

* /fav.html
    * See list of all favourite meals here.
    * You can remove favorite meals from here.

