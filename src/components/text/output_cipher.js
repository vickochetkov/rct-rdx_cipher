import React from 'react';
import { connect } from 'react-redux';

import { encryptor } from '../../helpers/encryptor';
import { abc } from '../../constants/abc';

const OutputCipher = ({sourceText, keyNum}) => {
  const cipher = encryptor(sourceText, keyNum, abc).join('');

  return (
    <div className="box b">
      <h2>Encrypted Text</h2><br/>
      <input
        className={`${(sourceText.length > 0) && 'orange'}`}
        type={'text'}
        readOnly
        value={cipher}
      /><br/>
    </div>
  )
}

const mapStateToProps = state => { 
  return {
    sourceText: state.textRed.sourceText,
    keyNum: state.textRed.keyNum,
  }
}

export default connect(mapStateToProps)(OutputCipher);
