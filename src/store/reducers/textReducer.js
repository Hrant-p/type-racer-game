import { fromJS } from 'immutable';

const initialState = fromJS({});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
