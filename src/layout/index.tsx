import React, { ReactNode } from 'react';

import Header from '../components/Header';

import { Wrapper, Body } from './styles';

interface ILayout {
    children: ReactNode
}

const Layout = ({ children }:ILayout) => (
  <Wrapper>
    <Header />
    <Body>{ children }</Body>
  </Wrapper>
);

export default Layout;
