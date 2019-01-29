import React from 'react';
import {connect} from 'react-redux';
import { abc } from '../../constants/abc';

const KeyOutput = (props) => {

  const { keyNum, curIdx } = props;
  
  const thKeyOutput = ( keyNum, curIdx ) => {
    return (
      keyNum
        .map((num, index) =>
        <th key={index} className={`${index === curIdx && 'active-th'}`} >
          <span className="normalFont" >{abc[num]}</span>
          <span className="smallFont">{num}</span>
        </th>
      )
    )
  }

  return (
    <table>
      <tbody>
        <tr>
          { thKeyOutput(keyNum, curIdx) }
        </tr>
      </tbody>
    </table>
  )
};

const mapStateToProps = state => {
  return { 
    keyNum: state.textRed.keyNum,
    curIdx: state.textRed.curIdx, 
  }
};

export default connect(mapStateToProps)(KeyOutput);