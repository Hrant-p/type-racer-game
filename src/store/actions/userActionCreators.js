import { errorType, loadingType, userTypes } from './types';

export function getAllUsersRequest() {
  return {
    type: userTypes.GET_USERS,
    payload: {},
  };
}

export function getAllUsersSucceed(data) {
  return {
    type: userTypes.GET_USERS_SUCCEED,
    payload: { data },
  };
}

export function createNewUserRequest(newUser, history) {
  return {
    type: userTypes.POST_CERTAIN_USER_SUCCEED,
    payload: { newUser, history },
  };
}

export function setAuthState(isAuth) {
  return {
    type: userTypes.SET_AUTHENTICATION_STATE,
    payload: { isAuth },
  };
}

export function setLoadingState(isLoading) {
  return {
    type: loadingType.CHANGE_LOADING_STATE,
    payload: { isLoading },
  };
}

export function setErrorState(error) {
  return {
    type: errorType.SET_ERROR_STATE,
    payload: { error },
  };
}
