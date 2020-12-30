import styled from 'styled-components';

export const Content = styled.div`
    width: 624px;
    padding-top: 52px;
    height: calc(100vh - 60px);
    
    @media screen and (max-width:960px){
        width: 100%;
        padding: 20px;
    }
`;

export const Detail = styled.div`
    display: flex;
    margin: 32px 0;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    padding: 20px 0;
`;

export const Row = styled.div<{direction?:boolean}>`
    display: flex;
    flex-direction:${(props) => props.direction && 'row-reverse'};
`;

export const Table = styled.div`
    border: 1px solid ${(props) => props.theme.colors.primary};
    display:flex;
    flex-direction:column;
    margin:20px 0 32px 0;
    box-shadow: -6px -6px 16px rgba(255, 255, 255, 0.8), 6px 6px 16px rgba(79, 105, 132, 0.15);
`;

export const TableRow = styled.div`
    padding: 12px 15px;
    display:flex;
    justify-content:space-between;
    border-bottom:1px solid ${(props) => props.theme.colors.primary};

    &:last-child {
        border-bottom:none;
    }
`;

export const Warn = styled.h2`
    font-size:20px;
    padding-top:3px;
    margin-left:4px;
`;
