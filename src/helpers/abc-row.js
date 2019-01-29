import React from 'react';
import { abc } from '../constants/abc';

const AbcRow = (props) => {
  const { keyNum, addLetter } = props;
  
  return (
    abc.map((letter, index) =>
      <th key={index} className="buttons">
        <button className="btn-abc" onClick={() => (keyNum.length > 0) && addLetter(letter)}>
          <span className="abc-font" >{letter}</span>
          <span className="smallFont">{index}</span>
        </button>        
      </th>
    )       
  )
}

export default AbcRow;