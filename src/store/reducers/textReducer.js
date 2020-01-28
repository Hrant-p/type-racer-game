import { fromJS } from 'immutable';
import { textTypes } from '../actions/types';

const initialState = fromJS({
  randomText: null,
  lastTypeResult: null,
  textLoading: false,
  textError: null,
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case textTypes.GET_RANDOM_TEXT_SUCCEED:
      return state.set('randomText', fromJS(payload.data));
    case textTypes.CLEAR_RANDOM_TEXT:
      return state.set('randomText', fromJS(null));
    case textTypes.GET_LAST_WPM_RESULT_SUCCEED:
      return state.set('lastTypeResult', fromJS(payload.data));
    case textTypes.CHANGE_TEXT_LOADING_STATE:
      return state.set('textLoading', fromJS(payload.isLoading));
    case textTypes.SET_TEXT_ERROR_STATE:
      return state.set('textError', fromJS(payload.error));
    default:
      return state;
  }
};
