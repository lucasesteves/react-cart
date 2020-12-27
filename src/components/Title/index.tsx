import React from 'react';
import { Content } from './styles';

interface ITitle {
    children:string;
    size:number;
    center?:boolean;
    color?:string;
}

const Title:React.FC<ITitle> = ({ children, size, center, color }) => {
    return(
        <Content 
            size={ size } 
            center={ center ? center : false }
            color={ color ? color: '' }
        >
            { children }
        </Content>
    )
}

export default Title;