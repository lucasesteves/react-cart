import reducer from './reducer';

const INITIAL_STATE = {
  cart: [],
  total: 0,
};

const product = {
  id: 0,
  idCategory: 0,
  name: 'Coca-cola lata',
  description: 'Coca-cola lata 350ml',
  price: 3.50,
  image: 'url',
  counter: 1,
};

describe('Testing reducer', () => {
  test('Return initial state', () => {
    expect(reducer(undefined, {} as any)).toEqual(INITIAL_STATE);
  });

  test('Add to cart success', () => {
    expect(reducer(undefined, {
      type: 'shop/ADD_TO_CART',
      payload: [product],
    } as any)).toEqual(
      { cart: [product], total: 0 },
    );
  });
});
