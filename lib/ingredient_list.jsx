import React, {PropTypes} from 'react';

import Ingredient from './ingredient';
import InputArea from './input_area';

export default class IngredientList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			ingredients: [] 
		}
	};

	onAddIngredient(ingredient) {
		let newIngredients = this.state.ingredients
		newIngredients.push(ingredient);

		this.setState({ingredients: newIngredients});
	}

	render() {
	 	return (
	 		<div>
		 		<ul id="ingredient-list">
		
		 		</ul>
		 		<InputArea />
	 		</div>
	  )
	}
}