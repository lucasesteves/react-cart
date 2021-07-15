import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Quantity from '.';
import { store } from '../../store';
import Theme from '../../styles/theme/light';

describe('Should show the products list', () => {
  const productMock = {
    id: 0,
    idCategory: 0,
    name: 'Coca-cola lata',
    description: 'Coca-cola lata 350ml',
    price: 3.50,
    image: 'url',
    counter: 1,
  };

  it('Show cart list', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={Theme()}>
          <Quantity item={productMock} />
        </ThemeProvider>
      </Provider>,
    );

    expect(screen.getByText(productMock.name)).toBeVisible();
  });
});
