import { Email, Facebook, Instagram, Phone, Room, Twitter, YouTube } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1`
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
`;
const Title = styled.h3`
    margin-bottom: 30px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`;
const Right = styled.div`
    flex: 1;
    padding: 20px;
`;
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
const Payments = styled.img`
    width: 50%;
`;
const Icon = styled.div`
    margin-right: 10px;
`;
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>24mart</Logo>
                <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Impedit qui cupiditate error porro atque pariatur maiores facere est 
                    beatae soluta dolorem reiciendis, repudiandae maxime nulla magnam dicta? 
                    Odit, optio veniam?</Desc>
                <SocialContainer>
                    <SocialIcon color="4267B2">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="FF0000">
                        <YouTube/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                    <ListItem>Privacy Policy</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Icon><Room/></Icon> Pathein 6 Street, Yangon.
                </ContactItem>
                <ContactItem>
                    <Icon><Phone/></Icon> (+959) 000 000 000
                </ContactItem>
                <ContactItem>
                    <Icon><Email/></Icon> contact@24mart.dev
                </ContactItem>
                <Payments src="https://i.ibb.co/RQzKTCd/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer
