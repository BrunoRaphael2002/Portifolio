import './index.css'
import CardProjeto from '../CardProjeto'
import PropTypes from 'prop-types';
import projetosData from '../../logica/Porjetos';

//imgLogo =>

import ImgProjeto from '../../assets/imagens/notFound.png'
export default function Projetos() {
  const projetos = projetosData();
  
  return (


    <>
     <section className="Meus-projetos limitar-sessao" id="Projetos">
    
      <h3>Projetos</h3>
     
      {projetos.map((projeto) => (
          <CardProjeto
            key={projeto.id} // Certifique-se de usar uma chave única para cada CardProjeto
            Titulo='projeto01'
            Paragrafo='descrição do projeto'
            imgProjeto={ImgProjeto}
            alt={`Imagem do ${projeto.nome}`}
            Link01='#'
            Link02='#'
            imagensTecnologias={projeto.tecnologias}
          />
        ))}

{projetos.map((projeto) => (
          <CardProjeto
            key={projeto.id} // Certifique-se de usar uma chave única para cada CardProjeto
            Titulo='projeto01'
            Paragrafo='descrição do projeto'
            imgProjeto={ImgProjeto}
            alt={`Imagem do ${projeto.nome}`}
            Link01='#'
            Link02='#'
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