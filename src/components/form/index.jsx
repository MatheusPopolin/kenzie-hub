import { Link } from "react-router-dom";
import StyledForm from "./style";
import { Title1, HeadlineBold, Headline } from "../../styles/components/typography";
import { StyledLabel, StyledInput, StyledSelect } from "../../styles/components/inputs";
import { StyledButton } from "../../styles/components/buttons";

export const FormLogin = () => {
    
    return (  
        <StyledForm>
            <Title1 color="grey-0">Login</Title1>
            <StyledLabel htmlFor="email">Email</StyledLabel>
            <StyledInput type="email" id="email" placeholder="Digite aqui seu email" />
            <StyledLabel htmlFor="password">Senha</StyledLabel>
            <StyledInput type="password" id="password" placeholder="Digite aqui sua senha" />
            <StyledButton size="default" color="primary" type="submit">Entrar</StyledButton>
            <HeadlineBold color="grey-1">Ainda não possui uma conta?</HeadlineBold>
            <Link to={"/register"}><StyledButton size="default" color="disabledOne">Cadastre-se</StyledButton></Link>
        </StyledForm>
    );
}

export const FormRegister = () => {
    return (  
        <StyledForm>
            <Title1 color="grey-0">Crie sua conta</Title1>
            <Headline color="grey-1">Rapido e grátis, vamos nessa</Headline>
            <StyledLabel htmlFor="name">Nome</StyledLabel>
            <StyledInput type="text" id="name" placeholder="Digite aqui seu nome" />
            <StyledLabel htmlFor="email">Email</StyledLabel>
            <StyledInput type="email" id="email" placeholder="Digite aqui seu email" />
            <StyledLabel htmlFor="password">Senha</StyledLabel>
            <StyledInput type="password" id="password" placeholder="Digite aqui sua senha" />
            <StyledLabel htmlFor="confirmPassword">Confirmar Senha</StyledLabel>
            <StyledInput type="password" id="confirmPassword" placeholder="Digite novamente sua senha" />
            <StyledLabel htmlFor="bio">Bio</StyledLabel>
            <StyledInput type="text" id="bio" placeholder="Fale sobre você" />
            <StyledLabel htmlFor="contact">Conato</StyledLabel>
            <StyledInput type="text" id="contact" placeholder="Opção de contato" />
            <StyledLabel htmlFor="module">Bio</StyledLabel>
            <StyledSelect name="module" id="module">
                <option value="module-one">Primeiro módulo (Introdução ao Frontend)</option>
                <option value="module-two">Segundo módulo (Frontend Avançado)</option>
                <option value="module-three">Terceiro módulo (Introdução ao Backend)</option>
                <option value="module-four">Quarto módulo (Backend Avançado)</option>
            </StyledSelect>
            <StyledButton size="default" color="primary" type="submit">Cadastrar</StyledButton>
        </StyledForm>
    );
}
 
