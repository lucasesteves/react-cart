import React from 'react';

import { Content } from './styles';

interface IButton {
    children:string
    submit:()=>void
}

const Button = ({ children, submit }:IButton) => (
  <Content onClick={submit}>{ children }</Content>
);

export default Button;
