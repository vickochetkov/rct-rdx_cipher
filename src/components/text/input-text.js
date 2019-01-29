import React from 'react';
import { connect } from 'react-redux';

const InputText = (props) => {
  const { source }  = props;

  return (
    <div className="box a">
      <h2>Original Text</h2><br/>
      <input
        type={'text'}
        value={source}
        readOnly
      />
    </div>
  )
}

const mapStateToProps = state => { 
  return {
    source: state.textRed.sourceText
  }
}

export default connect(mapStateToProps)(InputText);
