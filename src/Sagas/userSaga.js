import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import {
  userLoginSucceed, setAuthState, setErrorState, setLoadingState,
} from '../store/actions/userActionCreators';
import { userTypes } from '../store/actions/types';
import { constructUrl } from '../API/helpers';
import { request } from '../services/requestService';
import { userApi } from '../API/keysAndUrls';

function* userLogin({ payload: { login, password, history } }) {
  try {
    yield put(setLoadingState(true));
    const { data } = yield call(
      request,
      'GET',
      constructUrl([userApi.url, userApi.id], {}),
    );
    const result = yield data.find(item => item.login === login
        && item.password === password);
    if (result) {
      yield put(setAuthState(true));
      yield sessionStorage.setItem('id', login);
      const { nickname, lastTypeResult } = yield result;
      yield put(userLoginSucceed({
        login: result.login, nickname, lastTypeResult,
      }));
      yield history.push('/game');
    }
    yield put(setLoadingState(false));
  } catch (e) {
    yield put(setLoadingState(false));
    yield put(setErrorState(e.message));
    console.log(e);
  }
}

function* createNewUser({ payload: { newUser, history } }) {
  try {
    yield put(setLoadingState(true));
    yield call(
      request,
      'PUT',
      constructUrl([userApi.url, userApi.id], {}),
      newUser,
    );
    history.push('./game');
    yield put(setLoadingState(false));
    yield put(setAuthState(true));
  } catch (e) {
    yield put(setAuthState(false));
    yield put(setLoadingState(false));
    yield put(setErrorState(e.message));
    console.log(e);
  }
}

export default function* userSaga() {
  yield all([
    takeLatest(userTypes.LOGIN_USER, userLogin),
    takeLatest(userTypes.POST_CERTAIN_USER, createNewUser),
  ]);
}
