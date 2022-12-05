import { useState } from "react";
import Logo from "../../assets/logo.svg"
import { FormLogin } from "../../components/form"; 
import { Container } from "../../styles/components/container";
import StyledLoginPage from "./style";

const LoginPage = ({setUser}) => {  

    return (  
        <StyledLoginPage>
            <Container>
                <img src={Logo} alt="Logo" />
                <FormLogin setUser={setUser}/>
            </Container>
        </StyledLoginPage>
    );
}
 
export default LoginPage;