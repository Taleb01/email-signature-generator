// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  SIGNATURE_GENERATOR_SET_NAME,
} from './constants';

export function setName(name) {
  return {
    type: SIGNATURE_GENERATOR_SET_NAME,
    data: name
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case SIGNATURE_GENERATOR_SET_NAME:
      return {
        ...state,
        name: action.data
      };

    default:
      return state;
  }
}
