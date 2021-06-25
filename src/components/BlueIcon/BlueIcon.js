import React, { useState } from 'react';
import {
    Title,
    Img,
    LinkContainer,
    Text,
    Content
  } from "./Style";

function BlueIcon(props) {

    const [iconImage, setIconImage] = useState(props.image1);

    let toggleImage = () => {
      if(iconImage == props.image1) {
        setIconImage(props.image2)
      } else {
        setIconImage(props.image1)
      }
    }
  
    return (
      <LinkContainer to={props.link}>
          <Title>{props.title}</Title>
          <Content>
          <Text>{props.text}</Text>
          <Img
            src={iconImage}
            onMouseOver={toggleImage}
            onMouseOut={toggleImage}
            alt={props.title}>
          </Img>
          </Content>
      </LinkContainer>
    );
  }
  
export default BlueIcon;

