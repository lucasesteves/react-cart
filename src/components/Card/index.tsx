import React from 'react'

import { Wrapper } from './styles';

interface ICard{
    children:any
}

const Card: React.FC<ICard> = ({children}) => {
    return(
        <Wrapper>{children}</Wrapper>
    )
}

export default Card;