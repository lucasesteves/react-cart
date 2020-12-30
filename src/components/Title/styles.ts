import styled from 'styled-components';

export const Content = styled.h2<{ size:number, center:boolean, color:string }>`
    font-size: ${(props) => (props.size ? `${props.size}px` : 18)};
    font-weight: 700;
    text-align: ${(props) => (props.center ? 'center' : 'left')};
    color: ${(props) => (props.color ? props.color : props.theme.colors.text)};
`;
