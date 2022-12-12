import { StyledLoginPage } from "./style";
import { Container } from "../../styles/components/container";
import Logo from "../../assets/logo.svg";
import { FormLogin } from "../../components/form";

export const LoginPage = () => {
  return (
    <StyledLoginPage>
      <Container>
        <img src={Logo} alt="Logo" />
        <FormLogin/>
      </Container>
    </StyledLoginPage>
  );
};
