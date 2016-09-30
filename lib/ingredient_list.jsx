import React, {PropTypes} from 'react';

import Ingredient from './ingredient';
import InputArea from './input_area';

export default class IngredientList extends React.Component {
	onAddIngredient() {
		
	}
	render() {
	 	return (
	 		<div>
		 		<ul id="ingredient-list">
		 			<Ingredient/>
		 		</ul>
		 		<InputArea/>
	 		</div>
	  )
	}
}