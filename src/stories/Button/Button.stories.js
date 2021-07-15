import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

const StorieButton = () => <Button onClick={action('Clique')}>Botão</Button>;

export default {
  title: 'Button',
  component: Button,
};

export { StorieButton };
