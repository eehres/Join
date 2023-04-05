import React from "react";
import bg from "../assets/images/bg.jpg";
import styled from "styled-components";

const LeftWrapper = styled.div`
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

function Left() {
  return (
    <>
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
    </>
  );
}

export default Left;
