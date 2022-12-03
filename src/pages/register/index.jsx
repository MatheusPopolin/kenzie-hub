import { Link } from "react-router-dom";
import Logo from"../../assets/logo.svg" 
import { FormRegister } from "../../components/form";
import { StyledButton } from "../../styles/components/buttons";
import { Container } from "../../styles/components/container";
import StyledRegisterPage from "./style";


const RegisterPage = () => {
    return (  
        <StyledRegisterPage>
            <Container>
                <div>
                    <img src={Logo} alt="Logo" />
                    <Link to="/"><StyledButton size="medium" color="disabledTwo">Voltar</StyledButton></Link>
                </div>
                <FormRegister/>
            </Container>
        </StyledRegisterPage>
    );
}
 
export default RegisterPage;

