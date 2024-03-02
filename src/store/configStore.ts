import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./modules/todosSlice";
export const store = configureStore({
  reducer: { todos: todosReducer },
});
