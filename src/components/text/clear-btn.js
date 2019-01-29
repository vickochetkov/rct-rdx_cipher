import React from 'react';
import { connect } from 'react-redux';
import { CLEAR_ALL } from '../../actions/types';

const ClearButton = (props) => {

  return (
    <form className="box c">
      <button 
        className="btn clear" 
        onClick={() => props.dispatch({ type: CLEAR_ALL })} 
      >
        Clear All
      </button>
    </form>
  )
}

const mapStateToProps = state => { 
  return {
    source: state.textRed.sourceText,
  }
}

export default connect(mapStateToProps)(ClearButton);
