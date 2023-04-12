import React from "react";
import bg from "../assets/images/bg.jpg";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";

const LeftWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100vh;
  position: relative;

  @media ${({ theme }) => theme.device.tablet} {
    text-align: center;
  }

  @media ${({ theme }) => theme.device.mobile} {
    text-align: center;
  }
`;

const LeftInfo = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  position: absolute;
  color: white;

  @media ${({ theme }) => theme.device.tablet} {
    width: 75%;
    text-align: center;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 80%;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 6rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 3rem;
  }
`;

const Desc = styled.p`
  line-height: 1.4;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 1.4rem;
    line-height: 1.8;
  }

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 0.7rem;
    line-height: 1.6;
  }
`;

function Left() {
  return (
    <>
      <ThemeProvider theme={{ ...theme }}>
        <LeftWrapper>
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
        </LeftWrapper>
      </ThemeProvider>
    </>
  );
}

export default Left;
