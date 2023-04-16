import axios from 'axios'

// Search cocktail by name
export const getCocktailByName = async (name) => {
    try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
        const response = await fetch(url);
        console.log(response.url)
        return response;
    } catch (err) {
        console.log(err)
     }
};

// List all cocktails by first letter
export const getCocktailByFirstLetter = async (letter) => {
    try {
        let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
        const response = await fetch(url);
        return response;
    } catch (err) {
        console.log(err)
     }
};

// Search ingredient by name
export const getIngredientByName = async (name) => {
    try {
        let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`;
        const response = await fetch(url);
        return response;
    } catch (err) {
        console.log(err)
     }
};

//Lookup full cocktail details by ID
export const getCocktailDetailsById = async (id) => {
    try {
        let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
        const response = await fetch(url);
        return response;
    } catch (err) {
        console.log(err)
     }
};

// Lookup ingredient by ID
export const getIngredientDetailById = async (id) => {
    try {
        let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${id}`;
        const response = await fetch(url);
        return response;
    } catch (err) {
        console.log(err)
     }
};




// Lookup a random cocktail
export const getRandomCocktail = async () => {
    try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
        const response = await axios.get(url);
        return response.data.drinks[0];
    } catch (err) {
        console.log(err)
     }
};

// Lookup a selection of 10 random cocktails (only available to $2+ Patreon supporters)
// www.thecocktaildb.com/api/json/v1/1/randomselection.php

// List Popular cocktails (only available to $2+ Patreon supporters)
// www.thecocktaildb.com/api/json/v1/1/popular.php

// List most latest cocktails (only available to $2+ Patreon supporters)
// www.thecocktaildb.com/api/json/v1/1/latest.php

// Search by ingredient
export const getCocktailByIngredient = async (ingredient) => {
    try {
        let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
        const response = await fetch(url);
        return response;
    } catch (err) {
        console.log(err)
     }
};

//Filter by multi-ingredient (only available to $2+ Patreon supporters)
//www.thecocktaildb.com/api/json/v1/1/filter.php?i=Dry_Vermouth,Gin,Anis

//Filter by alcoholic
//www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
//www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic
export const getCocktailByAlcoholic = async (alcoholic) => {
    try {
        let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${alcoholic}`;
        const response = await fetch(url);
        return response;
    } catch (err) {
        console.log(err)
     }
};

//Filter by Category
//www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
//www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail
export const getCocktailByCategory = async (category) => {
    try {
        let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
        const response = await fetch(url);
        return response;
    } catch (err) {
        console.log(err)
     }
};


//Filter by Glass
//www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass
//www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute
export const getCocktailByGlass = async (glass) => {
    try {
        let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass}`;
        const response = await fetch(url);
        return response;
    } catch (err) {
        console.log(err)
     }
};


//List the categories, glasses, ingredients or alcoholic filters
//www.thecocktaildb.com/api/json/v1/1/list.php?c=list
//www.thecocktaildb.com/api/json/v1/1/list.php?g=list
//www.thecocktaildb.com/api/json/v1/1/list.php?i=list
//www.thecocktaildb.com/api/json/v1/1/list.php?a=list
// category must be c g i a
export const getListByCategory = async (category) => {
    try {
        let url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?${category}=list`;
        const response = await fetch(url);
        return response;
    } catch (err) {
        console.log(err)
     }
};



// Images
/*Drink thumbnails
Add /preview to the end of the cocktail image URL

/images/media/drink/vrwquq1478252802.jpg/preview (100x100 pixels)




Ingredient Thumbnails
www.thecocktaildb.com/images/ingredients/gin-Small.png
(100x100 pixels)
www.thecocktaildb.com/images/ingredients/gin-Medium.png
(350x350 pixels)
www.thecocktaildb.com/images/ingredients/gin.png
(700x700 pixels)


*/
