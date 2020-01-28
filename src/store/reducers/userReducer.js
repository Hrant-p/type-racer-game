import { fromJS } from 'immutable';
import { alertType, loadingType, userTypes } from '../actions/types';

const initialState = fromJS({
  user: {},
  isAuth: false,
  isLoading: false,
  alert: null,
  error: null,
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userTypes.USER_LOGIN_SUCCEED:
      return state.set('user', fromJS(payload.data));
    case userTypes.SET_AUTHENTICATION_STATE:
      return state.set('isAuth', fromJS(payload.isAuth));
    case userTypes.USER_SIGN_OUT:
      return initialState;
    case loadingType.CHANGE_LOADING_STATE:
      return state.set('isLoading', fromJS(payload.isLoading));
    case alertType.SET_ALERT:
      return state.set('alert', fromJS(payload.alert));
    case alertType.REMOVE_ALERT:
      return state.set('alert', fromJS(null));
    case userTypes.SET_USER_ERROR_STATE:
      return state.set('error', fromJS(payload.error));
    default:
      return state;
  }
};
