// esversion: 6
import React from 'react';

import Table from './table';
import InputText from './input-text';
import OutputCipher from './output_cipher';
import ClearButton from './clear-btn';

const Text = ({keyNum, sourceText}) => {
  console.log();  

  return (
    <div>
      <h1 className="title-2">Word Encoding</h1>
      <br/>
      <h2 className="">Use these buttons to input Text after Crypto WORD was defined</h2>
      <Table />      
      <div className="wrapper">
        <InputText />
        <OutputCipher sourceText={sourceText} keyNum={keyNum}/>
        <ClearButton />
      </div>
    </div>
  )
};

export default Text;
