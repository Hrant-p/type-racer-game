export const userSelector = state => state.get('userReducer');

export const isAuthSelector = state => userSelector(state).get('isAuth');
export const isLoadingSelector = state => userSelector(state).get('isLoading');
export const allUsersSelector = state => userSelector(state).get('allUsers');
export const errorSelector = state => userSelector(state).get('error');
