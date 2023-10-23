import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../../Background";
import { register } from "../../../Services/userService";
import { useDispatch, useSelector } from "react-redux";
import {
  BgContainer,
  Container,
  IconContainer,
  FormSection,
  FormCard,
  Form,
  Title,
  Input,
  Button,
  Text,
  Icon,
  Hr,
  Link,
} from "./Styled";
import CodernativeLogo from "/codernative-logo.png"
import { useEffect } from "react";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pending } = useSelector((state) => state.user);
  const [userInformations, setUserInformations] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    repassword: "",
  });

  useEffect(() => {
    document.title = "Create a new Account";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(userInformations, dispatch);
  };

  return (
    <>
      <BgContainer>
        <Background />
      </BgContainer>
      <Container>
        <IconContainer onClick={() => navigate("/")}>
          <Icon src={CodernativeLogo} />
        </IconContainer>
        <FormSection>
          <FormCard>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Title>Sign up for your account</Title>
              <Input
                type="text"
                placeholder="Enter name"
                required
                value={userInformations.name}
                onChange={(e) =>
                  setUserInformations({
                    ...userInformations,
                    name: e.target.value,
                  })
                }
              />
              <Input
                type="text"
                placeholder="Enter surname"
                required
                value={userInformations.surname}
                onChange={(e) =>
                  setUserInformations({
                    ...userInformations,
                    surname: e.target.value,
                  })
                }
              />
              <Input
                type="email"
                placeholder="Enter email"
                required
                value={userInformations.email}
                onChange={(e) =>
                  setUserInformations({
                    ...userInformations,
                    email: e.target.value,
                  })
                }
              />
              <Input
                type="password"
                placeholder="Enter password"
                required
                value={userInformations.password}
                onChange={(e) =>
                  setUserInformations({
                    ...userInformations,
                    password: e.target.value,
                  })
                }
              />
              <Input
                type="password"
                placeholder="Confirm password"
                required
                value={userInformations.repassword}
                onChange={(e) =>
                  setUserInformations({
                    ...userInformations,
                    repassword: e.target.value,
                  })
                }
              />
              <Button type="submit" disabled={pending}>
                Complete
              </Button>
              <Hr />
              <Link fontSize="0.85rem" onClick={() => navigate("/login")}>
                Already have an account? Log In
              </Link>
            </Form>
          </FormCard>
        </FormSection>
      </Container>
    </>
  );
};

export default Register;
