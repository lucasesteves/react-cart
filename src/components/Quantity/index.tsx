import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from 'styled-components';
import {
  TableRow, Row, Number, Select,
} from './styles';
import { removeItemCart, updateTotalValue } from '../../store/shop/actions';
import Title from '../Title';

interface IQuantity {
    item: ProductCart;
}

const Quantity = ({ item }:IQuantity) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [total, setTotal] = useState(item.counter);
  const action = (type:string) => {
    if (type === 'add') {
      setTotal(total + 1);
      dispatch(updateTotalValue({
        type: 'add', price: item.price, counter: total + 1, id: item.id,
      }));
    } else {
      const decrement = total - 1;
      if (decrement === 0) {
        dispatch(removeItemCart({ id: item.id, price: item.price }));
      }
      setTotal(decrement);
      dispatch(updateTotalValue({
        type: 'remove', price: item.price, counter: total - 1, id: item.id,
      }));
    }
  };

  return (
    <TableRow>
      <Row>
        <Select color={theme.colors.danger} onClick={() => action('remove')}>-</Select>
        <Number>{ total }</Number>
        <Select color={theme.colors.success} onClick={() => action('add')}>+</Select>
      </Row>
      <Title size={22}>{item.name}</Title>
      <Title size={22}>{`R$ ${(total * item.price).toFixed(2)}`}</Title>
    </TableRow>
  );
};

export default memo(Quantity);
