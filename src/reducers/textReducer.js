import { ADD_LETTER, SUBMIT_KEY, CLEAR_ALL } from '../actions/types';

const initialState = { keyNum: [], sourceText: "", curIdx: 0 };

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_KEY:      
      return { ...state, keyNum: action.payload, sourceText: "", curIdx: 0 };
    case ADD_LETTER:
      // console.log(state);      
      const newText = state.sourceText + action.payload.letter;
      const curIndex = newText.length % state.keyNum.length; 
      return { ...state, sourceText: newText, curIdx: curIndex };
    case CLEAR_ALL:
      return initialState;
    default:
      return state;  
  }
};