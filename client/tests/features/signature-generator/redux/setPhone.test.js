import { expect } from 'chai';

import {
  SIGNATURE_GENERATOR_SET_PHONE,
} from 'src/features/signature-generator/redux/constants';

import {
  setPhone,
  reducer,
} from 'src/features/signature-generator/redux/setPhone';

describe('signature-generator/redux/setPhone', () => {
  it('returns correct action by setPhone', () => {
    expect(setPhone()).to.have.property('type', SIGNATURE_GENERATOR_SET_PHONE);
  });

  it('handles action type SIGNATURE_GENERATOR_SET_PHONE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: SIGNATURE_GENERATOR_SET_PHONE }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
