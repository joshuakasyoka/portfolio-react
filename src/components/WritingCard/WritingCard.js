import './WritingCard.css';
import { Link } from 'react-router-dom';

function WritingCard(props) {

  return (
    <Link className="wc-container" to={`/writing/${props.id}`}>
      <img className="wc-image" src={require(`../../assets/images/${props.image}`).default} alt={props.title}></img>
      <h2 className="wc-title">{props.title}</h2>
    </Link>
  );
}

export default WritingCard;

