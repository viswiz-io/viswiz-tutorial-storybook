import * as React from 'react';
import './TextInput.css';

function TextInput(props) {
	const { hasError, ...otherProps } = props;
	const className = `${props.className} ${hasError && 'hasError'} ${
		Math.random() < 0.5 ? 'fakeChange' : ''
	}`;

	return <input type="text" {...otherProps} className={className} />;
}

TextInput.defaultProps = {
	className: 'textInput',
};

export default TextInput;
