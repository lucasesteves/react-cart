import styled from 'styled-components';

export const Content = styled.div`
    display:flex;
    flex-direction:column;
`;

export const Row = styled.div`
    display:flex;
`;

export const Title = styled.h2`
    font-size:18px;
    font-weight:700;
    color:${props=>props.theme.colors.text};
    margin: 0 10px 12px 0;
`;

export const Price = styled.h2`
    font-size:18px;
    font-weight:700;
    color:${props=>props.theme.colors.primary};
`;

export const Subtitle = styled.h2`
    font-size:14px;
    font-weight:400;
    color:${props=>props.theme.colors.text};

    @media screen and (max-width:960px){
        margin-bottom:20px;
    }
`;