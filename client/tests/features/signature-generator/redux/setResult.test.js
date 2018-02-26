import { expect } from 'chai';

import {
  SIGNATURE_GENERATOR_SET_RESULT,
} from 'src/features/signature-generator/redux/constants';

import {
  setResult,
  reducer,
} from 'src/features/signature-generator/redux/setResult';

describe('signature-generator/redux/setResult', () => {
  it('returns correct action by setResult', () => {
    expect(setResult()).to.have.property('type', SIGNATURE_GENERATOR_SET_RESULT);
  });

  it('handles action type SIGNATURE_GENERATOR_SET_RESULT correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: SIGNATURE_GENERATOR_SET_RESULT }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
