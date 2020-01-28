export const textSelector = state => state.get('textReducer');

export const randomTextSelector = state => textSelector(state).get('randomText');
export const lastTypeResultSelector = state => textSelector(state).get('lastTypeResult');
export const textErrorSelector = state => textSelector(state).get('textError');
export const textLoadingSelector = state => textSelector(state).get('textLoading');
