import { all, call } from 'redux-saga/effects';
import userSaga from '../../Sagas/userSaga';
import textSaga from '../../Sagas/textSaga';

export default function* middleware() {
  yield all([
    call(userSaga),
    call(textSaga),
  ]);
}
