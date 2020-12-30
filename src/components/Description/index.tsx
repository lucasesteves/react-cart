import React from 'react';
import {
  Content, Row, Title, Price, Subtitle,
} from './styles';

import formatPrice from '../../services/utils/formatPrice';

interface IDescription {
    title:string,
    subtitle?:string,
    price:number,
}

const Description = ({ title, subtitle, price }:IDescription) => (
  <Content>
    <Row>
      <Title>{ title }</Title>
      {' '}
      <Price>
        R$
        { formatPrice(price) }
      </Price>
    </Row>
    <Subtitle>{ subtitle }</Subtitle>
  </Content>
);

export default Description;
