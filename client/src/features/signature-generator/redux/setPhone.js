// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  SIGNATURE_GENERATOR_SET_PHONE,
} from './constants';

export function setPhone(phone) {
  return {
    type: SIGNATURE_GENERATOR_SET_PHONE,
    data: phone
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case SIGNATURE_GENERATOR_SET_PHONE:
      return {
        ...state,
        phone: action.data
      };

    default:
      return state;
  }
}
