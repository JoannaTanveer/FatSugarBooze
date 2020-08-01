let drinksView = document.getElementById("id for div where drinks will populate")
let submitButton = document.getElementById("id for submit/search button");

let userInput = vodka
$("#drinksView").empty()


let apiKeyBooze = '1';
let queryURLBooze = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ userInput }`;




$.ajax({
    url: queryURLBooze,
    method: "GET"
}).then(function(response) {
    console.log(response);

    // create an element for each item to be displayed
    var drink = $("<div>");
    drink.addClass("drink-name");   
    drinks.text(response.drinks.strDrink);
    $("#drinksView").append(drinks);

    // thumbnail image
    var drinkThumb = $("<div>");
    drinkThumb.addClass("drink-thumbnail");
    drinkThumb.text(response.drink.strThumb);

    // ingredient1,2,3
    var ingredientOne = $("<div>");
    ingredientOne.addClass("ingredient-one");
    ingredientOne.text(response.drinks.strIngredient1);

    var ingredientTwo = $("<div>");
    ingredientTwo.addClass("ingredient-two");
    ingredientTwo.text(response.drinks.strIngredient2);

    var ingredientThree = $("<div>");
    ingredientThree.addClass("ingredient-three");
    ingredientThree.text(response.drinks.strIngredient3);

    // instructions
    var instructions = $("<div>");
    instructions.addClass("instructions");
    instructions.text(response.drinks.strInstructions);

    // measurements
    var measurementsOne = $("<div>");
    measurementsOne.addClass("measurements-one");
    measurementsOne.text(response.drinks.strMeasure1)

    var measurementsTwo = $("<div>");
    measurementsTwo.addClass("measurements-two");
    measurementsTwo.text(response.drinks.strMeasure2)

    var measurementsThree = $("<div>");
    measurementsThree.addClass("measurements-three");
    measurementsThree.text(response.drinks.strMeasure3)
})

const spoonSearch = 'beef'
const apiKeySpoon = "85dd435db770493c8aedbd1a1e12e596";

var queryURLSpoon = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKeySpoon}&ingredients=beef,+cheddar&number=2`;

$.ajax({
    url: queryURLSpoon,
    method: "GET"
}).then(function(response) {
    console.log(response)
})







































var ingredientButton= document.getElementById('addBtn');

ingredientButton.addEventListener ('click', function(event){
    event.preventDefault();
    var userEntry= document.getElementById('userInput');
    console.log(userEntry.value, 'Henry');
    
})
    
   