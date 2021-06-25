import gif from '../../assets/images/greendots.gif';
import {
    Container,
    LeftSidebar,
    RightSidebar,
    TitleBox,
    Title,
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
                
            </RightSidebar>
        </Container>  
    )
}

export default NavBar;
