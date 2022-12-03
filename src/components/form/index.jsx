import { Link } from "react-router-dom";
import StyledForm from "./style";
import { Title1, HeadlineBold, Headline } from "../../styles/components/typography";
import { StyledLabel, StyledInput, StyledSelect } from "../../styles/components/inputs";
import { StyledButton } from "../../styles/components/buttons";
import { useForm } from "react-hook-form";

export const FormLogin = () => {
    const { register, handleSubmit}  = useForm()

    const onSubmit = (data) =>{
        console.log(data)
    }

    return (  
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Title1 color="grey-0">Login</Title1>

            <StyledLabel htmlFor="email">Email</StyledLabel>
            <StyledInput type="email" id="email" placeholder="Digite aqui seu email" {...register("email")}/>

            <StyledLabel htmlFor="password">Senha</StyledLabel>
            <StyledInput type="password" id="password" placeholder="Digite aqui sua senha" {...register("password")}/>
            
            <StyledButton size="default" color="primary" type="submit">Entrar</StyledButton>

            <HeadlineBold color="grey-1">Ainda não possui uma conta?</HeadlineBold>
            <Link to={"/register"}><StyledButton size="default" color="disabledOne">Cadastre-se</StyledButton></Link>
        </StyledForm>
    );
}

export const FormRegister = () => {
    const { register, handleSubmit}  = useForm()

    const onSubmit = (data) =>{
        console.log(data)
    }

    return (  
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Title1 color="grey-0">Crie sua conta</Title1>
            <Headline color="grey-1">Rapido e grátis, vamos nessa</Headline>

            <StyledLabel htmlFor="name">Nome</StyledLabel>
            <StyledInput type="text" id="name" placeholder="Digite aqui seu nome" {...register("name")}/>

            <StyledLabel htmlFor="email">Email</StyledLabel>
            <StyledInput type="email" id="email" placeholder="Digite aqui seu email" {...register("email")}/>
            
            <StyledLabel htmlFor="password">Senha</StyledLabel>
            <StyledInput type="password" id="password" placeholder="Digite aqui sua senha" {...register("password")}/>

            <StyledLabel htmlFor="confirmPassword">Confirmar Senha</StyledLabel>
            <StyledInput type="password" id="confirmPassword" placeholder="Digite novamente sua senha"/>

            <StyledLabel htmlFor="bio">Bio</StyledLabel>
            <StyledInput type="text" id="bio" placeholder="Fale sobre você" {...register("bio")}/>

            <StyledLabel htmlFor="contact">Contato</StyledLabel>
            <StyledInput type="text" id="contact" placeholder="Opção de contato de sua preferência" {...register("contact")}/>

            <StyledLabel htmlFor="module">Bio</StyledLabel>

            <StyledSelect name="module" id="module" {...register("course_module")}>
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
            </StyledSelect>

            <StyledButton size="default" color="primary" type="submit">Cadastrar</StyledButton>
        </StyledForm>
    );
}
 
