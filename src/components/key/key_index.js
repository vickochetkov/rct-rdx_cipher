import React, { Component } from 'react';
import {connect} from 'react-redux';

import {submitKey} from '../../actions';
import { Field, reduxForm } from 'redux-form';
import KeyOutput from './keyOutput';

class Key extends Component {

  renderError({ error, touched }) {
    // console.log(error, touched);    
    if (touched && error) {
      return (
        <div className="ui negative message">          
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    // console.log(meta);
    const warning = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={warning}>
        <input {...input} placeholder={label} autoComplete="off" className="fieldInput"/>
        {this.renderError(meta)}          
      </div>
    )  
  }

  onSubmit = formValues => {
    // console.log(formValues);
    this.props.submitKey(formValues);
  }  
  
  render() {

    return (
      <div>
        <h1 className="title-2">Crypto WORD</h1><br/>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error fieldInput">
          <h4>* use single word 3-10 characters long</h4>
          <Field 
            name="CryptoWord" 
            component={this.renderInput}
            label="Enter Crypto Word*" 
          />
          <button className="btn clear">Submit</button>
        </form><br/>
        <KeyOutput />      
      </div>
    )
  }
}

const validate = formValues => {
  const errors = {},
  checkWord = /^[a-z]{3,10}$/i;

  if (!formValues.CryptoWord || !checkWord.test(formValues.CryptoWord)) {
    errors.CryptoWord = 'Error! Use single word 3-10 characters long instead!'
  }  

  return errors;
}

const formWrapped = reduxForm({ 
  form: 'indexKey',
  validate
})(Key);

export default connect(null, { submitKey })(formWrapped);