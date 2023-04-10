import bg from "../assets/images/bg.jpg";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 100vh;
  position: fixed;
`;

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  display: flex;
  gap: 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`;

const Desc = styled.p`
  text-align: center;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
`;

const Join = styled.p`
  font-weight: 700;
`;

const BtnWrapper = styled.div``;

const Button = styled.button`
  padding: 1rem 2rem;
  border-radius: 200px;
  background: transparent;
  border: 2px solid white;
  margin: 0 1rem;
  color: white;
  &:hover {
    background: white;
    color: #1b4d82;
  }
`;

function Login() {
  return (
    <>
      <Image src={bg} alt="배경이미지" />
      <Wrapper>
        <Title>Welcome to Our WebSite</Title>
        <Desc>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Desc>
        <Join>Do you Wanna Join Us?</Join>
        <BtnWrapper>
          <Button>Get Started Now</Button>
          <Button>Learn More</Button>
        </BtnWrapper>
      </Wrapper>
    </>
  );
}

export default Login;
