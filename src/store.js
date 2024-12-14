import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./feature/ModeSwitch/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
