
// let userSearch = userEntry.value.trim();
let apiKeyBooze = '1';
let queryURLBooze = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ userSearch }`;
let ingredientsURLBooze = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ userSearch }`



$.ajax({
    url: queryURLBooze,
    method: "GET"
}).then(function(response) {
    console.log(response);
    // console.log(response.drinks[0].strDrink)
  

    // create an element for each item to be displayed
for (i = 0; i < response.drinks.length; i++){
    var drink = document.getElementById("drinksView");
    var drinkName = response.drinks[i].strDrink;  
    var displayDrinkName = document.createElement("p");
    displayDrinkName.textContent = drinkName;
    drink.appendChild(displayDrinkName);
    
    var drinkThumb = document.getElementById("drinksView");
    var drinkThumbnail = response.drinks[i].strDrinkThumb;
    var displayThumbnail = document.createElement("img");
    displayThumbnail.src= drinkThumbnail;
    drink.appendChild(displayThumbnail);

    var drinkInstructions = document.getElementById("drinksView")
    var instructions = response.drinks[i].strInstructions;
    var displayInstructions = document.createElement("p");
    displayInstructions.textContent = instructions;
    drink.appendChild(displayInstructions);

    var drinkIngredients = document.getElementById("drinksView");
    var ingredients = response.drinks[i].strIngredient1;
    var displayIngredients = document.createElement("p")
    displayIngredients.textContent = ingredients;
    drink.appendChild(displayIngredients);

    if (ingredients === null, function(){
        displayIngredients.addClass("display");
    });
        
    var drinkIngredients = document.getElementById("drinksView");
    var ingredients = response.drinks[i].strIngredient2;
    var displayIngredients = document.createElement("p")
    displayIngredients.textContent = ingredients;
    drink.appendChild(displayIngredients);

    if (ingredients === null, function(){
        displayIngredients.addClass("display");
    }); 
        
    

    var drinkIngredients = document.getElementById("drinksView");
    var ingredients = response.drinks[i].strIngredient3;
    var displayIngredients = document.createElement("p")
    displayIngredients.textContent = ingredients;
    drink.appendChild(displayIngredients);

    if (ingredients === null, function(){
        displayIngredients.addClass("display");
    });
        

    var drinkIngredients = document.getElementById("drinksView");
    var ingredients = response.drinks[i].strIngredient4;
    var displayIngredients = document.createElement("p")
    displayIngredients.textContent = ingredients;
    drink.appendChild(displayIngredients);

    if (ingredients === null, function(){
        displayIngredients.addClass("display");
    }); 
        
    

    var drinkIngredients = document.getElementById("drinksView");
    var ingredients = response.drinks[i].strIngredient5;
    var displayIngredients = document.createElement("p")
    displayIngredients.textContent = ingredients;
    drink.appendChild(displayIngredients);

    if (ingredients === null, function() {
        displayIngredients.addClass("display");
    });      

    var drinkIngredients = document.getElementById("drinksView");
    var ingredients = response.drinks[i].strIngredient6;
    var displayIngredients = document.createElement("p")
    displayIngredients.textContent = ingredients;
    drink.appendChild(displayIngredients);

    if (ingredients === null, function() {
        displayIngredients.addClass("display");
    });
        
    

    var drinkMeasurements = document.getElementById("drinksView");
    var measurements = response.drinks[i].strMeasure1;
    var displayMeasurements = document.createElement("p");
    displayMeasurements.textContent = measurements;
    drink.appendChild(displayMeasurements);

    if (measurements === null, function() {
        displayMeasurements.addClass("display");
    });

    var drinkMeasurements = document.getElementById("drinksView");
    var measurements = response.drinks[i].strMeasure2;
    var displayMeasurements = document.createElement("p");
    displayMeasurements.textContent = measurements;
    drink.appendChild(displayMeasurements);

    if (measurements === null, function() {
        displayMeasurements.addClass("display");
    });

    var drinkMeasurements = document.getElementById("drinksView");
    var measurements = response.drinks[i].strMeasure3;
    var displayMeasurements = document.createElement("p");
    displayMeasurements.textContent = measurements;
    drink.appendChild(displayMeasurements);

    if (measurements === null, function() {
        displayMeasurements.addClass("display");
    });
    
    var drinkMeasurements = document.getElementById("drinksView");
    var measurements = response.drinks[i].strMeasure4;
    var displayMeasurements = document.createElement("p");
    displayMeasurements.textContent = measurements;
    drink.appendChild(displayMeasurements);

    if (measurements === null, function() {
        displayMeasurements.addClass("display");
    });

    var drinkMeasurements = document.getElementById("drinksView");
    var measurements = response.drinks[i].strMeasure5;
    var displayMeasurements = document.createElement("p");
    displayMeasurements.textContent = measurements;
    drink.appendChild(displayMeasurements);

    if (measurements === null, function() {
        displayMeasurements.addClass("display");
    });

    var drinkMeasurements = document.getElementById("drinksView");
    var measurements = response.drinks[i].strMeasure6;
    var displayMeasurements = document.createElement("p");
    displayMeasurements.textContent = measurements;
    drink.appendChild(displayMeasurements);

    if (measurements === null, function() {
        displayMeasurements.addClass("display");
    });
}
  
});




const spoonSearch = 'beef'
const apiKeySpoon = "85dd435db770493c8aedbd1a1e12e596";

var queryURLSpoon = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKeySpoon}&ingredients=beef,+cheddar&number=2`;

$.ajax({
    url: queryURLSpoon,
    method: "GET"
}).then(function(response) {
    console.log(response)
})
