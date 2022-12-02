import { Logo } from"../../assets/logo.svg" 
import { FormRegister } from "../../components/form";

const RegisterPage = () => {
    return (  
        <>
            <div>
                <img src={Logo} alt="Logo" />
                <button>Voltar</button>
            </div>
            <FormRegister/>
        </>
    );
}
 
export default RegisterPage;

