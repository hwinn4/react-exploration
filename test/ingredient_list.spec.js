import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import IngredientList from '../lib/ingredient_list';

describe('<IngredientList/>', function () {
  it('should have an ul tag', function () {
    const wrapper = shallow(<IngredientList/>);
    expect(wrapper.find('#ingredient-list')).to.have.length(1);
  });

  it('should render a blank list', function() {
    const wrapper = shallow(<IngredientList/>);
    const ingredient = wrapper.find('#ingredient-list').find('Ingredient');
    
    expect(ingredient).to.have.length(0);
  });

  describe('adding an ingredient', function() {
    const wrapper = shallow(<IngredientList/>);
    const addForm = wrapper.find('InputArea');

    it('should allow adding an ingredient', function() {
      expect(addForm).to.have.length(1);
    });

    it('should display the ingredient on the page', function() {
      const wrapper = shallow(<IngredientList />);
      wrapper.instance().onAddIngredient('An ingredient');
      
      expect(wrapper.state('ingredients')).to.eql(['An ingredient']);
      expect(wrapper.find('#ingredient-list').find('Ingredient')).to.have.length(1);
    });  
  });
});