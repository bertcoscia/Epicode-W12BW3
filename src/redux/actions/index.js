export const GET_PROFILE = "GET_PROFILE";

const url = "https://striveschool-api.herokuapp.com/api/profile/me";
const auth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZGNkOTE5NmQ3YjAwMTVkNmI1MmEiLCJpYXQiOjE3MjEwMzE4OTcsImV4cCI6MTcyMjI0MTQ5N30.AOy5Mx1Ft4QVbhAVCIHUeNKEUmMKeOkHf2Cu_A4Q_Fc";

export const getProfileAction = () => {
  return dispatch => {
    fetch(url, {
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
