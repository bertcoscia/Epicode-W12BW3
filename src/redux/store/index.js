import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import similarProfilesReducer from "../reducers/similarProfiles";

const rootReducer = combineReducers({
  // reducers vari
  profile: profileReducer,
  similarProfiles: similarProfilesReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
