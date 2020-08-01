document.addEventListener('DOMContentLoaded', function() {
let drinksView = document.getElementById("id for div where drinks will populate")
let submitButton = document.getElementById("id for submit/search button");
var recipeDiv=$(".recipeDiv")

// let userInput = "vodka"
// $("#drinksView").empty()


// let apiKeyBooze = '1';
// let queryURLBooze = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ userInput }`;

var ingredientButton= document.getElementById('addBtn');

ingredientButton.addEventListener ('click', function(event){
    event.preventDefault();
    var userEntry= document.getElementById('userInput');
    console.log(userEntry.value, 'Henry');
    


// $.ajax({
//     url: queryURLBooze,
//     method: "GET"
// }).then(function(response) {
//     console.log(response);

//     // create an element for each item to be displayed
//     var drink = $("<div>");
//     drink.addClass("drink-name");   
//     drinks.text(response.drinks.strDrink);
//     $("#drinksView").append(drinks);

//     // thumbnail image
//     var drinkThumb = $("<div>");
//     drinkThumb.addClass("drink-thumbnail");
//     drinkThumb.text(response.drink.strThumb);

//     // ingredient1,2,3
//     var ingredientOne = $("<div>");
//     ingredientOne.addClass("ingredient-one");
//     ingredientOne.text(response.drinks.strIngredient1);

//     var ingredientTwo = $("<div>");
//     ingredientTwo.addClass("ingredient-two");
//     ingredientTwo.text(response.drinks.strIngredient2);

//     var ingredientThree = $("<div>");
//     ingredientThree.addClass("ingredient-three");
//     ingredientThree.text(response.drinks.strIngredient3);

//     // instructions
//     var instructions = $("<div>");
//     instructions.addClass("instructions");
//     instructions.text(response.drinks.strInstructions);

//     // measurements
//     var measurementsOne = $("<div>");
//     measurementsOne.addClass("measurements-one");
//     measurementsOne.text(response.drinks.strMeasure1)

//     var measurementsTwo = $("<div>");
//     measurementsTwo.addClass("measurements-two");
//     measurementsTwo.text(response.drinks.strMeasure2)

//     var measurementsThree = $("<div>");
//     measurementsThree.addClass("measurements-three");
//     measurementsThree.text(response.drinks.strMeasure3)
// })







    
   
    var key = '85dd435db770493c8aedbd1a1e12e596'; // CHANGE THIS TO YOUR API KEY
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${key}&ingredients=${userEntry.value}$number=50`)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            const recipeIds = json.map(function(recipe) { return recipe.id});
            fetch(`https://api.spoonacular.com/recipes/informationBulk?apiKey=${key}&ids=${recipeIds.join(',')}&includeNutrition=true`)
                .then(function(response) {
                    return response.json();
                })
                .then(function(json) {
                    
                    
                    for (i = 0; i< json.length; i++ ) {
                    // Creating element to hold each recipe
                    
                    //---------------------------------------------------------------
                        if (json[i].healthScore > 20) {
                        // Retrieving the URL for the image
                        var imgURL = json[i].image;
                    
                        //Creating element to hold image
                        var image = $('<img>').attr('src', imgURL);
                    
                   
                        
                        

                        //----------------------------------------------------------------
                        // Retrieving the recipe title
                        var title = json[i].title //may need to parse?
                            console.log(title, 'title');
                        //creating <p> tag to display title
                        var titleDisplay = $('<p class="title">').text(title);

                        //Appending title to recipeDiv
                        recipeDiv.append(titleDisplay);

                        //----------------------------------------------------------------
                        //Retrieving URL for recipe
                        var websiteURL = json[i].sourceUrl

                        //create <a> tag to make thumbnail clickable
                        var anchor = $('<a>').attr('href', websiteURL);  //does this attach to image automatically?
                        // Appending the image
                        anchor.append(image); 
                        //Appending <a> to thumbnail 
                        recipeDiv.append(anchor);

                        //----------------------------------------------------------------
                        //Retrieving URL for HealthScore
                        var healthURL = json[i].healthScore
                        console.log(healthURL, 'healthscore');
                      }}
                
        });
        });
});


// })
})