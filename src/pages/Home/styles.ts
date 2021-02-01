import styled from 'styled-components';

export const Content = styled.div`
    width:624px;
    padding-top: 52px;
    height: calc(100vh - 60px);
    transition: all 1s ease-in-out;
    
    @media screen and (max-width:960px){
        width:100%;
        padding:20px;
    }
`;
