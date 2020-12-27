import React from 'react'

import { Content } from './styles'

interface IButton {
    children:string
    submit:()=>void
}

const Button:React.FC<IButton> = ({ children, submit }) => {
    return(
        <Content onClick={submit}>
            { children }
        </Content>
    )
}

export default Button;