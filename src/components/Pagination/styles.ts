import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    width: 400px;
    padding: 20px;
    margin: 0 auto;

    @media screen and (max-width:960px){
        width:100%;
    }
`;

export const PageItem = styled.h2<{ page: boolean }>`
    font-size: 14px;
    font-weight: 700;
    width: 20px;
    height: 20px;
    display: flex;
    padding:15px;
    margin: 0 10px;
    justify-content: center;
    align-items: center;
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 4px;
    background: ${props => props.page ? props.theme.colors.primary : props.theme.colors.background};
    color: ${props => props.page ? props.theme.colors.white : props.theme.colors.primary}; 
    cursor: pointer;
`;