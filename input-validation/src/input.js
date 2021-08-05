import React from 'react';
import {validate} from './validators';

const INPUT_STATES = {
  UNTOUCHED: 'UNTOUCHED',
  VALID: 'VALID',
  INVALID: 'INVALID'
};

const Input = props => {
  const [data,setData] = React.useState('');
  const [blur,setBlur] = React.useState(false);

   return (
     <div className={`form-input${!blur ? '' : validate(data,props.validators) ? '':'--invalid'} `} data-testid="form-input">
       <label htmlFor={props.id}>{props.label}</label>
       <input type={props.type} id={props.id} onChange={e=>{setData(e.target.value);setBlur(false)}} onBlur={e=>setBlur(true)}/>
       <p>{
         !blur ? '' :  validate(data,props.validators) ? "":props.errorText
      }</p>
     </div>
   )
};

export default Input;
