import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import similarProfilesReducer from "../reducers/similarProfiles";
import experienceReducer from "../reducers/experienceReducer";
import postsReducer from "../reducers/postsReducer";

const rootReducer = combineReducers({
  // reducers vari
  profile: profileReducer,
  similarProfiles: similarProfilesReducer,
  experience: experienceReducer,
  posts: postsReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
