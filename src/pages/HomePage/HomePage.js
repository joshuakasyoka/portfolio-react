import HomepageWC from '../../components/HomepageWC/HomepageWC';
import BlueIcon from '../../components/BlueIcon/BlueIcon';
import AboutMe from '../../components/AboutMe/AboutMe';
import NavBar from '../../components/NavBar/NavBar';
import ImageOne from '../../assets/images/icon-01.svg';
import AltImageOne from '../../assets/images/iconTransform-01.svg';
import ImageTwo from '../../assets/images/icon-02.svg';
import AltImageTwo from '../../assets/images/iconTransform-02.svg';
import ImageThree from '../../assets/images/icon-03.svg';
import AltImageThree from '../../assets/images/iconTransform-03.svg';
import ImageFour from '../../assets/images/icon-04.svg';
import AltImageFour from '../../assets/images/iconTransform-04.svg';
import ImageFive from '../../assets/images/AboutMeIcon-12.svg';
import AltImageFive from '../../assets/images/AboutMeIconAlt-12-12.svg';

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
  AboutBar,
  Footer,
  Tag
} from "./style";

function HomePage() {

  let writingCards = writing.map((article) => {
    return <HomepageWC id={article.id} title={article.title} image={article.src} preview={article.preview}></HomepageWC>
  })
  writingCards = writingCards.slice(0, 3)


  return (
    <Page>
      <NavBar titleOne="JOSHUA" titleTwo="GREEN"></NavBar>
      <SubNav>
          <Link to="/about">ABOUT</Link>
          <Link to="/design">DESIGN</Link> 
          <Link to="/writing">WRITING</Link>
      </SubNav>
      <MainSection>
      <LeftBar>
        <DesignBar>
          <Row>
            <BlueIcon title="Product Design" text="Various projects I have been working on speculatively. Most of them social. As in trying to make-change through tech. As in trying to make-change through tech. As in trying to make-change through tech." image1={ImageOne} image2={AltImageOne} link="/about"></BlueIcon>
            <BlueIcon title="Illustration" text="Various projects I have been working on speculatively. Most of them social. As in trying to make-change through tech." image1={ImageTwo} image2={AltImageTwo} link="/writing"></BlueIcon>
          </Row>
          <Row>
            <BlueIcon title="Graphic Design" text="Various projects I have been working on speculatively. Most of them social. As in trying to make-change through tech. As in trying to make-change through tech." image1={ImageThree} image2={AltImageThree} link="/about"></BlueIcon>
            <BlueIcon title="Animation" text="Various projects I have been working on speculatively. Most of them social. As in trying to make-change through tech." image1={ImageFour} image2={AltImageFour} link="/about"></BlueIcon>
          </Row>
        </DesignBar>
           <AboutBar>
           <AboutMe title="About Me" text="First things first - I love to make things. When I was a child I would spend hours on end building puppets and sets for stop-motion animations, convincing myself I was the next Tim Burton. Over the years this little penchant of mine has taken many forms, from book-binding to wood-turning, but throughout, one thing has remained unchanged: my passion for designing and creating. I had a BIG realisation a few years ago that the most exciting things being made weren’t material objects like a stool or a lamp, but websites, and online platforms which responded to, and tackled a whole bunch of social issues." image1={ImageFive} image2={AltImageFive} link="/about"></AboutMe>
          </AboutBar>   
      </LeftBar>
        <RightBar>
          {writingCards}
        </RightBar>
      </MainSection>
      <Footer>
         <Tag>Copyright Joshua Green 2021</Tag>
         <Tag>Email: joshua.kasyoka.green@gmail.com</Tag>
         <Tag>Twitter: Joshuakasyoka</Tag>
         <Tag>Mobile: +447376925467</Tag>
        </Footer>
    </Page>
  );
}

export default HomePage;