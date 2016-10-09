import React, {PropTypes} from 'react';

export default class InputArea extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		};

		// here, 'this' refers to the entire class
		// it is set by React when the constructor is executed
		// we want to bind the functions to 'this' when 'this' represents the class
		// can bind to the correct 'this' in the constructor or in render
		this.setInputValue = this.setInputValue.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	setInputValue(event) {
		this.setState({inputValue: event.target.value});
	}

	handleClick(event) {
		this.props.inputHandler(this.state.inputValue);
		this.setState({inputValue: ''});
	}

	//  'this' is available here as well
  render() {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.setInputValue} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

InputArea.propTypes = {
	onAddIngredient: PropTypes.func
};