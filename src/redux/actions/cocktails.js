import * as types from './types';

export function getCocktailsInitiated() {
  return {
    type: types.GET_COCKTAILS_INITIATED,
  };
}

export function getCocktailsSuccess(cocktails) {
  return {
    type: types.GET_COCKTAILS_SUCCESS,
    cocktails,
  };
}

export function getCocktailsFailure(error) {
  return {
    type: types.GET_COCKTAILS_FAIL,
    error,
  };
}

export function addCocktailPending(cocktail) {
  return {
    type: types.ADD_COCKTAIL_PENDING,
    cocktail,
  };
}

export function addCocktailError(error) {
  return {
    type: types.ADD_COCKTAIL_FAIL,
    error,
  };
}

export function addCocktailSuccess(cocktail) {
  return {
    type: types.ADD_COCKTAIL_SUCCESS,
    cocktail,
  };
}
