import styled from 'styled-components';

export const Row = styled.div<{direction?:boolean}>`
    display: flex;
    flex-direction: ${props => props.direction ? 'row-reverse' : 'row'};
`;

export const Select = styled.button<{color:string}>`
    width: 30px;
    height: 30px;
    border-radius: 25px;
    background: ${props=> props.color};
    border: none;
    color: ${props => props.theme.colors.white};
    font-size: 22px;
    cursor: pointer;
`;

export const Number = styled.h2`
    font-size: 22px;
    line-height: 30px;
    font-weight: 700;
    padding: 0 10px;
    color: ${props => props.theme.colors.primary};
`;

export const TableRow = styled.div`
    padding: 12px 15px;
    display:flex;
    justify-content:space-between;
    border-bottom:1px solid ${props => props.theme.colors.primary};
`;

