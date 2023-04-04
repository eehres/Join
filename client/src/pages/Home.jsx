import bg from "../assets/images/bg.jpg";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 100vh;
`;

const Right = styled.div`
  flex: 1;
`;

function Home() {
  return (
    <>
      <Container>
        <Left>
          <Image src={bg} />
        </Left>
        <Right></Right>
      </Container>
    </>
  );
}

export default Home;
