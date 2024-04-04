import html from '../assets/logo/html.png'
import css from '../assets/logo/css.png'
import javascript from '../assets/logo/js.png'
//import mysql from '../assets/logo/sql.png'
import nextjs from '../assets/logo/nextjs.png'
//import figma from '../assets/logo/figma.png'
import react from '../assets/logo/react.png'
//import typescript from '../assets/logo/TypeScript.png'
import wordpress from '../assets/logo/wordpress.png'
//import ionic from '../assets/logo/ionic.png'

import ImgProjeto from '../assets/imagens/notFound.png'



function projetosData(){
  return[
  {
    id: 1,
    nome:'projeto01',
    descricao:'Esse é o Projeto01',
    alt:'imagem01',
    link01:'#',
    link02:'#',
    imagem: [ImgProjeto],
    tecnologias: [html, css, javascript],
 
  },

  {
    id: 2,
    nome:'projeto02',
    descricao:'Esse é o Projeto02',
    alt:'imagem02',
    link01:'#',
    link02:'#',
    imagem: [ImgProjeto],
    tecnologias: [nextjs, javascript, react,wordpress],
   
  },
  // Adicione mais objetos de projeto conforme necessário
]
}

export default projetosData;