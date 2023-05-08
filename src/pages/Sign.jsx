/* eslint-disable no-useless-escape */

import Left from "../components/Left";
import styled, { ThemeProvider } from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";
import theme from "../theme";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
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
    padding: 4rem;
  }
`;

const RightWrap = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.device.tablet} {
    width: 80%;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 120%;
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

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 0.5rem;
  }
`;

const Error = styled.p`
  color: #ff5c5c;
  font-size: 0.8rem;
  margin-bottom: 1rem;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  text-align: center;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 6rem;
    height: 1px;
    background: black;
  }

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 1.2rem;
    &::before,
    &::after {
      width: 8rem;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 0.8rem;
    &::before,
    &::after {
      width: 3.5rem;
    }
  }
`;

const Icons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    font-size: 4rem;
    padding: 10px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    svg {
      font-size: 4.5rem;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    svg {
      font-size: 3.5rem;
    }
  }
`;

function Sign() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handeleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  // const onSubmit = async (data) => {
  //   console.log(data, errors);
  // };

  const onSubmit = async (data) => {
    console.log(data);
  };

  function SignIn(e) {
    e.preventDefault();
    fetch(
      "https://3e4019be-8c98-497a-897e-b85d8d181f34.mock.pstmn.io/users/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inputValue.name,
          email: inputValue.email,
          phone: inputValue.phone,
          password: inputValue.password,
        }),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(response.json());
      })
      .then((response) => {
        if (response.MESSAGE === "SUCCESS") {
          alert("로그인 성공!");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Left />
          <Right>
            <RightWrap>
              <SubTitle>Welcome</SubTitle>
              <SubDesc>회원가입을 완료해주세요.</SubDesc>
              <InputWrap onSubmit={handleSubmit(onSubmit)}>
                <Input
                  onChange={handeleInput}
                  id="name"
                  type="text"
                  placeholder="이름"
                  {...register("name", {
                    required: "이름은 필수입력사항 입니다.",
                  })}
                />
                <Error>
                  {errors.name && (
                    <small role="alert">{errors.name.message}</small>
                  )}
                </Error>
                <Input
                  onChange={handeleInput}
                  id="email"
                  type="text"
                  placeholder="test@email.com"
                  {...register("email", {
                    required: "이메일은 필수입력사항 입니다.",
                    pattern: {
                      value:
                        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                      message: "이메일 형식에 맞지 않습니다.",
                    },
                  })}
                />
                <Error>
                  {errors.email && (
                    <small role="alert">{errors.email.message}</small>
                  )}
                </Error>
                <Input
                  onChange={handeleInput}
                  id="phone"
                  name="phone"
                  placeholder="핸드폰번호"
                  {...register("phone", {
                    required: "핸드폰번호는 필수입력사항 입니다.",
                    minLength: {
                      value: 10,
                    },
                  })}
                />
                <Error>
                  {errors.id && <small role="alert">{errors.id.message}</small>}
                </Error>
                <Input
                  onChange={handeleInput}
                  id="password"
                  type="password"
                  placeholder="비밀번호"
                  {...register("password", {
                    required: "비밀번호는 필수 입력입니다.",
                    minLength: {
                      value: 7,
                      message: "7자리 이상 비밀번호를 입력해주세요.",
                    },
                  })}
                />
                <Error>
                  {errors.password && (
                    <small role="alert">{errors.password.message}</small>
                  )}
                </Error>
                <Input
                  onChange={handeleInput}
                  id="passwordcheck"
                  type="password"
                  placeholder="*******"
                  {...register("passwordConfirm", {
                    required: "비밀번호가 일치하지 않습니다.",
                    minLength: {
                      value: 7,
                      message: "7자리 이상 비밀번호를 사용하세요.",
                    },
                    validate: {
                      check: (val) => {
                        if (getValues("password") !== val) {
                          return "비밀번호가 일치하지 않습니다.";
                        }
                      },
                    },
                  })}
                />
                <Error>
                  {errors.passwordConfirm && (
                    <small role="alert">{errors.passwordConfirm.message}</small>
                  )}
                </Error>

                <LoginBtn type="submit" onClick={SignIn}>
                  로그인
                </LoginBtn>
                <SignDesc>SNS계정 간편가입</SignDesc>
                <Icons>
                  <RiKakaoTalkFill />
                  <AiFillGoogleCircle />
                </Icons>
              </InputWrap>
            </RightWrap>
          </Right>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Sign;
