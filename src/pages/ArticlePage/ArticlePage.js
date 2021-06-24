import React from "react";
import writing from "../../data/writing"
import {
  useParams
} from "react-router-dom";
import {
  Page
} from "../../GlobalStyle"
import {
  Img,
  Row,
  Column,
  Text,
  Title
} from "./style"

function ArticlePage() {

  let { articleId } = useParams();

  let article = writing.find(item => {
    return item.id === articleId
  })

  let articleText = article.text.split('\n').map(str => <p>{str}</p>);

  return (
    <Page>
    <div className="Article">
    <Row>
        <Img src={require(`../../assets/images/${article.src}`).default} alt={article.title}></Img>
        <Column>
        <Title>{article.title}</Title>
        <Text>{articleText}</Text>
        </Column>
    </Row>
    </div>
    </Page>
  );
}

export default ArticlePage;