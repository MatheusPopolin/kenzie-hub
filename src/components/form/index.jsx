import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import  * as yup  from "yup"

import { useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom";

import { StyledForm } from "./style";
import { Title1, HeadlineBold, Headline } from "../../styles/components/typography";
import { StyledLabel, StyledInput, StyledSelect } from "../../styles/components/inputs";
import { StyledButton } from "../../styles/components/buttons";

export const FormLogin = ({setUser}) => {
    const navigate = useNavigate();

    const [loading , setLoading] = useState(false)    

    const loginSchema = yup.object().shape({
        email: yup
            .string()
            .required("Campo obrigatório")
            .email("Formato inválido"),        
        password: yup
            .string()
            .required("Campo obrigatório")
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
            toast.success("Login bem sucedido")
            setTimeout(() => navigate(`/dashboard/${response.data.user.id}`), 1000)            
        } catch (error) {
            toast.error("Email ou senha inválidos")
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
            <StyledInput color={errors.email} type="email" id="email" placeholder="Digite aqui seu email" {...register("email")}/>
            {errors.email?.message && <Headline color="negative">{errors.email.message}</Headline>}

            <StyledLabel htmlFor="password">Senha</StyledLabel>
            <StyledInput color={errors.password} type="password" id="password" placeholder="Digite aqui sua senha" {...register("password")}/>
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
            .required("Informe um nome"),
        email: yup
            .string()
            .required("Informe um email")
            .email("Formato inválido"),
        password: yup
            .string()
            .required("Informe uma senha")
            .matches(/(?=.*[a-zA-Z])/, "É necessário uma letra")
            .matches(/(?=.*[0-9])/, "É necessário um número")
            .matches(/(?=.*[$*&@#])/, "É necessário um caractere especial")
            .min(8, "É necessário pelo menos 8 caracteres"),
        password_confirm: yup
            .string()
            .required("Campo obrigatório")
            .oneOf([yup.ref("password")], "As senhas não coincidem"),
        bio: yup
            .string()
            .required("Campo obrigatório"),
        contact: yup
            .string()
            .required("Campo obrigatório"),
        course_module: yup
            .string()
            .required("Selecione um módulo"),
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
            toast.success("Cadastro realizado com sucesso!")
            setTimeout(() => navigate("/"), 1000)                     
        } catch (error) {
            toast.error("Email já cadastrado")
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
            <Headline color="grey-1">Rapido e grátis, vamos nessa!</Headline>

            <StyledLabel htmlFor="name">Nome</StyledLabel>
            <StyledInput color={errors.name} type="text" id="name" placeholder="Digite aqui seu nome" {...register("name")}/>
            {errors.name?.message && <Headline color="negative">{errors.name.message}</Headline>}

            <StyledLabel htmlFor="email">Email</StyledLabel>
            <StyledInput color={errors.email} type="email" id="email" placeholder="Digite aqui seu email" {...register("email")}/>
            {errors.email?.message && <Headline color="negative">{errors.email.message}</Headline>}
            
            <StyledLabel htmlFor="password">Senha</StyledLabel>
            <StyledInput color={errors.password} type="password" id="password" placeholder="Digite aqui sua senha" {...register("password")}/>
            {errors.password?.message && <Headline color="negative">{errors.password.message}</Headline>}

            <StyledLabel htmlFor="password_confirm">Confirmar Senha</StyledLabel>
            <StyledInput color={errors.password_confirm} type="password" id="password_confirm" placeholder="Digite novamente sua senha" {...register("password_confirm")}/>
            {errors.password_confirm?.message && <Headline color="negative">{errors.password_confirm.message}</Headline>}

            <StyledLabel htmlFor="bio">Bio</StyledLabel>
            <StyledInput color={errors.bio} type="text" id="bio" placeholder="Fale sobre você" {...register("bio")}/>
            {errors.bio?.message && <Headline color="negative">{errors.bio.message}</Headline>}

            <StyledLabel htmlFor="contact">Contato</StyledLabel>
            <StyledInput color={errors.contact} type="text" id="contact" placeholder="Opção de contato de sua preferência" {...register("contact")}/>
            {errors.contact?.message && <Headline color="negative">{errors.contact.message}</Headline>}

            <StyledLabel htmlFor="module">Módulo</StyledLabel>
            <StyledSelect color={errors.course_module} name="module" id="module" {...register("course_module")}>
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
 
