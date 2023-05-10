/* eslint-disable no-useless-escape */

import Left from "../components/Left";
import styled, { ThemeProvider } from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";
import theme from "../theme";
import { useNavigate } from "react-router-dom";

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
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // const [inputValue, setInputValue] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   password: "",
  // });

  // const handeleInput = (e) => {
  //   const { name, value } = e.target;
  //   setInputValue({
  //     ...inputValue,
  //     [name]: value,
  //   });
  // };

  const onSubmit = (data) => {
    fetch(
      "https://3e4019be-8c98-497a-897e-b85d8d181f34.mock.pstmn.io/users/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => {
        if (res.ok) {
          navigate("/welcome");
        }
      })
      .catch((err) => console.log(err));
  };

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
                  name="name"
                  placeholder="이름"
                  {...register("name", {
                    required: "이름은 필수사항입니다.",
                    pattern: {
                      value: /^[가-힣]+$/,
                      message: "이름 형식에 맞지 않습니다.",
                    },
                    minLength: {
                      value: 2,
                      message: "2글자 이상 쓰셔야 합니다.",
                    },
                  })}
                />
                <Error>{errors.name && <p>{errors.name.message}</p>}</Error>
                <Input
                  name="email"
                  placeholder="이메일"
                  {...register("email", {
                    required: "이메일을 입력해주세요.",
                    pattern: {
                      value:
                        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                      message: "이메일 형식에 맞지 않습니다.",
                    },
                  })}
                />
                <Error>{errors.email && <p>{errors.email.message}</p>}</Error>
                <Input
                  name="phonenumber"
                  placeholder="핸드폰 번호"
                  {...register("phonenumber", {
                    required: "핸드폰 번호를 입력해주세요.",
                    pattern: {
                      value: /^\d{3}-?\d{3,4}-?\d{4}$/,
                      message: "핸드폰번호 형식에 맞지 않습니다.",
                    },
                  })}
                />
                <Error>
                  {errors.phonenumber && <p>{errors.phonenumber.message}</p>}
                </Error>
                <Input
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                  {...register("password", {
                    required: "비밀번호를 입력해주세요.",
                    minLength: {
                      value: 6,
                      message: "최소 6자 이상의 비밀번호를 입력해주세요.",
                    },
                  })}
                />
                <Error>
                  {errors.password && <p>{errors.password.message}</p>}
                </Error>
                <Input
                  type="password"
                  name="passwordConfirm"
                  placeholder="비빌번호 확인"
                  {...register("passwordConfirm", {
                    required: "비밀번호가 일치하지 않습니다.",
                    validate: {
                      check: (val) => {
                        if (watch("password") !== val) {
                          return "비밀번호가 일치하지 않습니다.";
                        }
                      },
                    },
                  })}
                />
                <Error>
                  {errors.passwordConfirm && (
                    <p>{errors.passwordConfirm.message}</p>
                  )}
                </Error>
                <LoginBtn type="submit">가입하기</LoginBtn>
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
