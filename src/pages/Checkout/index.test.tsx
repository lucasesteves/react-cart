import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { createStore } from 'redux';
import Checkout from '.';
import Theme from '../../styles/theme/light';

const reducerMock: any = {
  shop: {
    cart: [{
      id: 0,
      idCategory: 0,
      name: 'Coca-cola lata',
      description: 'Coca-cola lata 350ml',
      price: 3.50,
      image: 'url',
      counter: 1,
    }],
    total: 3.50,
  },
};

describe('Should show the products list', () => {
  const storeMock = (state = reducerMock) => state;
  const store = createStore(storeMock);
  it('Show cart list', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={Theme()}>
          <Checkout />
        </ThemeProvider>
      </Provider>,
    );

    expect(screen.getByText('Coca-cola lata')).toBeVisible();
  });
});
