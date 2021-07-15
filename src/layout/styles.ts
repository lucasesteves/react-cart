import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Body = styled.div`
    width:100%;
    overflow-y:scroll;
    height: calc(100vh - 60px);
    display:flex;
    justify-content:center;

    @media screen and (max-width:960px){
        ::-webkit-scrollbar {
            display: none;
        }
    }
`;
