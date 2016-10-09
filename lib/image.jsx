import React, {PropTypes} from 'react';
export default class Image extends React.Component {
	render() {
		return (
			<div id="image-box">
				<img id="recipe-image" src={this.props.url} />
			</div>
			)
	}
}