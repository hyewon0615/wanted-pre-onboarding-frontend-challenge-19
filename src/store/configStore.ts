import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./modules/todos";
export const store = configureStore({
  reducer: { todos: todosReducer },
});
