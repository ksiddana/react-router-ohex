import React from 'react'
import ReactDOM from 'react-dom'

const App = React.createClass({
  render: function() {
    return (<div>Text text text</div>)
  }
});

const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);
