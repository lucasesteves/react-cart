import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 60px;
    width: 100%;
    background: ${(props) => props.theme.colors.primary};
    padding: 15px 20px;
    box-shadow: -6px -6px 16px rgba(255, 255, 255, 0.8), 6px 6px 16px rgba(79, 105, 132, 0.15);
    color: ${(props) => props.theme.colors.white};
    display: flex;
    justify-content: space-between;
`;

export const Title = styled.h2`
    font-size: 28px;
    font-weight: 700;
`;

export const GoBack = styled.div`
    cursor: pointer;
`;

export const Cart = styled.div`
    cursor: pointer;
`;

export const Badge = styled.span`
    position: absolute;
    right: 12px;
    width: 20px;
    height: 20px;
    padding: 5px;
    font-size: 12px;
    font-weight: 900;
    text-align: center;
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.primary};
    border-radius: 20px;
`;
