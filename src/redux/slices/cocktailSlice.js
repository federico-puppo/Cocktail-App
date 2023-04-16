import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  idDrink: "",
  strAlcoholic: "Alcoholic" || "Non-Alcoholic",
  strCategory: "Cocktail" || "Ordinary Drink",
  strDrink: "",
  strDrinkAlternate: null,
  strDrinkThumb: "",
  strGlass: "",
  strIBA: "",
  strImageSource: null,
  strIngredient1: null,
  strIngredient2: null,
  strIngredient3: null,
  strIngredient4: null,
  strIngredient5: null,
  strIngredient6: null,
  strIngredient7: null,
  strIngredient8: null,
  strIngredient9: null,
  strIngredient10: null,
  strIngredient11: null,
  strIngredient12: null,
  strIngredient13: null,
  strIngredient14: null,
  strIngredient15: null,
  strInstructions: "",
  strMeasure1: null,
  strMeasure2: null,
  strMeasure3: null,
  strMeasure4: null,
  strMeasure5: null,
  strMeasure6: null,
  strMeasure7: null,
  strMeasure8: null,
  strMeasure9: null,
  strMeasure10: null,
  strMeasure11: null,
  strMeasure12: null,
  strMeasure13: null,
  strMeasure14: null,
  strMeasure15: null,
  strTags: [],
  strVideo: null,
};

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState: initialState,
  reducers: {
    deafultCocktail: () => {
      console.log("initial cocktail");
      return initialState;

    },
    setCocktail: (state, action) => {
      for (let prop in action.payload) {
        if (state.hasOwnProperty(prop)) {
          state[prop] = action.payload[prop];
        }
      }
      console.log("state: ", current(state));
      return state;
    },
  },
});

export const { setCocktail, deafultCocktail } = cocktailSlice.actions;
export default cocktailSlice.reducer;
