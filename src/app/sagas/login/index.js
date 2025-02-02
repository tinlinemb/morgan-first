import { takeEvery, put, call } from 'redux-saga/effects';

// Simulated API call for login (waits for 1 second)
function* loginApi(action) {
  try {
    yield call(() => new Promise(resolve => setTimeout(resolve, 1000)));
    // On success, dispatch LOGIN_SUCCESS with sample user data
    yield put({ type: 'LOGIN_SUCCESS', payload: { user: 'exampleUser' } });
  } catch (error) {
    yield put({ type: 'LOGIN_FAILURE', error });
  }
}

function* loginSaga() {
  yield takeEvery('LOGIN_REQUEST', loginApi);
}

export default loginSaga;
