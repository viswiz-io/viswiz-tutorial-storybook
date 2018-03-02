import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import Button from '../src/Button';

storiesOf('Button', module)
	.add('as button', () => <Button>Hello Button</Button>)
	.add('as link', () => <Button href="https://www.viswiz.io">Hello Link</Button>)
	.add('button with emoji', () => <Button>😀 😎 👍 💯</Button>)
	.add('disabled', () => <Button disabled={true}>Disabled Button</Button>);
