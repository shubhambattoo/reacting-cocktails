import CocktailsAPI from './../../api/cocktails';
import * as types from './../actions/types';
import {
  getCocktailsSuccess,
  getCocktailsFailure,
  addCocktailError,
  addCocktailSuccess,
} from './../actions/cocktails';
const { call, put, takeLatest } = require('redux-saga/effects');

function* getCocktails() {
  try {
    const cocktails = yield call(CocktailsAPI.getCocktails);
    yield put(getCocktailsSuccess(cocktails));
  } catch (error) {
    console.log(error);
    yield put(getCocktailsFailure(error));
  }
}

function* addCocktail(args) {
  try {
    const created = yield call(CocktailsAPI.addCocktail, args.cocktail);
    yield put(addCocktailSuccess(created));
  } catch (error) {
    yield put(addCocktailError(error));
  }
}

function* cocktailsSaga() {
  yield takeLatest(types.GET_COCKTAILS_INITIATED, getCocktails);
  yield takeLatest(types.ADD_COCKTAIL_PENDING, addCocktail);
}

export default cocktailsSaga;
