import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { SignatureResult } from 'src/features/signature-generator/SignatureResult';

describe('signature-generator/SignatureResult', () => {
  it('renders node with correct class name', () => {
    const props = {
      signatureGenerator: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SignatureResult {...props} />
    );

    expect(
      renderedComponent.find('.signature-generator-signature-result').getElement()
    ).to.exist;
  });
});
