import { expect } from 'chai';

import {
  SIGNATURE_GENERATOR_SET_NAME,
} from 'src/features/signature-generator/redux/constants';

import {
  setName,
  reducer,
} from 'src/features/signature-generator/redux/setName';

describe('signature-generator/redux/setName', () => {
  it('returns correct action by setName', () => {
    expect(setName()).to.have.property('type', SIGNATURE_GENERATOR_SET_NAME);
  });

  it('handles action type SIGNATURE_GENERATOR_SET_NAME correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: SIGNATURE_GENERATOR_SET_NAME }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
