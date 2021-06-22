import {
  Title,
  Img,
  LinkContainer
} from "./style";

function BannerCard(props) {
  return (
    <LinkContainer to={props.link}>
        <Title>{props.title}</Title>
        <Img src={props.image} alt={props.title}></Img>
    </LinkContainer>
  );
}

export default BannerCard;