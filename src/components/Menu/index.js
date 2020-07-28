import React from 'react'; // Sempre tem que importar o react
import { Link } from 'react-router-dom'; 
import Logo from '../../assets/img/meulogoflix.png';
import './Menu.css'
import Button from '../Button/index';
//import ButtonLink from './components/ButtonLink';

// Criando a tag Menu
function Menu(){
    return (
        <nav className="Menu">  
            <Link to="/"> 
                <img className="Logo" src={Logo} alt="img carlaoflix" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>    
    )
}

// Exportando
export default Menu; // belezinha