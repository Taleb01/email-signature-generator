// This is the root reducer of the feature. It is used for:
//   1. Load reducers from each action in the feature and process them one by one.
//      Note that this part of code is mainly maintained by Rekit, you usually don't need to edit them.
//   2. Write cross-topic reducers. If a reducer is not bound to some specific action.
//      Then it could be written here.
// Learn more from the introduction of this approach:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da.

import initialState from './initialState';
import { reducer as setNameReducer } from './setName';
import { reducer as setTitleReducer } from './setTitle';
import { reducer as setPhoneReducer } from './setPhone';
import { reducer as setEmailReducer } from './setEmail';
import { reducer as setLinkedInReducer } from './setLinkedIn';
import { reducer as setTwitterReducer } from './setTwitter';
import { reducer as showResultReducer } from './showResult';
import { reducer as hideResultReducer } from './hideResult';
import { reducer as setResultReducer } from './setResult';
import { reducer as hideExampleReducer } from './hideExample';

const reducers = [
  setNameReducer,
  setTitleReducer,
  setPhoneReducer,
  setEmailReducer,
  setLinkedInReducer,
  setTwitterReducer,
  showResultReducer,
  hideResultReducer,
  setResultReducer,
  hideExampleReducer,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
