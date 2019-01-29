import React from 'react';
import { abc } from '../../constants/abc';

export const Key = ({ keyNum, sourceText }) => {

  const keyRow = (keyNum, sourceText) => {
  	var rslt = [],
    count = sourceText.length,
  	divider = Math.floor(count/keyNum.length),
  	mod = keyNum.slice(0, count % keyNum.length);

  	if (divider >= 1) {
  		for (var j=0; j < divider; j++) {
  			rslt = [...rslt, ...keyNum];
  		}
  	};

  	return [...rslt, ...mod];
  }

  const thKey = keyRow(keyNum, sourceText).map((num, index) =>
    <th key={index}>
        <span className="normalFont">{abc[num]}</span>
        <span className="smallFont">{num}</span>
    </th>
  );

  return (
    <tr>
      <th className="lbl">Key</th>
      {(sourceText.length > 0) ? thKey : <th></th>}
    </tr>
  )
}
