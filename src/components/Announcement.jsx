import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #f50057;
    color: white;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
`;

const Announcement = () => {
    return (
        <Container>
            Super deal! Free Shopping On Orders Over 30000 MMK
        </Container>
    )
}

export default Announcement
