import React, { Component } from 'react';
import Display from './components/display/display_index';
import Key from './components/key/key_index';
import Text from './components/text/text_index';
import './App.scss';

class App extends Component {
  state = {
    keyNum: [],
    curIdx: 0,
    sourceText: "",
  }
  
  render() {
    const { keyNum, sourceText } = this.state;

    return (
      <div>
        <h1 className="title">Visual Cipher</h1><br/>
        <h2 className="title-2">Main Display</h2><br/>
        <Display
          keyNum={keyNum}
          sourceText={sourceText}
        />
        <br/><hr/><br/>
        <Key />
        <br/><hr/><br/>
        <Text />
      </div>
    )
  }
}

export default App;
