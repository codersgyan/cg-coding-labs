import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./src/feature/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
