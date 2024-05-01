import FotoSobre from '../../assets/imagens/perfil02.png'
import Github from '../../assets/icons/github.png'
import Linkedin from '../../assets/icons/linkedin.png'
import Youtube from '../../assets/icons/youtube.png'

import Zap from '../../assets/icons/zap.png'
import './index.css'

export default function BoasVindas() {
  return (
    <>
    <section className="sobre limitar-sessao" id="Inicio">

<div className=" texto-sobre">
             <h1>Bruno Raphael,</h1>
             <h2>Engenheiro de Software</h2>
             <p>Olá, seja bem-vindo! Me chamo Bruno Raphael, sou formado em <span className='orange'>Análise de Desenvolvimento de Sistemas</span> pela faculdade <a className="texto-link" href="https://claretiano.edu.br" target="_blank">Claretiano</a>. Entre em contato hoje e faça a sua ideia de negócio ganhar vida de forma acessivel e otimizada.


                    
                 </p>

                 <div className="redes">

                     <a href="https://www.linkedin.com/in/bruno-raphael-0984601b3/details/certifications/" target="_blank"><img src={Github} alt="" /></a>


                     <a href="https://github.com/BrunoRaphael2002" target="_blank"><img  src={Youtube} alt="Youtube" /></a>

                     <a href="https://www.youtube.com/channel/UCd5HlD1bsUz6xv16-xTQmtw" target="_blank"><img  src={Linkedin} alt="Linkedin" /></a>

                     <a href="https://wa.me/5583982190654" target="_blank"><img src={Zap} alt="whatzap" /></a>
                 </div>


             <div className="boxBtn">
                
                 <a className="btn1" href="mailto:brunoraphael0725@gmail.com" >Saiba Mais </a>
             </div>
         </div>

         <div className="imagem ">
             <img src={FotoSobre} alt="Foto Sobre"/>
         </div>

     </section>
    </>
  )
}
