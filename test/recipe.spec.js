import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Recipe from '../lib/recipe';

describe('<Recipe/>', function () {
  it('should have a div to outline the recipe', function () {
    const wrapper = shallow(<Recipe title="I don't care"/>);
    expect(wrapper.find('div#outline')).to.have.length(1);
  });

  it('should have props', function () {
    const wrapper = shallow(<Recipe title="fake title for property test" author="fake author"/>);
    expect(wrapper.instance().props.title).to.equal('fake title for property test');
    expect(wrapper.instance().props.author).to.equal('fake author');
  });

  it('should display the title', function () {
    const wrapper = shallow(<Recipe title="title for display"/>);
    const title = wrapper.find('div#outline').find('#title');

    expect(title).to.have.length(1);
    expect(title.first().text()).to.equal('title for display');
  });

  it('should display the author', function () {
    const wrapper = shallow(<Recipe title="title for display" author="fake author"/>);
    const author = wrapper.find('div#outline').find('#author');

    expect(author).to.have.length(1);
    expect(author.first().text()).to.equal('fake author');
  });

  it('should have ingredient components', function () {
    const wrapper = shallow(<Recipe title="" />);

    expect(wrapper.find('div#outline').find('IngredientList')).to.have.length(1);
  });
});