import styled, { ThemeProvider } from "styled-components";
import Left from "../components/Left";
import { useNavigate } from "react-router-dom";
import media from "../theme";
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
    formState: { errors },
  } = useForm();

  // const [inputValue, setInputValue] = useState({
  //   email: "",
  //   password: "",
  // });

  const navigate = useNavigate();

  const onSign = () => {
    navigate("/sign");
  };

  // const handleInput = (e) => {
  //   const { name, value } = e.target;
  //   setInputValue({
  //     ...inputValue,
  //     [name]: value,
  //   });
  // };

  //https://3e4019be-8c98-497a-897e-b85d8d181f34.mock.pstmn.io/users/login

  const onSubmit = (data) => {
    fetch(
      "https://3e4019be-8c98-497a-897e-b85d8d181f34.mock.pstmn.io/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => {
        if (response.ok) {
          navigate("/welcome");
          console.log(response);
        }
      })
      .catch((err) => console.log(err));
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
              <InputWrap onSubmit={handleSubmit(onSubmit)}>
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
                <LoginBtn>로그인</LoginBtn>
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
