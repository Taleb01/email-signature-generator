import { expect } from 'chai';

import {
  SIGNATURE_GENERATOR_HIDE_EXAMPLE,
} from 'src/features/signature-generator/redux/constants';

import {
  hideExample,
  reducer,
} from 'src/features/signature-generator/redux/hideExample';

describe('signature-generator/redux/hideExample', () => {
  it('returns correct action by hideExample', () => {
    expect(hideExample()).to.have.property('type', SIGNATURE_GENERATOR_HIDE_EXAMPLE);
  });

  it('handles action type SIGNATURE_GENERATOR_HIDE_EXAMPLE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: SIGNATURE_GENERATOR_HIDE_EXAMPLE }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
