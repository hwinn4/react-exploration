import React, {PropTypes} from 'react';

import IngredientList from './ingredient_list';
import InputArea from './input_area';
import Image from './image';

export default class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      url: ''
    }
    this.onAddIngredient = this.onAddIngredient.bind(this);
    this.setUrl = this.setUrl.bind(this);
  };

  onAddIngredient(ingredient) {
   let newIngredients = this.state.ingredients;
   newIngredients.push(ingredient);

   this.setState({ingredients: newIngredients});
  }

  setUrl(imageUrl) {
    this.setState({url: imageUrl});
  }

  render() {
    return (
    	<div id="recipe-box">
    		<h1 id="title">{this.props.title}</h1>
    		<h2 id="author">{this.props.author}</h2>
        
        <Image url={this.state.url}/>
        <p>Add an image</p>
        <div id="image">
          <InputArea inputHandler={this.setUrl}/>
        </div>
        
        <p>Add a new ingredient</p>
        <div id="new-ingredient">
          <InputArea inputHandler={this.onAddIngredient}/>
        </div>
        
        <IngredientList ingredients={this.state.ingredients}/>
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