
document.addEventListener('DOMContentLoaded', function() {








var boozeButton = document.getElementById("boozeBtn");


boozeButton.addEventListener('click', function(event){
     event.preventDefault();
     var boozeEntry = document.getElementById("boozeInput");

    let apiKeyBooze = '1';
    let queryURLBooze = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ boozeEntry.value }`;
    // let ingredientsURLBooze = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ boozeEntry }`;



    // console.log(boozeEntry.value, "booze")
    




$.ajax({
    url: queryURLBooze,
    method: "GET"
}).then(function(response) {
    console.log(response);
    
        
    // create an element for each item to be displayed
for (i = 0; i < response.drinks.length; i++){

    var drink = document.getElementById("drinksView");
    var drinkName = response.drinks[0].strDrink;  
    var displayDrinkName = document.createElement("p");
    displayDrinkName.textContent = drinkName;
    drink.appendChild(displayDrinkName);
    
    var drinkThumbnail = response.drinks[i].strDrinkThumb;
    var displayThumbnail = document.createElement("img");
    displayThumbnail.src= drinkThumbnail;
    drink.appendChild(displayThumbnail);
    

    
    var ingredients = response.drinks[i].strIngredient1;
    var displayIngredients = document.createElement("p")
    displayIngredients.textContent = ingredients;
    drink.appendChild(displayIngredients);

    if (ingredients === null, function(){
        displayIngredients.addClass("display");
    });
        
    
    var ingredients = response.drinks[i].strIngredient2;
    var displayIngredients = document.createElement("p")
    displayIngredients.textContent = ingredients;
    drink.appendChild(displayIngredients);

    if (ingredients === null, function(){
        displayIngredients.addClass("display");
    }); 
        
    
    var ingredients = response.drinks[i].strIngredient3;
    var displayIngredients = document.createElement("p")
    displayIngredients.textContent = ingredients;
    drink.appendChild(displayIngredients);


    if (ingredients === null, function(){
        displayIngredients.addClass("display");
    });
        


    
    var ingredients = response.drinks[i].strIngredient4;
    var displayIngredients = document.createElement("p")
    displayIngredients.textContent = ingredients;
    drink.appendChild(displayIngredients);



    var ingredients = response.drinks[i].strIngredient5;
    var displayIngredients = document.createElement("p")
    displayIngredients.textContent = ingredients;
    drink.appendChild(displayIngredients);

    if (ingredients === null, function() {
        displayIngredients.addClass("display");
    });      

    
    var ingredients = response.drinks[i].strIngredient6;
    var displayIngredients = document.createElement("p")
    displayIngredients.textContent = ingredients;
    drink.appendChild(displayIngredients);

    if (ingredients === null, function() {
        displayIngredients.addClass("display");
    });
        
    var measurements = response.drinks[i].strMeasure1;
    var displayMeasurements = document.createElement("p");
    displayMeasurements.textContent = measurements;
    drink.appendChild(displayMeasurements);

    if (measurements === null, function() {
        displayMeasurements.addClass("display");
    });

    
    var measurements = response.drinks[i].strMeasure2;
    var displayMeasurements = document.createElement("p");
    displayMeasurements.textContent = measurements;
    drink.appendChild(displayMeasurements);

    if (measurements === null, function() {
        displayMeasurements.addClass("display");
    });

    
    var measurements = response.drinks[i].strMeasure3;
    var displayMeasurements = document.createElement("p");
    displayMeasurements.textContent = measurements;
    drink.appendChild(displayMeasurements);

    if (measurements === null, function() {
        displayMeasurements.addClass("display");
    });
    
    
    var measurements = response.drinks[i].strMeasure4;
    var displayMeasurements = document.createElement("p");
    displayMeasurements.textContent = measurements;
    drink.appendChild(displayMeasurements);

    if (measurements === null, function() {
        displayMeasurements.addClass("display");
    });

    
    var measurements = response.drinks[i].strMeasure5;
    var displayMeasurements = document.createElement("p");
    displayMeasurements.textContent = measurements;
    drink.appendChild(displayMeasurements);

    if (measurements === null, function() {
        displayMeasurements.addClass("display");
    });

    
    var measurements = response.drinks[i].strMeasure6;
    var displayMeasurements = document.createElement("p");
    displayMeasurements.textContent = measurements;
    drink.appendChild(displayMeasurements);

    if (measurements === null, function() {
        displayMeasurements.addClass("display");
    });

    
    var instructions = response.drinks[i].strInstructions;
    var displayInstructions = document.createElement("p");
    displayInstructions.textContent = instructions;
    drink.appendChild(displayInstructions);
}

})
});
});





var fatButton= document.getElementById('fatBtn');


fatButton.addEventListener ('click', function(event){
    event.preventDefault();
    var fatEntry= document.getElementById('fatInput');
    console.log(fatEntry.value, 'Henry');
    // let recipeDiv = $(".recipeDiv");
    
    var key = 'e2f2b2eb5b984038a6729ef1cc1215f9'; // CHANGE THIS TO YOUR API KEY
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${key}&ingredients=${fatEntry.value}$number=50`)
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
                  console.log(json)  
                    
                    for (i = 0; i< json.length; i++ ) {
                    // Creating element to hold each recipe
                    let recipeDiv = $(".recipeDiv");
                    //--------------------------------------------------------------
                        if (json[i].healthScore < 20) {
                        // Retrieving the URL for the image
                        var imgURL = json[i].image;

                    
                        //Creating element to hold image
                      var image = $('<img>').attr('src', imgURL);
                    
                   
                        
                        

                       //----------------------------------------------------------------
                     // Retrieving the recipe title
                       var title = json[i].title //may need to parse?

                        //creating <p> tag to display title
                        var titleDisplay = $('<p class="title">').text(title);

                       //Appending title to recipeDiv
                        recipeDiv.append(titleDisplay);
                        //----------------------------------------------------------------
                       //Retrieving URL for recipe
                          var websiteURL = json[i].sourceUrl

                       //create <a> tag to make thumbnail clickable
                        var anchor = $('<a>').attr('href', websiteURL);  //does this attach to image automatically?
                     //Appending the image
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

} )  


var sugarButton= document.getElementById('sugarBtn');

sugarButton.addEventListener('click', function(event){
    event.preventDefault();
    var sugarEntry= document.getElementById('sugarInput');
    console.log(sugarEntry.value, "sugar")

    var key = 'e2f2b2eb5b984038a6729ef1cc1215f9'; // CHANGE THIS TO YOUR API KEY
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${key}&ingredients=${sugarEntry.value}$number=50`)
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
                  console.log(json)  
                    
                    for (i = 0; i< json.length; i++ ) {
                    // Creating element to hold each recipe
                    let recipeDiv = $(".recipeDiv");
                    //---------------------------------------------------------------
                        if (json[i].healthScore < 20) {
                        // Retrieving the URL for the image
                        var imgURL = json[i].image;


                    
                      //Creating element to hold image
                       var image = $('<img>').attr('src', imgURL);
                    
                   
                        
                        


                        //----------------------------------------------------------------
                        // Retrieving the recipe title
                        var title = json[i].title //may need to parse?

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

} )  






           
                  



