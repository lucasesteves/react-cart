import styled from 'styled-components';

export const Wrapper = styled.div<{open:boolean}>`
    display: ${(props) => (props.open ? 'flex' : 'none')}; 
    position: fixed; 
    z-index: 1; 
    align-items: center;
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgba(0,0,0,0.6); 

    @media screen and (max-width:960px){
        padding-top:40px;
        align-items: initial;
    }
`;

export const Content = styled.div`
    background-color: ${(props) => props.theme.colors.white};
    margin: auto;
    padding: 32px 20px 20px 20px;
    border-radius: 4px;
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: closeModalAnimation .3s ease-in-out;
    animation-fill-mode:backwards; 

    @media screen and (max-width:600px) {
        width: 100%;
        border-radius: 12px 12px 0 0;
        height: calc(100vh - 40px);
        animation: openModalAnimation .2s ease-in-out;
        animation-fill-mode:forwards; 
    }

    @keyframes openModalAnimation {
        0% { height: 229px; }
        100% { height:calc(100vh - 40px); }
    }

    @keyframes closeModalAnimation {
        0% { height:calc(100vh - 40px); }
        100% { height: 229px; }
    } 
`;

export const Space = styled.div<{value:number}>`
    height: ${(props) => `${props.value}px`};
`;
