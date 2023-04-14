import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Left from "../components/Left";
import { useNavigate } from "react-router-dom";
import media from "../theme";

const Container = styled.div`
  height: 100vh;
  display: flex;

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    padding: 5rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 2rem;
  }
`;

const RightWrap = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.device.tablet} {
    width: 80%;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
  }
`;

const SubTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 3.5rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1.8rem;
  }
`;

const SubDesc = styled.p`
  margin-bottom: 2rem;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 1.2rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
`;

const InputWrap = styled.form`
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

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 0.5rem;
  }
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 5vh;
  border: none;
  margin-bottom: 2rem;
  cursor: pointer;
  background-color: #f3f0f0;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 0.5rem;
  }
`;

const SignDesc = styled.p`
  width: 100%;
  text-align: center;
  cursor: pointer;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 1.2rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 0.8rem;
  }
`;

function Home() {
  const navigate = useNavigate();

  const onSign = () => {
    navigate("/sign");
  };

  const onLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <ThemeProvider theme={{ ...media }}>
        <Container>
          <Left />
          <Right>
            <RightWrap>
              <SubTitle>Login</SubTitle>
              <SubDesc>가입하신 이메일로 로그인하세요.</SubDesc>
              <InputWrap>
                <Input type="text" placeholder="아이디"></Input>
                <Input type="text" placeholder="비밀번호"></Input>
                <LoginBtn onClick={onLogin}>로그인</LoginBtn>
                <SignDesc onClick={onSign}>
                  계정이 없으신가요? 회원가입
                </SignDesc>
              </InputWrap>
            </RightWrap>
          </Right>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Home;
