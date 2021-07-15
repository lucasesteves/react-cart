import React from 'react';
import './Button.css';

const Button = ({ children, onClick }:any) => (
  // eslint-disable-next-line react/button-has-type
  <button className="button" onClick={onClick}>{ children }</button>
);

export default Button;
