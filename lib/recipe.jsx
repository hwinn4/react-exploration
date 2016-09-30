import React, {PropTypes} from 'react';

import IngredientList from './ingredient_list';
import InputArea from './input_area';

export default class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [] 
    }
    this.onAddIngredient = this.onAddIngredient.bind(this);
  };

  onAddIngredient(ingredient) {
   let newIngredients = this.state.ingredients;
   newIngredients.push(ingredient);

   this.setState({ingredients: newIngredients});
  }

  render() {
    return (
    	<div id="outline">
    		<h1 id="title">{this.props.title}</h1>
    		<h2 id="author">{this.props.author}</h2>
    		<IngredientList ingredients={this.state.ingredients}/>
        <InputArea onAddIngredient={this.onAddIngredient}/>
    	</div>
    )
  }
}

// only for development
// not used in production
Recipe.propTypes = {
	title: PropTypes.string.isRequired,
	author: PropTypes.string
};