import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import { spy } from 'sinon';

import InputArea from '../lib/input_area';

describe('InputArea', function() {
	it('should call onSubmit when Add is clicked', () => {
    const addItemSpy = spy();
    const wrapper = shallow(<InputArea onAddIngredient={addItemSpy}/>);
    wrapper.setState({ingredientName: 'Fake Ingredient'});
    const addButton = wrapper.find('button');

    addButton.simulate('click');

    expect(addItemSpy.calledOnce).to.equal(true);
    expect(addItemSpy.calledWith('Fake Ingredient')).to.equal(true);
  });

	it('should accept input', () => {
    const wrapper = mount(<InputArea/>);
    const input = wrapper.find('input');

    input.simulate('change', {target: { value: 'Sample Ingredient' }});

    expect(wrapper.state('ingredientName')).to.equal('Sample Ingredient');
    expect(input.prop('value')).to.equal('Sample Ingredient');
  });

  it('should contain an input and a button', () => {
    const wrapper = shallow(<InputArea/>);
    expect(wrapper.containsAllMatchingElements([
      <input/>,
      <button>Add</button>
    ])).to.equal(true);
  });
});