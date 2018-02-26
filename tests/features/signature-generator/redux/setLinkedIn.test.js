import { expect } from 'chai';

import {
  SIGNATURE_GENERATOR_SET_LINKED_IN,
} from 'src/features/signature-generator/redux/constants';

import {
  setLinkedIn,
  reducer,
} from 'src/features/signature-generator/redux/setLinkedIn';

describe('signature-generator/redux/setLinkedIn', () => {
  it('returns correct action by setLinkedIn', () => {
    expect(setLinkedIn()).to.have.property('type', SIGNATURE_GENERATOR_SET_LINKED_IN);
  });

  it('handles action type SIGNATURE_GENERATOR_SET_LINKED_IN correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: SIGNATURE_GENERATOR_SET_LINKED_IN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
