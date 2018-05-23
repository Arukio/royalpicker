export const GET_DETAIL = "GET_DETAIL";
export const REMOVE_DETAIL = "REMOVE_DETAIL";

export const getDetail = data => {
  return {
    type: GET_DETAIL,
    payload: {
      data
    }
  };
};

export const removeDetail = () => {
  return {
    type: REMOVE_DETAIL
  };
};
