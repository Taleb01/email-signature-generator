import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { DefaultPage } from 'src/features/signature-generator/DefaultPage';

describe('signature-generator/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      signatureGenerator: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.signature-generator-default-page').getElement()
    ).to.exist;
  });
});
