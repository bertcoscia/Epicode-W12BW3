import { GET_SIMILAR_PROFILES } from "../actions";

const initialState = {
  content: []
};

const similarProfilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SIMILAR_PROFILES:
      return {
        ...state,
        content: action.payload
      };
    default:
      return state;
  }
};

export default similarProfilesReducer;
