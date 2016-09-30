import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import IngredientList from '../lib/ingredient_list';

describe('<IngredientList/>', function () {
  describe('rendering ingredients', () => {
    it('should render zero items', () => {
      const wrapper = shallow(<IngredientList ingredients={[]}/>);
      expect(wrapper.find('li')).to.have.length(0);
    });

    it('should render undefined items', () => {
      const wrapper = shallow(<IngredientList ingredients={undefined}/>);
      expect(wrapper.find('li')).to.have.length(0);
    });

    it('should render some items', () => {
      const items = ['first ingredient', 'second ingredient', 'third ingredient'];
      const wrapper = shallow(<IngredientList ingredients={items}/>);
      expect(wrapper.find('li')).to.have.length(3);
    });
  });

});