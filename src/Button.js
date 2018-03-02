import * as React from 'react';
import './Button.css';

function Button(props) {
	const Component = props.href ? 'a' : 'button';
	const className = `${props.className} ${
		Math.random() < 0.5 ? 'fakeChange' : ''
	}`;

	return <Component {...props} className={className} />;
}

Button.defaultProps = {
	className: 'button',
};

export default Button;
