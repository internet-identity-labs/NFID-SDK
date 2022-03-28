import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default } from './index.stories';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Default onClose={() => {}} id="modeal" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
