import './WritingCard.css';

function WritingCard(props) {

  let title = props.title
  
  return (
    <div className="wc-container">
      <img className="wc-image" src={props.image} alt={props.title}></img>
      <h2 className="wc-title">{title}</h2>
    </div>
  );
}

export default WritingCard;

