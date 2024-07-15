import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  // reducers vari
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
