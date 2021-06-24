import {
    Title,
    Img,
    LinkContainer
  } from "./Style";
  
  function HomepageWC(props) {
  
    return (
      <LinkContainer to={`/writing/${props.id}`}>
        <Img src={require(`../../assets/images/${props.image}`).default} alt={props.title}></Img>
        <Title>{props.title}</Title>
      </LinkContainer>
    );
  }
  
  export default HomepageWC;
  
  