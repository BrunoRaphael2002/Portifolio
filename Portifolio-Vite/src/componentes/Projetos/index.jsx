import './index.css'
import CardProjeto from '../CardProjeto'
import PropTypes from 'prop-types';

//imgLogo =>
import html from '../../assets/logo/html.png'
import css from '../../assets/logo/css.png'
import javascript from '../../assets/logo/js.png'
import mysql from '../../assets/logo/sql.png'
import nextjs from '../../assets/logo/nextjs.png'
import figma from '../../assets/logo/figma.png'
import react from '../../assets/logo/react.png'
import typescript from '../../assets/logo/TypeScript.png'
import wordpress from '../../assets/logo/wordpress.png'
import ionic from '../../assets/logo/ionic.png'

//imagem projeto =>
import ImgProjeto from '../../assets/imagens/notFound.png'
export default function Projetos() {
  const imagemLogo = [
    { id: 1, imgLogo: html },
    { id: 2, imgLogo: css },
    { id: 3, imgLogo: javascript },
    { id: 4, imgLogo: typescript },
    { id: 5, imgLogo: react },
    { id: 6, imgLogo: nextjs },
    { id: 7, imgLogo: ionic },
    { id: 8, imgLogo: wordpress },
    { id: 9, imgLogo: figma},
    { id: 10, imgLogo: mysql },
  ]

  return (

   
    <>
     <section className="Meus-projetos limitar-sessao" id="Projetos">
    
      <h3>Projetos</h3>
     
        <CardProjeto 
        Titulo='Projeto-01'
    Paragrafo='Esse é o porjeto-01'

    imgLogo={imagemLogo}
    
    imgProjeto={ImgProjeto}

    alt=''

    Link01='https://www.disneyplus.com/pt-br/video/6777d0e8-e485-4447-b8f3-37b17f59ed2f'

    Link02='https://www.disneyplus.com/pt-br/video/6777d0e8-e485-4447-b8f3-37b17f59ed2f'
        
        />


         <CardProjeto 
        Titulo='Projeto-01'
    Paragrafo='Esse é o porjeto-01'

    imgLogo={imagemLogo}
    
    imgProjeto={ImgProjeto}

    alt=''

    Link01='https://www.disneyplus.com/pt-br/video/6777d0e8-e485-4447-b8f3-37b17f59ed2f'

    Link02='https://www.disneyplus.com/pt-br/video/6777d0e8-e485-4447-b8f3-37b17f59ed2f'
        
        />    
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