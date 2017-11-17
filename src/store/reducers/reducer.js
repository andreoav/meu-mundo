import * as actionTypes from './actions/actionTypes';

const initialstate = {
  products: [],
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_PRODUCT:
      console.log('123123');
      return {...state};
    default:
      return state;
  }
};

export default reducer;
