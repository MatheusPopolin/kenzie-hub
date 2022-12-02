import { Logo } from "../../assets/logo.svg"
import { FormLogin } from "../../components/form"; 

const LoginPage = () => {
    return (  
        <>
            <img src={Logo} alt="Logo" />
            <FormLogin/>
        </>
    );
}
 
export default LoginPage;