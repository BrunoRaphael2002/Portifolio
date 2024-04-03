
import html from '../assets/logo/html.png'
import css from '../assets/logo/css.png'
import javascript from '../assets/logo/js.png'
import mysql from '../assets/logo/sql.png'
import nextjs from '../assets/logo/nextjs.png'
import figma from '../assets/logo/figma.png'
import react from '../assets/logo/react.png'
import typescript from '../assets/logo/TypeScript.png'
import wordpress from '../assets/logo/wordpress.png'
import ionic from '../assets/logo/ionic.png'


function GerarDadosTecnologia() {
    return [

  { imagem: html, nome: 'HTML', id:1 },
  { imagem: css, nome: 'CSS', id:2 },
  { imagem: javascript, nome: 'JavaScript', id:3 },
  { imagem: typescript, nome: 'TYPESCRIPT', id:4 },
  { imagem: react, nome: 'REACT.JS', id:5 },
  { imagem: nextjs, nome: 'NEXT.JS', id:6},
  { imagem: ionic, nome: 'IONIC' , id:7},
  { imagem: wordpress, nome: 'WORDPRESS' ,id:8 },
  { imagem: figma, nome: 'FIGMA',  id:9},
  { imagem: mysql, nome: 'MYSQL', id:10 },
  
  // Adicione mais objetos conforme necessário para outras tecnologias
]
}

export default GerarDadosTecnologia;