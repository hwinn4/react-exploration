import React from 'react';
import {render} from 'react-dom';
import Recipe from './recipe';

const appRoot = document.getElementById('root');

render(
  <Recipe title="The Best Soup"/>,
  appRoot
);