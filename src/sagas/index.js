import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';
// import Api from '...'
import { EXAMPLE_ASYNC_ACTION, exampleAsyncActionDone, exampleAsyncActionFail } from '../actions';

function* exampleCall() {
  try {
    // const user = yield call(Api.fetchUser, action.payload.userId);
    yield put(exampleAsyncActionDone());
  } catch (e) {
    yield put(exampleAsyncActionFail());
  }
}

/*
 Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
 Allows concurrent fetches of user.
 */
/* function* mySaga() {
  yield* takeEvery("USER_FETCH_REQUESTED", fetchUser);
} */

/*
 Alternatively you may use takeLatest.

 Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
 dispatched while a fetch is already pending, that pending fetch is cancelled
 and only the latest one will be run.
 */
function* exampleSaga() {
  yield* takeLatest(EXAMPLE_ASYNC_ACTION, exampleCall);
}

export default function* () {
  yield [
    exampleSaga(),
  ];
}
