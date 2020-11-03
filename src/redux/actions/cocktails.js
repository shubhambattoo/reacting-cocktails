import * as types from "./types";
import * as shortId from "shortid";

export function getCocktails() {
  return (dispatch) => {
    dispatch(getCocktailsInitiated());

    fetch("http://localhost:3000/cocktails")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((cocktails) => {
        dispatch(getCocktailsSuccess(cocktails));
      })
      .catch((err) => dispatch(getCocktailsFailure(err)));
  };
}

export function addCocktail(cocktail) {
  return (dispatch) => {
    dispatch(addCocktailPending());
    fetch("http://localhost:3000/cocktails", {
      method: "POST",
      body: JSON.stringify({ ...cocktail, id: shortId() }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 201) {
          dispatch(addCocktailSuccess({ ...cocktail, id: shortId() }));
        }
      })
      .catch((err) => {
        dispatch(addCocktailError(err));
      });
  };
}

function getCocktailsInitiated() {
  return {
    type: types.GET_COCKTAILS_INITIATED,
  };
}

function getCocktailsSuccess(cocktails) {
  return {
    type: types.GET_COCKTAILS_SUCCESS,
    cocktails,
  };
}

function getCocktailsFailure(error) {
  return {
    type: types.GET_COCKTAILS_FAIL,
    error,
  };
}

function addCocktailPending() {
  return {
    type: types.ADD_COCKTAIL_PENDING,
  };
}

function addCocktailError(error) {
  return {
    type: types.ADD_COCKTAIL_FAIL,
    error,
  };
}

function addCocktailSuccess(cocktail) {
  return {
    type: types.ADD_COCKTAIL_SUCCESS,
    cocktail,
  };
}
