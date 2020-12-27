import React, { useState } from 'react'

import { Content, Detail, Column, Row, Table, TableRow, Warn } from './styles';
import Title from '../../components/Title';
import { GiShoppingBag } from 'react-icons/gi';
import { useTheme } from 'styled-components';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { cleanCart } from '../../store/shop/actions';

import CountDown from '../../components/CountDown';
import Quantity from '../../components/Quantity';
import { useHistory } from 'react-router-dom';

const Checkout:React.FC = () => {
    const theme = useTheme();
    const history = useHistory();
    const dispatch = useDispatch();
    const [ open, setOpen ] = useState(false)
    const { cart, total } = useSelector((state:ApplicationState)=>{
        return{
            cart: state.shop.cart,
            total: state.shop.total
        }
    })

    const submit = () => {
        setOpen(true)
    }

    const close = (status:string) => {
        status === 'success' && dispatch(cleanCart())
        setOpen(false)
        history.push('/')
    }

    return(
        <Content>
            {cart.length>0 ? <>
            <Title size={32} center={true} color={theme.colors.primary}>Finalizar pedido</Title>
            <Detail>
                <GiShoppingBag size={88} color={theme.colors.primary} />
                <Column>
                    <Title size={24}>Armazém do seu zé</Title>
                    <Row>
                        <CountDown />
                        <Warn> min restantes</Warn>
                    </Row>
                </Column>
            </Detail>

            <Title size={24} color={theme.colors.primary}>Revise os seus itens</Title>

            <Table>
                {cart.map((item,index)=>(
                    <Quantity key={index} item={item} />
                ))}
                <TableRow>
                    <Title size={22}>Total</Title>
                    <Title size={22}>{`R$ ${total.toFixed(2)}`}</Title>
                </TableRow>
            </Table>
            <Row direction={true}>
                <Button submit={submit}>Finalizar compra</Button>
            </Row>
            </> : <Modal open={true} status={"deny"} title={'Nenhum produto foi encontrado no carrinho'} close={close} /> }
            <Modal open={open} status={"success"} title={'Pedido realizado com sucesso!'} close={close} />
        </Content>
    )
}

export default Checkout;