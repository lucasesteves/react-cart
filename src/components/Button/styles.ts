import styled from 'styled-components';

export const Content = styled.button`
    background:${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    font-size: 18px;
    font-weight: 700;
    padding: 12px 20px;
    outline: none;
    border-radius: 6px;
    border: none;
    cursor: pointer;

    @media screen and (max-width:960px){
        padding: 12px 16px;
        font-size: 16px;
    }
`;
