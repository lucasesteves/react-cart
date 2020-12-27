import React from 'react';
import { useSelector } from 'react-redux';
import { Wrapper, Item, Text } from './styles';
import Title from '../Title';

interface IPopover {
    open:boolean;
}

export const Popover:React.FC<IPopover> = ({ open }) => {
    const cart = useSelector((state:ApplicationState)=>state.shop.cart) 

    return(
        <Wrapper open={open}>
            <Title size={18}>Carrinho</Title>
            {cart.map((item,index)=>(
                <Item key={index}>{item.name} <Text> R$ {item.price.toFixed(2)}</Text></Item>
            ))}
            {cart.length === 0 && <Title size={14}>Vazio</Title>}
        </Wrapper>
    )
}

export default Popover;