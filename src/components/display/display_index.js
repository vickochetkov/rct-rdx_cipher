import React from 'react';
import { connect } from 'react-redux';
// import { abc } from '../../constants/abc';
import { OrigText } from './orig_text';
import { Key } from './key';
import { Calc } from './calc';
import { Encrypted } from './encr';

const Display = ({ keyNum, sourceText }) => {

  return (
    <table id="display">
      <tbody>
        <OrigText          
          sourceText={sourceText}
        />
        <Key
          keyNum={keyNum}
          sourceText={sourceText}
        />
        <Calc
          keyNum={keyNum}
          sourceText={sourceText}
        />
        <Encrypted
          keyNum={keyNum}
          sourceText={sourceText}
        />
      </tbody>
    </table>
  )
};

const mapStateToProps = state => { 
  return {
    sourceText: state.textRed.sourceText,
    keyNum: state.textRed.keyNum,
  }
}

export default connect(mapStateToProps)(Display);
