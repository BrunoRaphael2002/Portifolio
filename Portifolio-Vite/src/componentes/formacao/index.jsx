
import './index.css';

export default function Formacao() {
  return (
    <><section className="sessao-titulo" ><h1>Formação</h1></section>

    <div className="formacao-container limitar-sessao" id='Formacao'>
      
        <div className="formacao-box">
          <h2 className='colorBlueligth'>Faculdade Claretiano</h2>
          <p>Análise de Desenvolvimento de Sistemas</p>
          <p>Conculusão: 2021 - 2023</p>
        </div>
      

        <div className="formacao-box">
          <h2 className='colorGreen'>DevMedia</h2>
          <p>Carreira Web Front-End</p>
          <p>Conclusão: 2022 - 2023 </p>
        </div>
        
      

     
        <div className="formacao-box">
          <h2 className='colorBlue'>Alura</h2>
          <p>Escola de Programação</p>
          <p>Conclusão: 2023 - 2024</p>
        </div>

        <div className="formacao-box">
          <h2 className='colorBlue'>Udemy</h2>
          <p>Curso Web Frontend Fundamentos HTML, CSS, JAVASCRIPT</p>
          <p>Concluindo: 2023 - 2024</p>
        </div>
       
        {/* Adicione mais caixas de formação aqui, se necessário */}
      
    </div></>
  )
}
