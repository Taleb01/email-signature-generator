import { expect } from 'chai';

import {
  SIGNATURE_GENERATOR_SET_EMAIL,
} from 'src/features/signature-generator/redux/constants';

import {
  setEmail,
  reducer,
} from 'src/features/signature-generator/redux/setEmail';

describe('signature-generator/redux/setEmail', () => {
  it('returns correct action by setEmail', () => {
    expect(setEmail()).to.have.property('type', SIGNATURE_GENERATOR_SET_EMAIL);
  });

  it('handles action type SIGNATURE_GENERATOR_SET_EMAIL correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: SIGNATURE_GENERATOR_SET_EMAIL }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
