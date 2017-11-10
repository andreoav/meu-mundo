import * as actionTypes from './actions';

const initialstate = {

};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_PRODUCT:
      return {...state};
    default:
      return state;
  }
};

export default reducer;
