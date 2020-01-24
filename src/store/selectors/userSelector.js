import { all, call } from 'redux-saga/effects';

export default function* middleware() {
  yield all([
    call(() => {}),
    call(() => {}),
  ]);
}
