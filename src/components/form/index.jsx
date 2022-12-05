import { Link, useNavigate } from "react-router-dom";
import StyledForm from "./style";
import { Title1, HeadlineBold, Headline } from "../../styles/components/typography";
import { StyledLabel, StyledInput, StyledSelect } from "../../styles/components/inputs";
import { StyledButton } from "../../styles/components/buttons";
import { useForm } from "react-hook-form";
import  * as yup  from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react";
import { api } from "../../services/api";

export const FormLogin = ({setUser}) => {
    const navigate = useNavigate();

    const [loading , setLoading] = useState(false)    

    const loginSchema = yup.object().shape({
        email: yup
            .string()
            .required("Este campo é obrigatório")
            .email("Formato inválido"),        
        password: yup
            .string()
            .required("Este campo é obrigatório")
    })
    
    const { register, handleSubmit, formState: {errors}}  = useForm({
        resolver: yupResolver(loginSchema)
    })

    const userLogin =  async (data) => {
        try {
            setLoading(true)
            const response = await api.post("sessions", data)
            setUser(response.data.user)
            window.localStorage.clear()
            window.localStorage.setItem("@TOKEN", response.data.token)
            window.localStorage.setItem("@USERID", response.data.user.id)
            navigate(`/dashboard/${response.data.user.id}`)
        } catch (error) {
            console.log(error.response.data.message)
        } finally{
            setTimeout(() => setLoading(false), 1000)
        }
    }

    
    const onSubmit = (data) =>{
        userLogin(data)
    }

    return (  
        <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
            <Title1 color="grey-0">Login</Title1>

            <StyledLabel htmlFor="email">Email</StyledLabel>
            <StyledInput type="email" id="email" placeholder="Digite aqui seu email" {...register("email")}/>
            {errors.email?.message && <Headline color="negative">{errors.email.message}</Headline>}

            <StyledLabel htmlFor="password">Senha</StyledLabel>
            <StyledInput type="password" id="password" placeholder="Digite aqui sua senha" {...register("password")}/>
            {errors.password?.message && <Headline color="negative">{errors.password.message}</Headline>}
            
            <StyledButton size="default" color="primary" type="submit" disabled={loading}>{loading? "Entrando..." : "Entrar"}</StyledButton>

            <HeadlineBold color="grey-1">Ainda não possui uma conta?</HeadlineBold>
            <Link to={"/register"}><StyledButton size="default" color="disabledOne">Cadastre-se</StyledButton></Link>
        </StyledForm>
    );
}

export const FormRegister = () => {
    const navigate = useNavigate();

    const [loading , setLoading] = useState(false)

    const registerSchema = yup.object().shape({
        name: yup
            .string()
            .required("Este campo é obrigatório"),
        email: yup
            .string()
            .required("Este campo é obrigatório")
            .email("Formato inválido"),
        password: yup
            .string()
            .required("Este campo é obrigatório")
            .matches(/(?=.*[a-zA-Z])/, "É necessário uma letra")
            .matches(/(?=.*[0-9])/, "É necessário um número")
            .matches(/(?=.*[$*&@#])/, "É necessário um caractere especial")
            .min(8, "É necessário pelo menos 8 caracteres"),
        password_confirm: yup
            .string()
            .required("Este campo é obrigatório")
            .oneOf([yup.ref("password")], "As senhas não coincidem"),
        bio: yup
            .string()
            .required("Este campo é obrigatório"),
        contact: yup
            .string()
            .required("Este campo é obrigatório"),
        course_module: yup
            .string()
            .required("Este campo é obrigatório"),
    })

    const { register, handleSubmit, formState : {errors}}  = useForm({
        resolver: yupResolver(registerSchema),
        mode: "onBlur"
    })

    const userRegister =  async (formData) => {
        const {name, email, password, bio, contact, course_module} = formData
        const userData = {
            name: name,
            email: email,
            password: password,
            bio: bio,
            contact: contact,
            course_module: course_module
        }
        try {
            setLoading(true)
            const response = await api.post("users", userData)
            console.log(response.data)
            navigate("/")          
        } catch (error) {
            console.log(error.response.data.message)
        } finally{
            setTimeout(() => setLoading(false), 1000)
        }
    }

    const onSubmit = async (data) =>{
        await userRegister(data)
    }

    return (  
        <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
            <Title1 color="grey-0">Crie sua conta</Title1>
            <Headline color="grey-1">Rapido e grátis, vamos nessa</Headline>

            <StyledLabel htmlFor="name">Nome</StyledLabel>
            <StyledInput type="text" id="name" placeholder="Digite aqui seu nome" {...register("name")}/>
            {errors.name?.message && <Headline color="negative">{errors.name.message}</Headline>}

            <StyledLabel htmlFor="email">Email</StyledLabel>
            <StyledInput type="email" id="email" placeholder="Digite aqui seu email" {...register("email")}/>
            {errors.email?.message && <Headline color="negative">{errors.email.message}</Headline>}
            
            <StyledLabel htmlFor="password">Senha</StyledLabel>
            <StyledInput type="password" id="password" placeholder="Digite aqui sua senha" {...register("password")}/>
            {errors.password?.message && <Headline color="negative">{errors.password.message}</Headline>}

            <StyledLabel htmlFor="password_confirm">Confirmar Senha</StyledLabel>
            <StyledInput type="password" id="password_confirm" placeholder="Digite novamente sua senha" {...register("password_confirm")}/>
            {errors.password_confirm?.message && <Headline color="negative">{errors.password_confirm.message}</Headline>}

            <StyledLabel htmlFor="bio">Bio</StyledLabel>
            <StyledInput type="text" id="bio" placeholder="Fale sobre você" {...register("bio")}/>
            {errors.bio?.message && <Headline color="negative">{errors.bio.message}</Headline>}

            <StyledLabel htmlFor="contact">Contato</StyledLabel>
            <StyledInput type="text" id="contact" placeholder="Opção de contato de sua preferência" {...register("contact")}/>
            {errors.contact?.message && <Headline color="negative">{errors.contact.message}</Headline>}

            <StyledLabel htmlFor="module">Bio</StyledLabel>
            <StyledSelect name="module" id="module" {...register("course_module")}>
                <option value="">Módulo:</option>
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
            </StyledSelect>
            {errors.course_module?.message && <Headline color="negative">{errors.course_module.message}</Headline>}

            <StyledButton size="default" color="primary" type="submit" disabled={loading}>{loading ? "Cadastrando..." : "Cadastrar"}</StyledButton>
        </StyledForm>
    );
}
 
