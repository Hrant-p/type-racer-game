import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';

import { getAllUsersSucceed, setErrorState, setLoadingState } from '../store/actions/userActionCreators';
import { userTypes } from '../store/actions/types';
import { constructUrl } from '../API/helpers';
import { request } from '../services/requestService';
import { userApi } from '../API/keysAndUrls';

function* getAllUsers() {
  try {
    yield put(setLoadingState(true));
    const { data } = yield call(
      request,
      'GET',
      constructUrl([userApi.url, userApi.id], {}),
    );
    yield put(getAllUsersSucceed(data));
    yield put(setLoadingState(false));
  } catch (e) {
    yield put(setLoadingState(false));
    yield put(setErrorState(e.message));
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
    history.push('./game-page');
    yield put(setLoadingState(false));
  } catch (e) {
    yield put(setLoadingState(false));
    yield put(setErrorState(e.message));
  }
}

export default function* userSaga() {
  yield all([
    takeLatest(userTypes.GET_USERS, getAllUsers),
    takeLatest(userTypes.POST_CERTAIN_USER, createNewUser),
  ]);
}
