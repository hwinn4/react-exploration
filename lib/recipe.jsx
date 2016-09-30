import React, {PropTypes} from 'react';
export default class Recipe extends React.Component {
  render() {
    return (
    	<div id="outline">
    		// <h1>{this.props.title}</h1>
    	</div>
    )
  }
}

// only for development
// not used in production
// Recipe.propTypes = {
// 	title: PropTypes.string.isRequired,
// 	author: PropTypes.string
// };