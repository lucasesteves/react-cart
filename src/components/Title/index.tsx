import React from 'react';
import { Content } from './styles';

interface ITitle {
    children:string;
    size:number;
    center?:boolean;
    color?:string;
}

const Title = ({
  children, size, center, color,
}:ITitle) => (
  <Content
    size={size}
    center={center || false}
    color={color || ''}
  >
    { children }
  </Content>
);

export default Title;
