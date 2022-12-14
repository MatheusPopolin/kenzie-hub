import { StyledLoginPage } from "./style";
import { Container } from "../../styles/components/container";
import Logo from "../../assets/logo.svg";
import { FormLogin } from "../../components/form";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const LoginPage = () => {
  const { userLoading } = useContext(UserContext);

  return userLoading ? (
    <></>
  ) : (
    <StyledLoginPage>
      <Container>
        <img src={Logo} alt="Logo" />
        <FormLogin />
      </Container>
    </StyledLoginPage>
  );
};
