import React from 'react';
import { abc } from '../../constants/abc';

export const OrigText = ({ sourceText }) => {

  const thText = sourceText
    .toUpperCase()
    .split('')
    .map((letter, index) =>
      <th key={index}>
          <span className="normalFont">{letter}</span>
          <span className="smallFont">{abc.indexOf(letter)}</span>
      </th>
    );

  return (
    <tr>
      <th className="lbl">Original Text</th>
      {(sourceText.length > 0) ? thText : <th></th> }
    </tr>
  )
}
