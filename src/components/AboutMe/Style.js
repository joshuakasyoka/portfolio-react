import styled from 'styled-components';
import { Link } from 'react-router-dom';
import fonts from '../../assets/images/fonts.css';

export const Title = styled.h1`
  display: flex;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  border-width: 2px;
  color: #F3804F;; 
  border-color: #F3804F;
  border-style: solid; 
  border-radius: 2pc;
  padding: 3px 6px 3px 6px;
  &:hover {
    color: #FFFFFF;
    background-color: #F3804F;
  }
`

export const Img = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
  height: 40%;
  width: 40%;
`

export const LinkContainer = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  padding: 15px 15px 15px 15px;
`

export const Text = styled.p`
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  color: #F3804F;
  padding-top: 15px;
  padding: 30px 30px 30px 30px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`


