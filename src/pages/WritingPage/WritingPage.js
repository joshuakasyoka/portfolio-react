import WritingCard from '../../components/WritingCard/WritingCard';
import writing from '../../data/writing';
import {
  Page
} from "../../GlobalStyle"
import {
  Container,
  LinkContainer
} from "./Style"

function WritingPage() {

  let writingCards = writing.map((article) => {
    return <WritingCard id={article.id} title={article.title} image={article.src}></WritingCard>
  })

  return (
    <Page>
        <LinkContainer to="/">Home</LinkContainer>
        <Container>
          {writingCards}
        </Container>
    </Page>
  );
}

export default WritingPage;