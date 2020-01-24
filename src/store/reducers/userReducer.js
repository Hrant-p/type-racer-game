import { fromJS } from 'immutable';
import { loadingType, userTypes } from '../actions/types';

const initialState = fromJS({
  allUsers: {},
  isLoading: false,
  isAuth: false,
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userTypes.GET_USERS_SUCCEED:
      return state.set('allUsers', fromJS(payload.data));
    case userTypes.SET_AUTHENTICATION_STATE:
      return state.set('isAuth', fromJS(payload.isAuth));
    case loadingType.CHANGE_LOADING_STATE:
      return state.set('isLoading', fromJS(payload.isLoading));
    default:
      return state;
  }
};
