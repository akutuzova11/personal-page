import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDark: false,
  },
  reducers: {
    toggleDark: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const {toggleDark} = themeSlice.actions;

const selectThemeState = state => state.theme;
export const selectIsDark = state => state.theme.isDark;

export default themeSlice.reducer;
