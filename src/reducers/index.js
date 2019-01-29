import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

import textReducer from './textReducer';

export default combineReducers({
  form: formReducer,
  textRed: textReducer,  
});

