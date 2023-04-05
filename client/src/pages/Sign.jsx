import React from "react";
import Left from "../components/Left";
import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import { AiFillGoogleCircle } from "react-icons/ai";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 1px;
    background: black;
  }
`;

const Icons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 4rem;
    padding: 10px;
  }
`;

function Sign() {
  return (
    <>
      <Container>
        <Left />
        <Right>
          <RightWrap>
            <SubTitle>Welcome</SubTitle>
            <SubDesc>회원가입을 완료해주세요.</SubDesc>
            <InputWrap>
              <Input type="text" placeholder="이름"></Input>
              <Input type="text" placeholder="이메일"></Input>
              <Input type="text" placeholder="아이디"></Input>
              <Input type="text" placeholder="비밀번호"></Input>
              <LoginBtn>로그인</LoginBtn>
              <SignDesc>SNS계정 간편가입</SignDesc>
              <Icons>
                <RiKakaoTalkFill />
                <AiFillGoogleCircle />
              </Icons>
            </InputWrap>
          </RightWrap>
        </Right>
      </Container>
    </>
  );
}

export default Sign;
