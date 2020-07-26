var apiKeyBooze = "1"
var queryURLBooze = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"

$.ajax({
    url: queryURLBooze,
    method: "GET"
}).then(function(response) {
    console.log(response)
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