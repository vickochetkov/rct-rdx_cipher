import React from 'react';
import { connect } from 'react-redux';

import { addLetter } from '../../actions';
import { newAbc } from '../../helpers/new-abc';
import AbcRow from '../../helpers/abc-row';

const Table = ({ keyNum, curIdx, addLetter }) => {
  return (
    <table>
      <tbody>
        <tr>
          <AbcRow
            keyNum={keyNum}
            curIdx={curIdx}
            addLetter={addLetter}                        
          />
        </tr>
        <tr> 
          { (keyNum.length > 0) && newAbc(keyNum, curIdx) }
        </tr>
      </tbody>
    </table>
  )
};

const mapStateToProps = state => {
  // console.log(state.textRed.curIdx);  
  return { 
    keyNum: state.textRed.keyNum,
    curIdx: state.textRed.curIdx, 
  }
}

export default connect(mapStateToProps, { addLetter })(Table);
