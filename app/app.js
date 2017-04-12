import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import ShortenerApp from './components/ShortenerApp';

// Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <ShortenerApp/>,
  document.getElementById('app')
);
