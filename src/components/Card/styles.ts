import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    display:flex;
    background:${props=>props.theme.colors.background};
    border: 1px solid ${props=>props.theme.colors.primary};
    border-radius:12px;
    padding:20px;
    box-shadow: -6px -6px 16px rgba(255, 255, 255, 0.8), 6px 6px 16px rgba(79, 105, 132, 0.15);
    display:flex;
    justify-content:space-between;
    margin-bottom:20px;

    @media screen and (max-width:960px){
        flex-direction:column;
    }
`;