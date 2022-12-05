import Logo from"../../assets/logo.svg"
import { Container } from "../../styles/components/container";
import StyledHeader from "../../styles/components/header";
import StyledNavbar from "../../styles/components/navbar";
import { HeadlineBold, Title1, Title2 } from "../../styles/components/typography";
import { StyledButton } from "../../styles/components/buttons";
import StyledDashboard from "./style";
import { useNavigate } from "react-router-dom";

const DashboarPage = ({user, setUser}) => {
    const navigate = useNavigate()
    
    const logout = (e)=>{
        e.preventDefault()
        setUser("")
        window.localStorage.clear()
        navigate("/")
    }

    return (  
        <StyledDashboard>
            <StyledNavbar>
                <Container>
                    <img src={Logo} alt="Logo" />
                    <StyledButton size="medium" color="disabledTwo" onClick={logout}>Sair</StyledButton>
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
                    <Title1 color="grey-0">Que pena! Estamos em desenvolvimento :(</Title1>
                    <Title2 color="grey-0">Nossa aplicação está em desenvolvimento, em breve teremos novidades</Title2>
                </Container>
            </main>
        </StyledDashboard>
    );
}
 
export default DashboarPage;