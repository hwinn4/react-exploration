import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Recipe from '../lib/recipe';

describe('<Recipe/>', function () {
  it('should have a div to outline the recipe', function () {
    const wrapper = shallow(<Recipe/>);
    expect(wrapper.find('div#outline')).to.have.length(1);
  });

  it('should have props for title', function () {
    const wrapper = shallow(<Recipe/>);
    expect(wrapper.prop('title')).to.be.defined;
  });
});