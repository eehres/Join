import React from "react";
import bg from "../../src/assets/images/bg.jpg";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const LeftInfo = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  position: absolute;
  color: white;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Desc = styled.p`
  line-height: 1.4;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RightWrap = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const SubDesc = styled.p`
  margin-bottom: 2rem;
`;

const InputWrap = styled.div`
  width: 80%;
`;

const Input = styled.input`
  width: 100%;
  height: 5vh;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  border: none;
  background-color: #f3f0f0;
  padding: 0.5rem;

  &:nth-child(2) {
    margin-bottom: 1.7rem;
  }
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 5vh;
  border: none;
  margin-bottom: 2rem;
  cursor: pointer;
  background-color: #f3f0f0;
`;

const SignDesc = styled.p`
  width: 100%;
  text-align: center;
  cursor: pointer;
`;

function Home() {
  return (
    <>
      <Container>
        <Left>
          <Image src={bg} alt="배경이미지" />
          <LeftInfo>
            <Title>Lorem Ipsum</Title>
            <Desc>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut optio
              provident in ab consectetur reiciendis voluptas sunt, aspernatur
              blanditiis aperiam, laborum non quaerat suscipit, maiores a nam
              perferendis saepe fugiat. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Ut optio provident in ab consectetur reiciendis
              voluptas sunt, aspernatur blanditiis aperiam, laborum non quaerat
              suscipit, maiores a nam perferendis saepe fugiat.
            </Desc>
          </LeftInfo>
        </Left>
        <Right>
          <RightWrap>
            <SubTitle>Login</SubTitle>
            <SubDesc>가입하신 이메일로 로그인하세요.</SubDesc>
            <InputWrap>
              <Input type="text" placeholder="아이디"></Input>
              <Input type="text" placeholder="비밀번호"></Input>
              <LoginBtn>로그인</LoginBtn>
              <SignDesc>계정이 없으신가요? 회원가입</SignDesc>
            </InputWrap>
          </RightWrap>
        </Right>
      </Container>
    </>
  );
}

export default Home;
