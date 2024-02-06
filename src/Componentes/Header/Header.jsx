import Logo from "../../assets/Logo.png"
import Templete from "../../assets/software.png"
import "./header.css"

function Header(){
    return(
        <>     
            <header>
                <nav>
                <img className="logo" src={Logo} alt="Logotipo" />
                <div className="menu">
                    <ul>
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Empresa</a></li>
                        <li><a href="#">Recrutamentos</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>
                </nav>
                </header>

                <div className="banner">
                    
                    <h2 className="sub">Soluções Tecnológicas</h2>
                    <h1 className="titulo" >Com Marca Angolana.</h1>

                </div>

            
        </>
    )
}

export default Header