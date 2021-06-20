import BannerCard from '../BannerCard/BannerCard'
import WritingCard from '../WritingCard/WritingCard'
import './HomePage.css'
import NavBar from '../NavBar/NavBar'
import imageOne from '../../assets/home/il_six.png';
import imageTwo from '../../assets/home/illustration_two.png.png';
import imageThree from '../../assets/home/illustration_three.png';

function HomePage() {
  return (
    <div className="HomePage">
      <NavBar titleOne="JOSH" titleTwo="GREEN"></NavBar>
      <div className="SectionOne">
        <div className="LeftBar">
          <div className="Row">
          <BannerCard title="Product Design" image={imageOne} link="/about"></BannerCard>
          <BannerCard title="Illustration" image={imageTwo} link="/about"></BannerCard>
          </div>
          <div className="Row">
          <BannerCard title="Graphic Design" image={imageOne} link="/about"></BannerCard>
          <BannerCard title="Animation" image={imageTwo} link="/about"></BannerCard>
          </div>
        </div>
        <div className="RightBar">
          <WritingCard title="visual-verbal hybriditiy" image={imageOne}></WritingCard>
          <WritingCard title="a narrative archicture" image={imageTwo}></WritingCard>
          <WritingCard title="postmodernism and metafiction" image={imageThree}></WritingCard>
        </div>
      </div>
    </div>
  );
}

export default HomePage;