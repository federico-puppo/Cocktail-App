import { configureStore } from "@reduxjs/toolkit";
import cocktailReducer from "./slices/cocktailSlice.js";
import loadingReducer from "./slices/loadingSlice.js";
import { deafultCocktail } from "./slices/cocktailSlice.js";
import { defaultLoading } from "./slices/loadingSlice.js";

const store = configureStore({
  reducer: {
    cocktail: cocktailReducer,
    loading: loadingReducer,
  },
});

store.dispatch(deafultCocktail());
store.dispatch(defaultLoading());


export default store;
