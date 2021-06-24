import styled from 'styled-components';
import { Link } from 'react-router-dom';
import fonts from '../../assets/images/fonts.css';

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  margin-left: 5%;
`

export const Img = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
  height: 60%;
  width: 60%;
`
export const LinkContainer = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  `