import React from 'react';
import { abc } from '../constants/abc';

export const newAbc = (keyNum, curIdx) => {
  const newArr = [...abc.slice(keyNum[curIdx]), ...abc.slice(0, keyNum[curIdx])];

  return (
    newArr.map((letter, index) =>
      <th key={index} >
        <span className="normalFont" >{letter}</span>
        <span className="smallFont">{abc.indexOf(letter)}</span>
      </th>
    )
  )
};
