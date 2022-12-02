import { Logo } from"../../assets/logo.svg"

const DashboarPage = () => {
    return (  
        <>
            <header>
                <img src={Logo} alt="Logo" />
                <button>Sair</button>
            </header>
            <section>
                <h2>Olá, Matheus Popolin</h2>
                <h3>Primeiro módulo  (Introdução ao Frontend)</h3>
            </section>
            <main>
                <h2>Que pena! Estamos em desenvolvimento :(</h2>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </main>
        </>
    );
}
 
export default DashboarPage;