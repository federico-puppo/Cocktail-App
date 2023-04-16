import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  loading: false
};

const loadingSlice = createSlice({
  name: "loading",
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
      return state;
    },
    defaultLoading: () => {
      console.log("initial loading");
      return initialState;
    },
  },
});

export const { setLoading, defaultLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
