import React from 'react';
import { Wrapper, Content, Space } from './styles';

import { FaCheckCircle } from 'react-icons/fa';
import { RiErrorWarningFill } from 'react-icons/ri';
import { useTheme } from 'styled-components';
import Title from '../Title';
import Button from '../Button';

interface IModal{
    open:boolean,
    title:string,
    status:string,
    close:(status:string)=>void
}

const Modal:React.FC<IModal> = ({ open, title, status, close }) => {
    const theme = useTheme()

    return(
        <Wrapper open={open}>
            <Content>
                {status === 'success' ? <FaCheckCircle size={54} color={theme.colors.primary} />
                 :<RiErrorWarningFill size={54} color={theme.colors.primary} /> }
                <Space value={35} />
                <Title size={18} color={theme.colors.primary}>{title}</Title>
                <Space value={25} />
                <Button submit={()=>close(status)}>Fechar</Button>
            </Content>
        </Wrapper>
    )
}

export default Modal;