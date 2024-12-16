import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./feature/ToggleMode/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
