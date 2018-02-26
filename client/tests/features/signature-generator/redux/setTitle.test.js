import { expect } from 'chai';

import {
  SIGNATURE_GENERATOR_SET_TITLE,
} from 'src/features/signature-generator/redux/constants';

import {
  setTitle,
  reducer,
} from 'src/features/signature-generator/redux/setTitle';

describe('signature-generator/redux/setTitle', () => {
  it('returns correct action by setTitle', () => {
    expect(setTitle()).to.have.property('type', SIGNATURE_GENERATOR_SET_TITLE);
  });

  it('handles action type SIGNATURE_GENERATOR_SET_TITLE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: SIGNATURE_GENERATOR_SET_TITLE }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
