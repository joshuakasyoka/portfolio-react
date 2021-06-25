import {
    Title,
    Img,
    LinkContainer,
    Text
  } from "./Style";
  
  function HomepageWC(props) {
  
    return (
      <LinkContainer to={`/writing/${props.id}`}>
        <Img src={require(`../../assets/images/${props.image}`).default} alt={props.title}></Img>
        <Title>{props.title}</Title>
        <Text>{props.preview}</Text>
      </LinkContainer>
    );
  }
  
  export default HomepageWC;
  
  