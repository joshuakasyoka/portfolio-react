import { Link } from 'react-router-dom';
import './BannerCard.css';

function BannerCard(props) {
  return (
    <Link className="bc-container" to={props.link}>
        <h2 className="bc-title">{props.title}</h2>
        <img className="bc-image" src={props.image} alt={props.title}></img>
    </Link>
  );
}

export default BannerCard;