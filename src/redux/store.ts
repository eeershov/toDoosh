import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todoSlice";


// State semi-persistence
// 1. ability to refresh current tab
// 2. ability to delete all todos without immediately getting 5 defaults

function saveToSessionStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    sessionStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromSessionStorage() {
  try {
    const serialisedState = sessionStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}


export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState: 
    loadFromSessionStorage(),
});

store.subscribe(() => saveToSessionStorage(store.getState()));

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
