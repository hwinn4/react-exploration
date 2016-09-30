import React, {PropTypes} from 'react';
import IngredientList from './ingredient_list';


export default class Recipe extends React.Component {
  render() {
    return (
    	<div id="outline">
    		<h1 id="title">{this.props.title}</h1>
    		<h2 id="author">{this.props.author}</h2>
    		<IngredientList />
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