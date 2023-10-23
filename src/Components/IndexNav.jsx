import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { lg } from "../BreakPoints";
import trelloLogo from "../Images/trello-logo.svg";
import CodernativeLogo from "/codernative-logo.png"
const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  z-index: 100;

  ${lg({
    justifyContent: "space-between",
  })}
`;

const IconContainer = styled.div`
  margin-top: 1.5rem;
  width: 200px;
  height: 200px;
  overflow: hidden;
`

const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  background-color: #0065ff;
  color: white;
  border: none;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  &:hover {
    background-color: #0952cc;
  }
`;

const Button = styled.button`
  background-color: #0065ff;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0952cc;
  }
`;

const IndexNav = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <IconContainer>
        <Icon src={CodernativeLogo} />
      </IconContainer>
      <RightSide>
        <Link onClick={() => navigate("/login")}>Log in</Link>
        <Button onClick={() => navigate("/register")}>Sign up</Button>
      </RightSide>
    </Container>
  );
};

export default IndexNav;
