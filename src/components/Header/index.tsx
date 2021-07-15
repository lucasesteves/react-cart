import React, { useState } from 'react';

import { BiCart } from 'react-icons/bi';
import { IoIosArrowBack } from 'react-icons/io';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Wrapper, Title, Cart, GoBack, Badge,
} from './styles';
import Popover from '../Popover';

const Header = () => {
  const location = useLocation();
  const history = useHistory();
  const cart = useSelector((state:ApplicationState) => state.shop.cart);
  const [preview, setPreview] = useState(false);

  const popoverScreen = (action:string) => {
    // eslint-disable-next-line no-unused-expressions
    action === 'enter' ? setPreview(true) : setPreview(false);
  };

  const changePage = () => {
    setPreview(false);
    history.push('/checkout');
  };

  return (
    <Wrapper>
      <GoBack onClick={() => history.goBack()}>
        { location.pathname === '/checkout' && <IoIosArrowBack size={32} /> }
      </GoBack>
      <Title>Logo</Title>
      <Cart
        onMouseEnter={() => popoverScreen('enter')}
        onMouseLeave={() => popoverScreen('leave')}
        onClick={changePage}
      >
        { location.pathname === '/' && (
          <>
            {cart.length > 0 && <Badge>{cart.length}</Badge>}
            <BiCart size={32} />
          </>
        )}
      </Cart>
      <Popover open={preview} />
    </Wrapper>
  );
};

export default Header;
