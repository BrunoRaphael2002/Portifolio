import CardProjeto from '../CardProjeto'
import PropTypes from 'prop-types';
import experienciaData from '../../logica/Expreiencia';



export default function Experiencia() {
    const experiencias = experienciaData();
  return (
    <>
     
     <section className="Meus-projetos limitar-sessao" >
       <section className="sessao-titulo limitar-sessao" id="Experiencia" ><h1>Experiência </h1>   </section>
     
     {experiencias.map((experiencia) => (
         <CardProjeto
         key={experiencia.id} 
         Titulo={experiencia.nome}
         Paragrafo={experiencia.descricao}
         imgProjeto={experiencia.imagem}
         alt={`Imagem do ${experiencia.alt}`}
         Link01={experiencia.link01}
         Link02={experiencia.link02}
         imagensTecnologias={experiencia.tecnologias}
         />
       ))}

</section>

 
  
    </>
  )
}

Experiencia.propTypes = {
    experiencia: PropTypes.arrayOf(
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