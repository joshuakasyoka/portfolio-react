import gif from '../../assets/images/greendots.gif';
import {
    Container,
    LeftSidebar,
    RightSidebar,
    TitleBox,
    Title,
    InnerImage
} from './style'

function NavBar(props) {

    return (
        <Container>
            <LeftSidebar>
                <TitleBox>
                    <Title>{props.titleOne}</Title>
                </TitleBox>
                <TitleBox className="title-box">
                    <Title>{props.titleTwo}</Title>
                </TitleBox>
            </LeftSidebar>
            <RightSidebar>
                <InnerImage src={gif} alt="green-dots"></InnerImage>
            </RightSidebar>
        </Container>  
    )
}

export default NavBar;
