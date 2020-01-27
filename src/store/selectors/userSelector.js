export const userSelector = state => state.get('userReducer');

export const isAuthSelector = state => userSelector(state).get('isAuth');
export const isLoadingSelector = state => userSelector(state).get('isLoading');
export const currentUserSelector = state => userSelector(state).get('user');
export const errorSelector = state => userSelector(state).get('error');
export const alertSelector = state => userSelector(state).get('alert');
