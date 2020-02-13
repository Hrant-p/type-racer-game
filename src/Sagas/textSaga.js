import {
  all, put, call, takeLatest, delay
} from 'redux-saga/effects';
import { textTypes } from '../store/actions/types';
import {
  getLastWpmResultSuccess,
  getRandomTextRequestSuccess,
  setTextErrorState,
  setTextLoadingState
} from '../store/actions/textActionCreators';
import { request } from '../services/requestService';
import { baconIpsumApi, userApi } from '../API/keysAndUrls';
import { constructUrl } from '../API/helpers';

function* getRandomText() {
  try {
    yield put(setTextLoadingState(true));
    const { data } = yield call(
      request,
      'GET',
      constructUrl(
        [baconIpsumApi.url],
        {
          type: 'meat-and-filler',
          paras: '1',
          format: 'text'
        }
      )
    );
    yield put(getRandomTextRequestSuccess(data.replace(/  +/g, ' ')));
    yield put(setTextLoadingState(false));
  } catch (e) {
    yield put(setTextLoadingState(false));
    yield put(setTextErrorState(e.message));
    yield delay(3500);
    yield put(setTextErrorState(null));
  }
}

function* putLastWpmResult({ payload: { result, userName } }) {
  try {
    yield put(setTextLoadingState(true));
    const { data } = yield call(
      request,
      'GET',
      constructUrl([userApi.url, userApi.id], {})
    );
    const id = data.findIndex(item => item.nickname === userName);
    data[id].lastTypeResult = result;
    yield call(
      request,
      'PUT',
      constructUrl([userApi.url, userApi.id], {}),
      data
    );
    yield put(getLastWpmResultSuccess(result));
    yield put(setTextLoadingState(false));
  } catch (e) {
    yield put(setTextLoadingState(false));
    yield put(setTextErrorState(e.message));
    yield delay(3500);
    yield put(setTextErrorState(null));
  }
}

export default function* textSaga() {
  yield all([
    takeLatest(textTypes.GET_RANDOM_TEXT, getRandomText),
    takeLatest(textTypes.PUT_LAST_WPM_RESULT, putLastWpmResult)
  ]);
}
