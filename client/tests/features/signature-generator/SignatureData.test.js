import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { SignatureData } from 'src/features/signature-generator/SignatureData';

describe('signature-generator/SignatureData', () => {
  it('renders node with correct class name', () => {
    const props = {
      signatureGenerator: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SignatureData {...props} />
    );

    expect(
      renderedComponent.find('.signature-generator-signature-data').getElement()
    ).to.exist;
  });
});
