import { useNavigate } from "react-router-dom";
import { StyledDashboard } from "./style";
import { StyledNavbar } from "../../styles/components/navbar";
import { Container } from "../../styles/components/container";
import Logo from "../../assets/logo.svg";
import { StyledButton } from "../../styles/components/buttons";
import { StyledHeader } from "../../styles/components/header";
import { HeadlineBold, Title1 } from "../../styles/components/typography";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Techs } from "../../components/techs";

export const DashboardPage = () => {
  const { user, setUser, userLoading } = useContext(UserContext);

  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    setUser("");
    window.localStorage.removeItem("@KENZIEHUB:Token");
    window.localStorage.removeItem("@KENZIEHUB:UserID");
    navigate("/");
  };

  return userLoading ? (
    <>      
    </>
  ) : (
    <StyledDashboard>
      <StyledNavbar>
        <Container>
          <img src={Logo} alt="Logo" />
          <StyledButton size="medium" color="disabledTwo" onClick={logout}>
            Sair
          </StyledButton>
        </Container>
      </StyledNavbar>

      <StyledHeader>
        <Container>
          <Title1 color="grey-0">Olá, {user.name}</Title1>
          <HeadlineBold color="grey-1">{user.course_module}</HeadlineBold>
        </Container>
      </StyledHeader>

      <main>
        <Container>
          <Techs />
        </Container>
      </main>
    </StyledDashboard>
  );
};
