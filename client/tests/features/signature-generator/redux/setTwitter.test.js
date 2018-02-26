import { expect } from 'chai';

import {
  SIGNATURE_GENERATOR_SET_TWITTER,
} from 'src/features/signature-generator/redux/constants';

import {
  setTwitter,
  reducer,
} from 'src/features/signature-generator/redux/setTwitter';

describe('signature-generator/redux/setTwitter', () => {
  it('returns correct action by setTwitter', () => {
    expect(setTwitter()).to.have.property('type', SIGNATURE_GENERATOR_SET_TWITTER);
  });

  it('handles action type SIGNATURE_GENERATOR_SET_TWITTER correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: SIGNATURE_GENERATOR_SET_TWITTER }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
