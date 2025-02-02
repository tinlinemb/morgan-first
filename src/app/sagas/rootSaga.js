import { all } from 'redux-saga/effects';
import loginSaga from './login';

export default function* rootSaga() {
  yield all([
    loginSaga()
    // Add other sagas here as needed
  ]);
}
