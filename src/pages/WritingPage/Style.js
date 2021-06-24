import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const LinkContainer = styled(Link)`
    display: flex;
    margin-top: 30px;
    margin-left: 30px;
    &:hover {
        color: #F3804F;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 30px;
    margin-right: 30px;
    `