import * as types from "../actions/types";

const initialState = {
  allCocktails: [],
  error: null,
  isLoading: true,
  addPending: false,
  addError: null,
};

function cocktails(state = initialState, action) {
  switch (action.type) {
    case types.GET_COCKTAILS_INITIATED:
      return { ...state, isLoading: true };
    case types.GET_COCKTAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allCocktails: action.cocktails,
        error: null,
      };
    case types.GET_COCKTAILS_FAIL:
      return {
        ...state,
        isLoading: false,
        allCocktails: [],
        error: action.error,
      };
    case types.ADD_COCKTAIL_PENDING:
      return { ...state, addPending: true };
    case types.ADD_COCKTAIL_SUCCESS:
      return {
        ...state,
        addError: null,
        allCocktails: [...state.allCocktails, action.cocktail],
        addPending: false,
      };
    case types.ADD_COCKTAIL_FAIL:
      return {
        ...state,
        addError: action.error,
        addPending: false,
      };
    default:
      return state;
  }
}

export default cocktails;
