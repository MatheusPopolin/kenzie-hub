import Logo from"../../assets/logo.svg"
import { Container } from "../../styles/components/container";
import StyledHeader from "../../styles/components/header";
import StyledNavbar from "../../styles/components/navbar";
import { HeadlineBold, Title1, Title2 } from "../../styles/components/typography";
import { StyledButton } from "../../styles/components/buttons";
import StyledDashboard from "./style";

const DashboarPage = () => {
    return (  
        <StyledDashboard>
            <StyledNavbar>
                <Container>
                    <img src={Logo} alt="Logo" />
                    <StyledButton size="medium" color="disabledTwo">Sair</StyledButton>
                </Container>
            </StyledNavbar>
            <StyledHeader>
                <Container>
                    <Title1 color="grey-0">Olá, Matheus Popolin</Title1>
                    <HeadlineBold color="grey-1">Primeiro módulo  (Introdução ao Frontend)</HeadlineBold>
                </Container>
            </StyledHeader>
            <main>
                <Container>
                    <Title1 color="grey-0">Que pena! Estamos em desenvolvimento :(</Title1>
                    <Title2 color="grey-0">Nossa aplicação está em desenvolvimento, em breve teremos novidades</Title2>
                </Container>
            </main>
        </StyledDashboard>
    );
}
 
export default DashboarPage;