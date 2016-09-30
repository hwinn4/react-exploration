import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import IngredientList from '../lib/ingredient_list';

describe('<IngredientList/>', function () {
  it('should have an ul tag', function () {
    const wrapper = shallow(<IngredientList/>);
    expect(wrapper.find('#ingredient-list')).to.have.length(1);
  });

  it('should renders a list of ingredients', function() {
    const wrapper = shallow(<IngredientList/>);
    const ingredient = wrapper.find('#ingredient-list').find('Ingredient');
    
    expect(ingredient).to.have.length.above(0);
  });

  describe('adding an ingredient', function() {
    const wrapper = shallow(<IngredientList/>);
    const addForm = wrapper.find('InputArea');

    it('should allow adding an ingredient', function() {
      expect(addForm).to.have.length(1);
    });
  });
});