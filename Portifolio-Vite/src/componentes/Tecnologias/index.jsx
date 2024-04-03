import './index.css'
import GerarDadosTecnologia from '../../logica/DataTech';
import IconeTecnologia from '../IconeTecnologia';



export default function Tecnologias() {

  const tecnologiaData = GerarDadosTecnologia();

    return (
      <>
       <section className="sessao-titulo limitar-sessao" id="Habilidades">
       <h1>Tecnologias</h1>
                <section className="skills limitar-sessao">
                
                {tecnologiaData.map((tecnologia) => (
            <IconeTecnologia
              
            key={tecnologia.id}
            imagem={tecnologia.imagem}
            nome={tecnologia.nome}
            />
          ))}
                    </section>
      </section>
      </>
    )
  }
  