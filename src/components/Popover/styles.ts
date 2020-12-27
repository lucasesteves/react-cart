import styled from 'styled-components'

export const Wrapper = styled.div<{ open:boolean }>`
    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.primary};
    box-shadow: 6px 6px 16px rgba(79, 105, 132, 0.15);    
    position: absolute;
    border-radius: 4px;
    top: 65px;
    right: 10px;
    display: ${props => props.open ? 'flex' : 'none'};
    z-index: 1;
    overflow-y: scroll;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
`;

export const Item = styled.div`
    display:flex;
    font-size:16px;
    font-weight:700;
    padding: 10px 0;
    color: ${props => props.theme.colors.text};
`;

export const Text = styled.span`
    color: ${props => props.theme.colors.primary};
    margin-left: 5px;
`;
