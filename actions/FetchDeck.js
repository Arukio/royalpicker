import axios from "axios";
const API_URL = "https://api.royaleapi.com/popular/decks";
const APP_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDgyLCJpZGVuIjoiNDQ4Mzc5NjkxOTA5NTEzMjU2IiwibWQiOnt9fQ.eeNXhBlAj7RoLTFNQRTvac2iSHpoHK9Y-dOjiw3rMWc";

export const FETCH_DECKS = "FETCH_DECKS";
export const FETCH_DECKS_SUCCESS = "FETCH_DECKS_SUCCESS";
export const FETCH_DECKS_FAIL = "FETCH_DECKS_FAIL";

export const fetchDecks = () => {
  return {
    type: FETCH_DECKS
  };
};

export const fetchDecksSuccess = data => {
  return {
    type: FETCH_DECKS_SUCCESS,
    payload: {
      data: data
    }
  };
};

export const getLastestDecks = () => {
  return dispatch => {
    dispatch(fetchDecks());
    return axios
      .get(API_URL, {
        headers: {
          auth: APP_KEY
        }
      })
      .then(response => {
        dispatch(fetchDecksSuccess(response.data));
        return response.data;
      })
      .catch(e => {
        console.log(e);
      });
  };
};
