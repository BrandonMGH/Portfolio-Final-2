import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main/Main';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
      families: ['Permanent Marker','Pathway Gothic One','Rubik Mono One']
    }
  });


ReactDOM.render(<Main />, document.getElementById('root'));
