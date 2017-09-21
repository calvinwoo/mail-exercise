import { expect } from 'chai';
import { stub } from 'sinon';
import { shallow } from 'enzyme';
import React from 'react';
import MailButton from './index';

describe('MailButton', function () {
  it('renders eye icon when isOpen', function () {
    const wrapper = shallow(<MailButton isOpen={true} />);
    expect(wrapper.find('.fa-eye')).to.have.length(1);
  });

  it('renders closed eye icon when not isOpen', function () {
    const wrapper = shallow(<MailButton isOpen={false} />);
    expect(wrapper.find('.fa-eye-slash')).to.have.length(1);
  });

  it('executes click handler when clicked', function () {
    const onClickStub = stub();
    const wrapper = shallow(<MailButton onClick={onClickStub} />);
    wrapper.simulate('click');
    expect(onClickStub.called).to.be.true;
  });
});
