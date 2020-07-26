var apiKeyBooze = "1"
var queryURLBooze = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"

$.ajax({
    url: queryURLBooze,
    method: "GET"
}).then(function(response) {
    console.log(response)
})


const apiKeySpoon = "f5609a52a62f4012a1dbb5e2733393c4";

var queryURLSpoon = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKeySpoon}?ingredients=apples,+flour,+sugar&number=2`;

$.ajax({
    url: queryURLSpoon,
    method: "GET"
}).then(function(response) {
    console.log(response, "fart")
})