import React, {PropTypes} from 'react';

export default class InputArea extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ingredientName: ''
		};

		// here, 'this' refers to the entire class
		// it is set by React when the constructor is executed
		// we want to bind the functions to 'this' when 'this' represents the class
		// can bind to the correct 'this' in the constructor or in render
		this.setIngredientName = this.setIngredientName.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	setIngredientName(event) {
		this.setState({ingredientName: event.target.value});
	}

	handleClick(event) {
		this.props.onAddIngredient(this.state.ingredientName);
	}

	//  'this' is available here as well
  render() {
    return (
      <div>
        <input value={this.state.ingredientName} onChange={this.setIngredientName} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

InputArea.propTypes = {
	onAddIngredient: PropTypes.func
};