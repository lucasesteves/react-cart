import React from 'react';
import { Select, Option } from './styles';
import category from '../../services/category/data.json';

interface IComboBox {
  value: number;
  change: (e: number) => void;
}

const ComboBox = ({ value, change }: IComboBox) => {
  const handlerChange = (value: string) => {
    change(parseInt(value));
  };

  return (
    <Select onChange={(e) => handlerChange(e.target.value)} value={value}>
      {category.map((state) => (
        <Option key={state.id} value={state.id}>
          {state.name}
        </Option>
      ))}
    </Select>
  );
};

export default ComboBox;
