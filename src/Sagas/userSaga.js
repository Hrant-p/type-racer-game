import {
  all, call, put, takeLatest, delay,
} from 'redux-saga/effects';
import {
  userLoginSucceed, setAuthState, setErrorState, setLoadingState, setAlert, removeAlert, createNewUserRequestSuccess,
} from '../store/actions/userActionCreators';
import { userTypes } from '../store/actions/types';
import { constructUrl } from '../API/helpers';
import { request } from '../services/requestService';
import { userApi } from '../API/keysAndUrls';

function* setAlertInfo(alert) {
  yield put(setAlert(alert));
  yield delay(2500);
  yield put(removeAlert());
}

function* userLogin({ payload: { login, password } }) {
  try {
    yield put(setLoadingState(true));
    const { data } = yield call(
      request,
      'GET',
      constructUrl([userApi.url, userApi.id], {}),
    );
    const result = yield data.find(item => item.login === login
        && item.password === password);
    yield put(setLoadingState(false));
    if (result) {
      yield put(setAuthState(true));
      yield sessionStorage.setItem('id', login);
      const { nickname, lastTypeResult } = yield result;
      yield put(userLoginSucceed({
        login: result.login, nickname, lastTypeResult,
      }));
    } else {
      yield setAlertInfo('Login or password is incorrect!');
    }
  } catch (e) {
    yield put(setLoadingState(false));
    yield put(setErrorState(e.message));
    console.log(e);
  }
}

function* createNewUser({ payload: { newUser } }) {
  try {
    yield put(setLoadingState(true));
    const { data } = yield call(
      request,
      'GET',
      constructUrl([userApi.url, userApi.id], {}),
    );
    data.push({ ...newUser, lastTypeResult: null });
    console.log(data);
    yield call(
      request,
      'PUT',
      constructUrl([userApi.url, userApi.id], {}),
      data
    );
    yield put(createNewUserRequestSuccess());
    yield put(userLoginSucceed({
      nickname: newUser.nickname,
      login: newUser.login,
      lastTypeResult: newUser.lastTypeResult,
    }));
    yield put(setAuthState(true));
    yield put(setLoadingState(false));
  } catch (e) {
    yield put(setAuthState(false));
    yield put(setLoadingState(false));
    yield put(setErrorState(e.message));
    console.log(e.message());
  }
}

export default function* userSaga() {
  yield all([
    takeLatest(userTypes.LOGIN_USER, userLogin),
    takeLatest(userTypes.POST_CERTAIN_USER, createNewUser),
  ]);
}
