import React, { useEffect } from "react";
import IndexNav from "../../IndexNav";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Content,
  LeftSide,
  RightSide,
  LeftWrapper,
  Title,
  Text,
  Button,
  SvgItem,
} from "./Styled";
import HeroImage from "/hero.png"

const Index = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Codernative Project Management App";
  }, []);
  return (
    <>
      <IndexNav />
      <Container>
        <Content>
          <LeftSide>
            <LeftWrapper>
              <Title>Help you team move work forward.</Title>
              <Text>
                Collaborate, manage projects, and reach new productivity peaks.
                From high rises to the home office, the way your team works is
                unique—accomplish it all with Trello.
              </Text>
              <Button onClick={() => navigate("/register")}>
                Sign up - it's free
              </Button>
            </LeftWrapper>
          </LeftSide>
          <RightSide>
            <SvgItem src={HeroImage} />
          </RightSide>
        </Content>
      </Container>
    </>
  );
};

export default Index;
