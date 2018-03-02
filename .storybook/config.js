import { addDecorator, configure } from '@storybook/react';
import {
	initScreenshot,
	setScreenshotOptions,
	withScreenshot,
} from 'storybook-chrome-screenshot';

setScreenshotOptions({
	viewport: {
		width: 300,
		height: 100,
	},
});
addDecorator(initScreenshot());
addDecorator(withScreenshot());

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
