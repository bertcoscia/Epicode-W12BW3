export const GET_PROFILE = "GET_PROFILE";
export const GET_SIMILAR_PROFILES = "GET_SIMILAR_PROFILES";
export const GET_EXPERIENCE = "GET_EXPERIENCE";
export const POST_EXPERIENCE = "POST_EXPERIENCE";
export const GET_POSTS = "GET_POSTS";
export const GET_JOBS = "GET_JOBS";

const urlPersonalProfile = "https://striveschool-api.herokuapp.com/api/profile/me";
const urlProfiles = "https://striveschool-api.herokuapp.com/api/profile/";
export const auth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZGNkOTE5NmQ3YjAwMTVkNmI1MmEiLCJpYXQiOjE3MjEwMzE4OTcsImV4cCI6MTcyMjI0MTQ5N30.AOy5Mx1Ft4QVbhAVCIHUeNKEUmMKeOkHf2Cu_A4Q_Fc";

export const getProfileAction = () => {
  return dispatch => {
    fetch(urlPersonalProfile, {
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
      })
      .catch(error => console.log(error));
  };
};

export const getSimilarProfilesAction = () => {
  return dispatch => {
    fetch(urlProfiles, {
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
      })
      .catch(error => console.log(error));
  };
};

export const getExperienceAction = id => {
  return dispatch => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`, {
      headers: {
        Authorization: auth
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Couldn't get data - @getExperienceAction");
        }
      })
      .then(experiences => {
        dispatch({
          type: GET_EXPERIENCE,
          payload: experiences
        });
      })
      .catch(error => console.log(error));
  };
};

export const getPostsAction = () => {
  return dispatch => {
    fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      headers: {
        Authorization: auth
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Couldn't get data - @getPostsAction");
        }
      })
      .then(posts => {
        dispatch({
          type: GET_POSTS,
          payload: posts
        });
      })
      .catch(error => console.log(error));
  };
};

export const getJobsAction = () => {
  return dispatch => {
    fetch("https://strive-benchmark.herokuapp.com/api/jobs", {
      headers: {
        Authorization: auth
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Couldn't get data - @getJobsAction");
        }
      })
      .then(jobs => {
        dispatch({
          type: GET_JOBS,
          payload: jobs.data
        });
      });
  };
};
