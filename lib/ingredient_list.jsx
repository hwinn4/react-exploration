import React, {PropTypes} from 'react';

import Ingredient from './ingredient';

export default class IngredientList extends React.Component {
	render() {
	 	return this.props.ingredients ? (
	 		<div>
		 		<ul id="ingredient-list">
					{this.props.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
		 		</ul>
	 		</div>
	  )
	  : null;
	}
}


IngredientList.propTypes = {
	ingredients: PropTypes.array
};