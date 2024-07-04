import PropTypes from 'prop-types';
import ListaDeTecnologias from '../ListaDeTecnologias';







export default function CardProjeto({  Titulo,
    Paragrafo,
    imgProjeto,
    alt,
    Link01,
    Link02,
    imagensTecnologias}) 

    
  {

  

  return (

   <>
   <div className="box-projetos ">
   <h1>{Titulo}</h1>
                    

<img className="imagem-projeto" src={imgProjeto} alt={alt}/>

    <div className="box-text">
    
    <p>{Paragrafo}</p>

    <ul>
    <ListaDeTecnologias imagens={imagensTecnologias} />

          </ul>

    <div className="boxlinkBtn">
        <a className="btnDeploy" href={Link01} target="_blank"><button>Visite o Site</button></a>
        <a className="btnRepositorio" href={Link02} target="_blank"><button>repositorio</button></a>
    </div>

</div>
</div>
             
   </>
  )
}
CardProjeto.propTypes = {
  
  

  Titulo: PropTypes.string.isRequired,
  Paragrafo: PropTypes.string.isRequired,
  imgProjeto: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  Link01: PropTypes.string.isRequired,
  Link02: PropTypes.string.isRequired,
  imagensTecnologias: PropTypes.arrayOf(PropTypes.string).isRequired 
 
 
    
  };