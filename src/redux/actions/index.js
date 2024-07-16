export const GET_PROFILE = "GET_PROFILE";
export const GET_SIMILAR_PROFILES = "GET_SIMILAR_PROFILES";

const url1 = "https://striveschool-api.herokuapp.com/api/profile/me";
const url2 = "https://striveschool-api.herokuapp.com/api/profile/";
const auth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZGNkOTE5NmQ3YjAwMTVkNmI1MmEiLCJpYXQiOjE3MjEwMzE4OTcsImV4cCI6MTcyMjI0MTQ5N30.AOy5Mx1Ft4QVbhAVCIHUeNKEUmMKeOkHf2Cu_A4Q_Fc";

export const getProfileAction = () => {
  return dispatch => {
    fetch(url1, {
      headers: {
        Authorization: auth
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Couldn't get data - @getProfileAction");
        }
      })
      .then(profile => {
        dispatch({
          type: GET_PROFILE,
          payload: profile
        });
      });
  };
};

export const getSimilarProfilesAction = () => {
  return dispatch => {
    fetch(url2, {
      headers: {
        Authorization: auth
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Couldn't get data - @getSimilarProfilesAction");
        }
      })
      .then(profilesArray => {
        dispatch({
          type: GET_SIMILAR_PROFILES,
          payload: profilesArray
        });
      });
  };
};
