import { expect } from 'chai';
import { shallow } from 'enzyme';
import { useFakeTimers } from 'sinon';
import React from 'react';
import MailDate from './index';

describe('MailDate', function () {
  let clock;

  beforeEach(function () {
    clock = useFakeTimers();
  });

  afterEach(function () {
    clock.restore();
  });

  it('displays hours:mins when the day is the same', function () {
    const date = new Date();
    date.setHours(1);
    date.setMinutes(20);
    const wrapper = shallow(<MailDate date={date.toISOString()} />);

    expect(wrapper.text()).to.equal('1:20');
  });

  it('displays the month when the year is the same', function () {
    const date = new Date();
    date.setMonth(0);
    date.setDate(20);
    const wrapper = shallow(<MailDate date={date.toISOString()} />);

    expect(wrapper.text()).to.equal('Jan 20');
  });

  it('displays the year when the year different', function () {
    const date = new Date();
    date.setFullYear(1812);
    const wrapper = shallow(<MailDate date={date.toISOString()} />);

    expect(wrapper.text()).to.equal('1812');
  });
});
