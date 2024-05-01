import './Sobre.css'
import FotoSobre from '../../assets/imagens/perfil03.jpeg'

export default function Sobre() {
    return (
      <>
 <section className="sessao-titulo" id="Sobre" ><h1>Sobre mim</h1></section>
       <section className="sobre limitar-sessao" >
      

       <div className=" texto-sobre-mim" >
                    
                   

                    
            <p><span className='m'>S</span>ou Bruno Raphael Medeiros , analista de sistemas e engenheiro de software formado há mais de um ano pela faculdade Claretiano. Desde então, venho buscando oportunidades para demonstrar meu potencial. Já executei projetos como freelancer e continuo estudando intensivamente, dedicando cerca de 10 horas diárias quando estou altamente motivado.</p>


            <p>Durante meu tempo na faculdade adquiri conhecimento em diversos assuntos, incluindo Engenharia de Software, Banco de Dados, Orientação a Objetos, Arquitetura de Computadores, Redes de Computadores além de várias linguagens de programação, como JavaScript, Java, Java Server Page, PHP, MySQL, entre outras.</p>


            <p>Ao longo da minha jornada acadêmica e profissional, aprendi muito e continuo me esforçando para me tornar um engenheiro de software exemplar, pois sempre fui apaixonado por tecnologia.</p>

                        

          






                   
                </div>

                <div className="imagem">
             <img src={FotoSobre} alt="Foto Sobre"/>
         </div>


            </section>

     
      </>
    )
  }
  