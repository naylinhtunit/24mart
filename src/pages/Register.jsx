import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),
                url("https://i.ibb.co/tQY3Bj6/1.jpg") center no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    opacity: 0.7;

    ${mobile({width: "75%"})}
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Aggrement = styled.span`
    font-style: 12px;
    margin: 20px 0px;
    font-weight: 500;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    color: white;
    background-color: teal;
    cursor: pointer;
`;
const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>REGISTER</Title>
                <Form>
                    <Input placeholder="First name"/>
                    <Input placeholder="Last name"/>
                    <Input placeholder="Username"/>
                    <Input placeholder="Email"/>
                    <Input placeholder="Password"/>
                    <Input placeholder="Confirm password"/>
                    <Aggrement>
                        By creating an account, I concent to the processing
                        of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Aggrement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
