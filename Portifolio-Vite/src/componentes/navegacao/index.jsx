import './index.css'
import Logo from '../../assets/imagens/programacao.png'

export default function Navegacao() {
  return (
    <>
      <nav className="limitar-sessao">
            <div className="logo">
              <img src={Logo} alt="Ícone de programação" />
              <h1> Front<span>Line</span></h1>
            </div>
            <ul>
              <li><a href="#Inicio">Inicio</a></li>
              <li><a href="#Habilidades">Habilidades</a></li>
              <li><a href="#Projetos">Projetos</a></li>
            </ul>
          </nav>
    </>
  )
}
