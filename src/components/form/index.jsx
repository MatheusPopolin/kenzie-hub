import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import  * as yup  from "yup"

import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext"
import { TechContext } from "../../providers/TechContext"

import { Link } from "react-router-dom";

import { StyledForm } from "./style";
import { Title1, HeadlineBold, Headline, Title2 } from "../../styles/components/typography";
import { StyledLabel, StyledInput, StyledSelect } from "../../styles/components/inputs";
import { StyledButton } from "../../styles/components/buttons";

export const FormLogin = () => {
    const {userLogin} = useContext(UserContext)
    
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
    
    const onSubmit = (data) =>{
        userLogin(data, setLoading)
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
    const {userRegister} = useContext(UserContext)

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


    const onSubmit = async (data) =>{
        await userRegister(data, setLoading)
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

export const FormRegisterTech = ({setAddTechModalOpenned}) => {
    const {techRegister} = useContext(TechContext)

    const [loading , setLoading] = useState(false)    

    const registerTechSchema = yup.object().shape({
        title: yup
            .string()
            .required("Campo obrigatório"),       
        status: yup
            .string()
            .required("Campo obrigatório")
    })
    
    const { register, handleSubmit, formState: {errors}}  = useForm({
        resolver: yupResolver(registerTechSchema)
    })
    
    const onSubmit = (data) =>{
        techRegister(data, setLoading, setAddTechModalOpenned)
    }

    return (  
        <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
            <StyledLabel htmlFor="title">Nome</StyledLabel>
            <StyledInput color={errors.title} type="title" id="title" placeholder="Tecnologia" {...register("title")}/>
            {errors.title?.message && <Headline color="negative">{errors.title.message}</Headline>}
            

            <StyledLabel htmlFor="status">Status:</StyledLabel>
            <StyledSelect color={errors.status} name="status" id="status" {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
            </StyledSelect>
            {errors.status?.message && <Headline color="negative">{errors.status.message}</Headline>}


            <StyledButton size="default" color="primary" type="submit" disabled={loading}>{loading? "Cadastrando..." : "Cadastrar"}</StyledButton>
        </StyledForm>
    );
}

export const FormUpdateTech = ({tech, setViewTechModalOpenned}) => {
    const {techUpdate, techDelete} = useContext(TechContext)

    const [loading , setLoading] = useState(false)    

    const updateTechSchema = yup.object().shape({    
        status: yup
            .string()
            .required("Campo obrigatório")
    })
    
    const { register, handleSubmit, formState: {errors}}  = useForm({
        defaultValues: {status: tech.status},
        resolver: yupResolver(updateTechSchema)
    })
    
    const onSubmit = (data) =>{
        techUpdate(data, tech.id, setLoading, setViewTechModalOpenned)
    }

    const onClickDelete = () =>{
        techDelete(tech.id, setLoading, setViewTechModalOpenned)
    }

    return (  
        <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
            <Title2 color="grey-0">{tech.title}</Title2>
            
            <StyledLabel htmlFor="status">Status:</StyledLabel>
            <StyledSelect color={errors.status} name="status" id="status" {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
            </StyledSelect>
            {errors.status?.message && <Headline color="negative">{errors.status.message}</Headline>}


           <div>
                <StyledButton size="default" color="primary" type="submit" disabled={loading}>{loading? "Atualizando..." : "Atualizar"}</StyledButton>
                <StyledButton onClick={onClickDelete} size="default" color="disabledOne" disabled={loading}>Excluir</StyledButton>
           </div>
        </StyledForm>
    );
}
