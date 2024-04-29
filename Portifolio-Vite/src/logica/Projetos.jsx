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
//import ImgProjeto from '../assets/imagens/notFound.png'

import Otica from '../assets/imagens/Otica.png'


import Sorveteria from '../assets/imagens/sorveteria.png'
import AgenciaDesign from '../assets/imagens/design.png'
import Adpb from '../assets/imagens/ADPB.png'
import Restaurante  from '../assets/imagens/restaurante.png'
import Fokus  from '../assets/imagens/Fokus.png'
import IonicProject  from '../assets/imagens/ionic-full.png'
import AluraApi from '../assets/imagens/aluraBooks.png'



function projetosData(){
  return[
  {
    id: 1,
    nome:'Otica Vida',
    descricao:'projeto desenvolvido em react utilizando components',
    alt:'imagem01',
    link01:'https://otica-visao-show.vercel.app',
    link02:'https://github.com/BrunoRaphael2002/otica-visao-show',
    imagem: [Otica],
    tecnologias: [html, css, javascript, react],
 
  },

  {
    id: 2,
    nome:'Sorveteria',
    descricao:'Projeto desenvolvido em React estudando o uso do React-router-dom',
    alt:'imagem02',
    link01:'https://sorveteria-indol.vercel.app',
    link02:'https://github.com/BrunoRaphael2002/devMedia/tree/main/react/projetos-react/spa-sorveteria',
    imagem: [Sorveteria],
    tecnologias: [ html, css, javascript, react,],
   
  },
  {
    id: 3,
    nome:'Agencia de Design',
    descricao:'Este projeto foi desenvolvido utilizando UseState',
    alt:'imagem02',
    link01:'https://agencia-de-design-orpin.vercel.app',
    link02:'https://github.com/BrunoRaphael2002/devMedia/tree/main/react/projetos-react/agencia-desing',
    imagem: [AgenciaDesign],
    tecnologias: [html,css,javascript,react],
   
  },
  {
    id: 4,
    nome:'ADPB Chã do Cabo Branco',
    descricao:'Projeto desenvolvido em react criando componentes para uma igreja local',
    alt:'imagem02',
    link01:'https://projeto-adpb.vercel.app',
    link02:'https://github.com/BrunoRaphael2002/projeto-adpb',
    imagem: [Adpb],
    tecnologias: [html,css,javascript,react],
   
  },
  {
    id: 5,
    nome:'Restaurante ',
    descricao:'Este Projeto foi desenvolvido em Nextjs utilizando rotas, UseState, componentes , filtragem e mapeamento de dados , e possui um back-end que ele recebe de um array javaScritp',
    alt:'imagem02',
    link01:'https://cardapio-restaurante-xi.vercel.app',
    link02:'https://github.com/BrunoRaphael2002/Cardapio-restaurante',
    imagem: [Restaurante],
    tecnologias: [nextjs,react, javascript ],
   
  },
  {
    id: 6,
    nome:'Fokus',
    descricao:'Este Projeto foi Desenvolvido com html , css e javaScript para estudar a manipulação do DOM ',
    alt:'imagem02',
    link01:'https://brunoraphael2002.github.io/Alura-front-end/projetos%20front-end/Fokus-projeto-base/',
    link02:'https://github.com/BrunoRaphael2002/Alura-front-end/tree/main/projetos%20front-end/Fokus-projeto-base',
    imagem: [Fokus],
    tecnologias: [html,css,javascript],
   
  },
  {
    id: 7,
    nome:'App Delivery',
    descricao:'Este Projeto foi desenvolvido com Ionic projeto desenvolvido durante a faculdade De Analise de Desenvolvimento de Sistemas ',
    alt:'imagem02',
    link01:'https://restaurante-ionic.vercel.app/home',
    link02:'https://github.com/BrunoRaphael2002/Restaurante-Ionic',
    imagem: [IonicProject],
    tecnologias: [html,css,typescript,ionic],
   
  },
  {
    id: 8,
    nome:'Alura Books',
    descricao:'Este Projeto foi desenvolvido com react e com node + express foi criado uma Api para pesquisar , salvar e deletar livros (em Desenvolvimento',
    alt:'imagem02',
    link01:'https://alura-front-end-gamma.vercel.app',
    link02:'https://github.com/BrunoRaphael2002/Alura-front-end/tree/main/projetos%20front-end/react-full-stack',
    imagem: [AluraApi],
    tecnologias: [react,html,css,express,javascript,node,Styledcomponents],
   
  },
]
}

export default projetosData;