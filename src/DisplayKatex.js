const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = React.PropTypes;
const katex = require('katex');

const DisplayKatex = React.createClass({
  displayName: 'DisplayKatex',
  
  render: function() {
    return (<div ref='katex'></div>);
  },

  componentDidMount: function() {
    // assumes katex css is loaded on the page:
    // <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.3.0/katex.min.css">

    this.refs.katex.innerHTML = katex.renderToString(this.props.latexString);
  },

});

module.exports = DisplayKatex;
