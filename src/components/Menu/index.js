import React from 'react'; // Sempre tem que importar o react
import Logo from '../../assets/img/meulogoflix.png';
import './Menu.css'
import Button from '../Button/index';
//import ButtonLink from './components/ButtonLink';
// Criando a tag Menu
function Menu(){
    return (
        <nav className="Menu">
            <a href="/"> 
                <img className="Logo" src={Logo} alt="img carlaoflix" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>    
    )
}

// Exportando
export default Menu; // belezinha