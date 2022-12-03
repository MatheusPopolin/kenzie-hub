import { Link } from "react-router-dom";
import Logo from"../../assets/logo.svg" 
import { FormRegister } from "../../components/form";

const RegisterPage = () => {
    return (  
        <>
            <div>
                <img src={Logo} alt="Logo" />
                <Link to="/"><button>Voltar</button></Link>
            </div>
            <FormRegister/>
        </>
    );
}
 
export default RegisterPage;

