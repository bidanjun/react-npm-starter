import React, { Component } from 'react';

// npm run copy
// will build react-npm-starter and saved in node_modules\react-npm-starter 
import starter from 'react-npm-starter'
let result = starter()

class App extends Component {
  render() {
    return (
      <div>
        {result}
      </div>
    );
  }
}

export default App;
