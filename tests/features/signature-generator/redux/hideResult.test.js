import { expect } from 'chai';

import {
  SIGNATURE_GENERATOR_HIDE_RESULT,
} from 'src/features/signature-generator/redux/constants';

import {
  hideResult,
  reducer,
} from 'src/features/signature-generator/redux/hideResult';

describe('signature-generator/redux/hideResult', () => {
  it('returns correct action by hideResult', () => {
    expect(hideResult()).to.have.property('type', SIGNATURE_GENERATOR_HIDE_RESULT);
  });

  it('handles action type SIGNATURE_GENERATOR_HIDE_RESULT correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: SIGNATURE_GENERATOR_HIDE_RESULT }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
