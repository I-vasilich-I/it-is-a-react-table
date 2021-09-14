import { all } from 'redux-saga/effects';
import { wathcFetchUsers } from './userSaga/userSaga';

export default function* rootSaga() {
  yield all([wathcFetchUsers(),]);
}