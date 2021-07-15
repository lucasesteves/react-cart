import { addToCart } from './actions';

describe('Shop Actions', () => {
  test('ADD_TO_CART success', () => {
    const product = {
      id: 0,
      idCategory: 0,
      name: 'Coca-cola lata',
      description: 'Coca-cola lata 350ml',
      price: 3.50,
      image: 'url',
      counter: 1,
    };
    expect(addToCart(product)).toEqual({
      type: 'shop/ADD_TO_CART',
      payload: product,
    });
  });
});
