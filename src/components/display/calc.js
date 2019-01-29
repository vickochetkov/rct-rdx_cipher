import React from 'react';
import { abc } from '../../constants/abc';

export const Calc = ({ keyNum, sourceText }) => {
  const calc = (key, str) => {
    return str
  		.toUpperCase()
  		.split('')
  		.map((ltr, i) => (abc.indexOf(ltr) + key[i % key.length]) > 25 ?
        `
          (${abc.indexOf(ltr)} +
          ${key[i % key.length]}) -
          ${abc.length} =
          ${(abc.indexOf(ltr) + key[i % key.length])%abc.length}
        `
      :
        `
          ${abc.indexOf(ltr)} +
          ${key[i % key.length]} =
          ${(abc.indexOf(ltr) + key[i % key.length])%abc.length}
        `)
  }

  const thCalc = calc(keyNum, sourceText).map((str, index) =>
    <th key={index} className="smallFont display">
      {str}
    </th>
  );

  return (
    <tr>
      <th className="lbl">Calculation</th>
      {(keyNum.length > 0) && (sourceText.length > 0) ? thCalc : <th></th>}
    </tr>
  )
}
