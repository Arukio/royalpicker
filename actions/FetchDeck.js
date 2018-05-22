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
    return fetch("https://api.royaleapi.com/popular/decks", {
      headers: {
        auth:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDgyLCJpZGVuIjoiNDQ4Mzc5NjkxOTA5NTEzMjU2IiwibWQiOnt9fQ.eeNXhBlAj7RoLTFNQRTvac2iSHpoHK9Y-dOjiw3rMWc"
      }
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchDecksSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchDecksSuccess(error)));
  };
};

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
