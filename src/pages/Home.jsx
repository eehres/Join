import styled, { ThemeProvider } from "styled-components";
import Left from "../components/Left";
import { useNavigate } from "react-router-dom";
import media from "../theme";
import { useState } from "react";
import { useForm } from "react-hook-form";

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
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/welcome");
  };

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onSign = () => {
    navigate("/sign");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  //https://3e4019be-8c98-497a-897e-b85d8d181f34.mock.pstmn.io/users/login

  function Login(e) {
    e.preventDefault();
    fetch(
      "http://ec2-13-125-213-66.ap-northeast-2.compute.amazonaws.com:8080/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: inputValue.email,
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
      <ThemeProvider theme={{ ...media }}>
        <Container>
          <Left />
          <Right>
            <RightWrap>
              <SubTitle>Login</SubTitle>
              <SubDesc>가입하신 이메일로 로그인하세요.</SubDesc>
              <InputWrap onSubmit={handleSubmit(onSubmit)}>
                <Input
                  name="email"
                  id="email"
                  type="text"
                  placeholder="이메일"
                  onChange={handleInput}
                  {...register("email", {
                    required: "이메일은 필수입력사항 입니다.",
                    pattern: {
                      value:
                        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                      message: "이메일 형식에 맞지 않습니다.",
                    },
                  })}
                ></Input>
                <Error>
                  {errors.email && (
                    <small role="alert">{errors.email.message}</small>
                  )}
                </Error>
                <Input
                  name="password"
                  type="password"
                  placeholder="비밀번호"
                  onChange={handleInput}
                  id="password"
                  {...register("password", {
                    required: "비밀번호는 필수 입력입니다.",
                    minLength: {
                      value: 7,
                      message: "7자리 이상 비밀번호를 입력해주세요.",
                    },
                    validate: {
                      check: (val) => {
                        if (getValues("password") !== val) {
                          return "비밀번호가 일치하지 않습니다.";
                        }
                      },
                    },
                  })}
                ></Input>
                <Error>
                  {errors.password && (
                    <small role="alert">{errors.password.message}</small>
                  )}
                </Error>
                <LoginBtn onSubmit={Login}>로그인</LoginBtn>
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
