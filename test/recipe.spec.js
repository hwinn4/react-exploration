import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Recipe from '../lib/recipe';

describe('<Recipe/>', function () {
  it('should have a div to outline the recipe', function () {
    const wrapper = shallow(<Recipe title="I don't care"/>);
    expect(wrapper.find('div#recipe-box')).to.have.length(1);
  });

  it('should have props', function () {
    const wrapper = shallow(<Recipe title="fake title for property test" author="fake author"/>);
    expect(wrapper.instance().props.title).to.equal('fake title for property test');
    expect(wrapper.instance().props.author).to.equal('fake author');
  });

  it('should display the title', function () {
    const wrapper = shallow(<Recipe title="title for display"/>);
    const title = wrapper.find('div#recipe-box').find('#title');

    expect(title).to.have.length(1);
    expect(title.first().text()).to.equal('title for display');
  });

  it('should display the author', function () {
    const wrapper = shallow(<Recipe title="title for display" author="fake author"/>);
    const author = wrapper.find('div#recipe-box').find('#author');

    expect(author).to.have.length(1);
    expect(author.first().text()).to.equal('fake author');
  });

  it('should have ingredient components', function () {
    const wrapper = shallow(<Recipe title="" />);

    expect(wrapper.find('div#recipe-box').find('IngredientList')).to.have.length(1);
  });


  describe('adding an ingredient', function() {
    it('should allow adding an ingredient and an image', function() {
      const wrapper = shallow(<Recipe/>);
      const addForm = wrapper.find('InputArea');
      expect(addForm).to.have.length(2);
    });

    it('should display the ingredient on the page', function() {
      const wrapper = mount(<Recipe/>);
      wrapper.instance().onAddIngredient('first ingredient');
      wrapper.instance().onAddIngredient('second ingredient');
      
      expect(wrapper.find('#ingredient-list').find('li')).to.have.length(2);
    });  
  });
});