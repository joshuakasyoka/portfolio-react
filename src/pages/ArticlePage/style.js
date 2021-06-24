import styled from 'styled-components';
import fonts from '../../assets/images/fonts.css'
import { Link } from 'react-router-dom';

export const Img = styled.img`
    height: 30%;
    width: 30%;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`

export const Text = styled.p`
    line-height: 1.5;
    margin-right: 50px;
    font-size: 18px;
    font-family: 'Roboto';
`

export const Title = styled.h1`
    font-size: 35px;
    font-family: 'Roboto';
`

export const LinkContainer = styled(Link)`
    display: flex;
    margin-top: 30px;
    margin-left: 30px;
    &:hover {
        color: #F3804F;
    }
`

