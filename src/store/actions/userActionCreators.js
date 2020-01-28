import { errorType, loadingType, userTypes } from './types';

export function userLoginRequest(login, password) {
  return {
    type: userTypes.LOGIN_USER,
    payload: { login, password },
  };
}

export function userLoginSucceed(data) {
  return {
    type: userTypes.USER_LOGIN_SUCCEED,
    payload: { data },
  };
}

export function userSignOut() {
  return {
    type: userTypes.USER_SIGN_OUT,
    payload: {},
  };
}

export function createNewUserRequest(newUser) {
  return {
    type: userTypes.POST_CERTAIN_USER,
    payload: { newUser },
  };
}

export function createNewUserRequestSuccess() {
  return {
    type: userTypes.POST_CERTAIN_USER_SUCCEED,
    payload: {},
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

export function setAlert(alert) {
  return {
    type: errorType.SET_ALERT,
    payload: { alert },
  };
}

export function removeAlert() {
  return {
    type: errorType.REMOVE_ALERT,
    payload: {},
  };
}
