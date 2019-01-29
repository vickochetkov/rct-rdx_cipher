import { SUBMIT_KEY, ADD_LETTER, CLEAR_ALL } from './types';
import { abc } from '../constants/abc';

export const submitKey = formValues => dispatch => { 
  const keyNum = formValues.CryptoWord
          .toUpperCase()
          .split('')
          .map(ltr => abc.indexOf(ltr))

  dispatch({ type: SUBMIT_KEY, payload: keyNum }) 
};

export const addLetter = letter => {
  console.log();

  return {
    type: ADD_LETTER,
    payload: {
      letter,
    }  
  };
};

export const clearAll = () => {
  return { type: CLEAR_ALL };
}