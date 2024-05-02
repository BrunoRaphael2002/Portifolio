import html from '../assets/logo/html.png'
import css from '../assets/logo/css.png'
import javascript from '../assets/logo/js.png'
//import mysql from '../assets/logo/sql.png'
import nextjs from '../assets/logo/nextjs.png'
//import figma from '../assets/logo/figma.png'
import react from '../assets/logo/react.png'
import typescript from '../assets/logo/TypeScript.png'
import wordpress from '../assets/logo/wordpress.png'
import ionic from '../assets/logo/ionic.png'
import node from'../assets/logo/nodejs.png'
import express from '../assets/logo/express.png'
import Styledcomponents from '../assets/logo/styled.png'
//import Vite from '../assets/logo/vite.png'

//imagens dos projetos ->
import ImgProjeto from '../assets/imagens/notFound.png'

import Otica from '../assets/imagens/Otica.png'


import Sorveteria from '../assets/imagens/sorveteria.png'
import AgenciaDesign from '../assets/imagens/design.png'
import Adpb from '../assets/imagens/ADPB.png'
import Restaurante  from '../assets/imagens/restaurante.png'
import Fokus  from '../assets/imagens/Fokus.png'
import IonicProject  from '../assets/imagens/ionic-full.png'
import AluraApi from '../assets/imagens/aluraBooks.png'



function experienciaData(){
  return[
  {
    id: 1,
    nome:'Projeto 01',
    descricao:'projeto Freelancer desenvolvido para cliente ',
    alt:'imagem01',
    imagem: [ ImgProjeto],
    tecnologias: [html, css, javascript, react],
 
  },

  {
    id: 2,
    nome:'Projeto 02',
    descricao:'projeto Freelancer desenvolvido para cliente ',
    alt:'imagem02',
    imagem: [ ImgProjeto],
    tecnologias: [ html, css, javascript, react,],
   
  },
  {
    id: 3,
    nome:'Projeto 03',
    descricao:'projeto Freelancer desenvolvido para ',
    alt:'imagem02',
    imagem: [ ImgProjeto],
    tecnologias: [html,css,javascript,react],
   
  }]
}

export default experienciaData;