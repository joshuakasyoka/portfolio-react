import BannerCard from '../../components/BannerCard/BannerCard'
import WritingCard from '../../components/WritingCard/WritingCard'
import NavBar from '../../components/NavBar/NavBar'
import imageOne from '../../assets/images/il_six.png';
import imageTwo from '../../assets/images/illustration_two.png';
// import imageThree from '../../assets/images/illustration_three.png';
import writing from '../../data/writing';
import { Link } from 'react-router-dom';
import {
  SubNav,
  LeftBar,
  RightBar,
  MainSection,
  Row,
  DesignBar,
  Page,
  AboutBar
} from "./style";

function HomePage() {

  let writingCards = writing.map((article) => {
    return <WritingCard id={article.id} title={article.title} image={article.src}></WritingCard>
  })


  return (
    <Page>
      <NavBar titleOne="JOSH" titleTwo="GREEN"></NavBar>
      <SubNav>
          <Link to="/about">About</Link>
          <Link to="/design">Design</Link> 
          <Link to="/writing">Writing</Link>
      </SubNav>
      <MainSection>
      <LeftBar>
        <DesignBar>
          <Row>
            <BannerCard title="Product Design" image={imageOne} link="/about"></BannerCard>
            <BannerCard title="Illustration" image={imageTwo} link="/writing"></BannerCard>
          </Row>
          <Row>
            <BannerCard title="Graphic Design" image={imageOne} link="/about"></BannerCard>
            <BannerCard title="Animation" image={imageTwo} link="/about"></BannerCard>
          </Row>
        </DesignBar>
          <AboutBar>
            <BannerCard title="About Me" image={imageOne} link="/about"></BannerCard>
          </AboutBar>  
      </LeftBar>
        <RightBar>
          {writingCards}
        </RightBar>
      </MainSection>
    </Page>
  );
}

export default HomePage;