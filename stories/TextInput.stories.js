import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import TextInput from '../src/TextInput';

storiesOf('TextInput', module)
	.add('default', () => <TextInput placeholder="Placeholder text" />)
	.add('with value', () => <TextInput value="Lorem ipsum" />)
	.add('error state', () => <TextInput hasError={true} value="Lorem ipsum" />)
	.add('disabled', () => <TextInput disabled={true} value="Lorem ipsum" />);
