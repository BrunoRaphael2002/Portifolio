import PropTypes from 'prop-types';




export default function CardProjeto({  Titulo,
    Paragrafo,
    imgLogo,
    imgProjeto,
    alt,
    Link01,
    Link02}) 

    
  {
        const imgLogoId1 = imgLogo.find((logo) => logo.id === 1);
        const imgLogoId3 = imgLogo.find((logo) => logo.id === 3);
        const imgLogoId4 = imgLogo.find((logo) => logo.id === 4);
        const imgLogoId9 = imgLogo.find((logo) => logo.id === 9);

  return (

   <>
   <div className="box-projetos ">

                    

<img className="imagem-projeto" src={imgProjeto} alt={alt}/>

    <div className="box-text">
    <h3>{Titulo}</h3>
    <p>{Paragrafo}</p>

    <ul>
            {/* Renderizando as imagens específicas */}
            <li><img src={imgLogoId1.imgLogo} alt="" /></li>
            <li><img src={imgLogoId3.imgLogo} alt="" /></li>
            <li><img src={imgLogoId4.imgLogo} alt="" /></li>
            <li><img src={imgLogoId9.imgLogo} alt="" /></li>
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
        imgLogo: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        Link01: PropTypes.string.isRequired,
        Link02: PropTypes.string.isRequired,
 
    
  };