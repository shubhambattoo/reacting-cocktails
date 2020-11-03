import { all } from 'redux-saga/effects';
import cocktailsSaga from './cocktails';

export default function* rootSaga() {
  yield all([cocktailsSaga()]);
}
