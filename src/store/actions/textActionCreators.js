import {loadingType, textTypes} from './types';

export function getRandomTextRequest() {
  return {
    type: textTypes.GET_RANDOM_TEXT,
    payload: {}
  };
}

export function getRandomTextRequestSuccess(data) {
  return {
    type: textTypes.GET_RANDOM_TEXT_SUCCEED,
    payload: { data }
  };
}

export function clearRandomText() {
  return {
    type: textTypes.GET_RANDOM_TEXT,
    payload: {}
  };
}

export function getLastWpmResult() {
  return {
    type: textTypes.GET_LAST_WPM_RESULT,
    payload: {}
  };
}

export function getLastWpmResultSuccess(data) {
  return {
    type: textTypes.GET_LAST_WPM_RESULT_SUCCEED,
    payload: { data }
  };
}

export function putLastWpmResult(result) {
  return {
    type: textTypes.PUT_LAST_WPM_RESULT,
    payload: { result }
  };
}

export function setTextErrorState(error) {
  return {
    type: textTypes.SET_TEXT_ERROR_STATE,
    payload: { error }
  };
};

export function setTextLoadingState(isLoading) {
  return {
    type: loadingType.CHANGE_LOADING_STATE,
    payload: { isLoading },
  };
}
