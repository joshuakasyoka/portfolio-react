import { Link } from 'react-router-dom';
import './WritingPage.css';
import Articles from './Articles';

function WritingPage() {

  let articles = Articles.map((article)=> {
    return (
      <Link to={{
        pathname: `${article.id}`,
        state: { title: article.title }
      }}>{article.title}</Link>
    )
  })

  return (
    <div className="WritingPage">
        <Link to="/">Writing PAGE</Link>
        {articles}
    </div>
  );
}

export default WritingPage;