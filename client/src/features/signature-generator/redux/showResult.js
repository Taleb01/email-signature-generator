// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  SIGNATURE_GENERATOR_SHOW_RESULT,
} from './constants';

export function showResult() {
  return {
    type: SIGNATURE_GENERATOR_SHOW_RESULT,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case SIGNATURE_GENERATOR_SHOW_RESULT:
      return {
        ...state,
        showResult: true,
      };

    default:
      return state;
  }
}
