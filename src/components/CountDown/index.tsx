import React, { useState, useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';
import { Timer } from './styles';
import { cleanCart } from '../../store/shop/actions';

const Counter = () => {
  const dispatch = useDispatch();
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          dispatch(cleanCart());
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <Timer>
      {' '}
      {minutes < 10 ? `0${minutes}` : minutes}
      :
      {seconds < 10 ? `0${seconds}` : seconds}
    </Timer>
  );
};

export default memo(Counter);
