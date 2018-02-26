import { expect } from 'chai';

import {
  SIGNATURE_GENERATOR_SHOW_RESULT,
} from 'src/features/signature-generator/redux/constants';

import {
  showResult,
  reducer,
} from 'src/features/signature-generator/redux/showResult';

describe('signature-generator/redux/showResult', () => {
  it('returns correct action by showResult', () => {
    expect(showResult()).to.have.property('type', SIGNATURE_GENERATOR_SHOW_RESULT);
  });

  it('handles action type SIGNATURE_GENERATOR_SHOW_RESULT correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: SIGNATURE_GENERATOR_SHOW_RESULT }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
