import React from 'react';
import ReactDOM from 'react-dom';

import KeepApp from './Projects/KeepApp/KeepApp';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <>
    <BrowserRouter>
      <KeepApp/>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);


