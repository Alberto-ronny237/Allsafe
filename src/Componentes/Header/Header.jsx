import Logo from "../../assets/Logo.png"
import Templete from "../../assets/software.png"
import "./style.css"

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
                    <h1>Soluções Tecnológicas</h1>
                    <h1 className="titlo" > <span>Com Marca Angolana. </span></h1>
                <img className="templetes" src={Templete} alt="templete do site" />

                </div>

            
        </>
    )
}

export default Header