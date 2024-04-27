import  { useState } from 'react';
import './index.css';
import Logo from '../../assets/imagens/programacao.png';

export default function Navegacao() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <>
      <nav className="limitar-sessao">
        <div className="logo">
          <img src={Logo} alt="Ícone de programação" />
          <h1>Front<span>Line</span></h1>
        </div>
        <div className={`menu-icon ${menuAberto ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="linha"></div>
          <div className="linha"></div>
          <div className="linha"></div>
        </div>
        <ul className={`menu ${menuAberto ? 'aberto' : ''}`}>
          <li><a href="#Inicio" onClick={() => setMenuAberto(false)}>Inicio</a></li>
          <li><a href="#Sobre" onClick={() => setMenuAberto(false)}>Sobre mim</a></li>
          <li><a href="#Habilidades" onClick={() => setMenuAberto(false)}>Habilidades</a></li>
          <li><a href="#Projetos" onClick={() => setMenuAberto(false)}>Projetos</a></li>
       
          <li><a href="#Formacao" onClick={() => setMenuAberto(false)}>Formação</a></li>
          <li><a href="#Contato" onClick={() => setMenuAberto(false)}>Contato</a></li>
        </ul>
      </nav>
    </>
  );
}
