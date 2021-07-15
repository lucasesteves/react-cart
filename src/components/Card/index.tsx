import React from 'react';

import { Wrapper } from './styles';

interface ICard{
    children:any
}

const Card = ({ children }:ICard) => (
  <Wrapper>{ children }</Wrapper>
);

export default Card;
