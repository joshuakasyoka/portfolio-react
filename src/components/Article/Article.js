import './Article.css';

function Article(props) {
  return (
    <div className="Article">
        {props.title}
    </div>
  );
}

export default Article;