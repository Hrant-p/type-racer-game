import { fromJS } from 'immutable';

const initialState = fromJS({
  randomText: null,
  lastTypeResult: null,
  textError: null,
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
