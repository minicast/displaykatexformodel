const React = require('react');
const ReactDOM = require('react-dom');
const DisplayKatex = require('./DisplayKatex.js');

ReactDOM.render(
  <DisplayKatex latexString="p \land q \to r"/>,
  document.getElementById('DisplayKatexContainer')
);
