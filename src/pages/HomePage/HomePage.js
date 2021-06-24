import WritingCard from '../../components/WritingCard/WritingCard';
import BlueIcon from '../../components/BlueIcon/BlueIcon';
import NavBar from '../../components/NavBar/NavBar';
import ImageOne from '../../assets/images/icon-01.svg';
import AltImageOne from '../../assets/images/iconTransform-01.svg';
import ImageTwo from '../../assets/images/icon-02.svg';
import AltImageTwo from '../../assets/images/iconTransform-02.svg';
import ImageThree from '../../assets/images/icon-03.svg';
import AltImageThree from '../../assets/images/iconTransform-03.svg';
import ImageFour from '../../assets/images/icon-04.svg';
import AltImageFour from '../../assets/images/iconTransform-04.svg';

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
  Writing
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
            <BlueIcon title="Product Design" image1={ImageOne} image2={AltImageOne} link="/about"></BlueIcon>
            <BlueIcon title="Illustration" image1={ImageTwo} image2={AltImageTwo} link="/writing"></BlueIcon>
          </Row>
          <Row>
            <BlueIcon title="Graphic Design" image1={ImageThree} image2={AltImageThree} link="/about"></BlueIcon>
            <BlueIcon title="Animation" image1={ImageFour} image2={AltImageFour} link="/about"></BlueIcon>
          </Row>
        </DesignBar>
           <AboutBar>
            <Writing>First things first - I love to make things. When I was a child I would spend hours on end building puppets and sets for stop-motion animations, convincing myself I was the next Tim Burton. Over the years this little penchant of mine has taken many forms, from book-binding to wood-turning, but throughout, one thing has remained unchanged: my passion for designing and creating. I had a BIG realisation a few years ago that the most exciting things being made weren’t material objects like a stool or a lamp, but websites, and online platforms which responded to, and tackled a whole bunch of social issues. Organisations like Outlandish, who build web apps and data dashboards to make the world a ‘fairer, better place’ made me really excited about the possibilities of technology, and convinced me that if I was going to be a designer, a software designer I would be. Since graduating - working in education as a Learning Support Assistant - I have only become more convinced that computers and software are the key to solving a lot of social issues and making a positive contribution to society (the kids paid more attention to learning games on their computers than to my actual lessons).</Writing>
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