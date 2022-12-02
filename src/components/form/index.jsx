export const FormLogin = () => {
    return (  
        <form>
            <h2>Login</h2>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Digite aqui seu email" />
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Digite aqui sua senha" />
            <button type="submit">Entrar</button>
            <p>Ainda não possui uma conta?</p>
            <button>Cadastra-se</button>
        </form>
    );
}

export const FormRegister = () => {
    return (  
        <form>
            <h2>Crie sua conta</h2>
            <h3>Rapido e grátis, vamos nessa</h3>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" placeholder="Digite aqui seu nome" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Digite aqui seu email" />
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Digite aqui sua senha" />
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input type="password" id="confirmPassword" placeholder="Digite novamente sua senha" />
            <label htmlFor="bio">Bio</label>
            <input type="text" id="bio" placeholder="Fale sobre você" />
            <label htmlFor="contact">Conato</label>
            <input type="text" id="contact" placeholder="Opção de contato" />
            <label htmlFor="module">Bio</label>
            <select name="module" id="module">
                <option value="moudle-one">Primeiro Módulo</option>
                <option value="moudle-two">Segundo Módulo</option>
                <option value="moudle-three">Terceiro Módulo</option>
                <option value="moudle-four">Quarto Módulo</option>
            </select>
            <button type="submit">Cadastrar</button>
        </form>
    );
}
 
