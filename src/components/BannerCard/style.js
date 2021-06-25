import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import fonts from '../../assets/images/fonts.css';

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: left;
  height: 50%;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  margin-left: 5%;
  border-width: 2px;
  border-color: #F3804F;
  border-style: solid; 
  border-radius: 10pc;
`

export const Img = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
  height: 45%;
  width: 45%;
`
export const LinkContainer = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  
`