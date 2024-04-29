import './index.css'
import CardProjeto from '../CardProjeto'
import PropTypes from 'prop-types';
import projetosData from '../../logica/Projetos';

//imgLogo =>


export default function Projetos() {
  const projetos = projetosData();
  
  return (


    <>
     <section className="Meus-projetos limitar-sessao" id="Projetos">
    
     <section className="sessao-titulo" ><h1>Projetos</h1></section>
     
      {projetos.map((projeto) => (
          <CardProjeto
          key={projeto.id} 
          Titulo={projeto.nome}
          Paragrafo={projeto.descricao}
          imgProjeto={projeto.imagem}
          alt={`Imagem do ${projeto.alt}`}
          Link01={projeto.link01}
          Link02={projeto.link02}
          imagensTecnologias={projeto.tecnologias}
          />
        ))}



  
      </section>

    </>
  )
}


Projetos.propTypes = {
  projetos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nome: PropTypes.string.isRequired,
      descricao: PropTypes.string.isRequired,
      imagem: PropTypes.string.isRequired,
      tecnologias: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          imagem: PropTypes.string.isRequired,
          nome: PropTypes.string.isRequired,
        })
      ).isRequired,
      linkSite: PropTypes.string.isRequired,
      linkRepositorio: PropTypes.string.isRequired,
    })
  ).isRequired,
};