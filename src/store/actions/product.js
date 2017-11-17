import * as actionTypes from './actionTypes';

export const searchProductRequest = (result) => {
  return {
    type: actionTypes.SEARCH_PRODUCT,
    query: result,
  };
};

export const searchProduct = (query) => {
  return (dispatch) => dispatch(searchProductRequest('test'));
};
