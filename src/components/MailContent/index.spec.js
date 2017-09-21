import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import MailContent from './index';

describe('MailContent', function () {
  it('displays the contact list as expected', function () {
    const from = 'wesanderson@hotmail.com';
    const to = ['stanleykubrick@gmail.com', 'joelcoen@gmail.com'];
    const wrapper = shallow(<MailContent from={from} to={to} />);
    expect(wrapper.find('.contacts').text()).to.equal('wesanderson, stanleykubrick, joelcoen');
  });
});
