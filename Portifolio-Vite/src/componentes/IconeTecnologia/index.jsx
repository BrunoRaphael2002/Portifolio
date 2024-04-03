
import PropTypes from 'prop-types';

export default function IconeTecnologia({imagem, nome}) {
  return (
    <>
    <div id="Html" className="tecnologias">
    <img src={imagem} alt=""/>
    <h4>{nome}</h4>
    </div>
</>
  )
}
IconeTecnologia.propTypes = {
    imagem: PropTypes.string.isRequired, // Validando que 'imagem' é uma string obrigatória
    nome: PropTypes.string.isRequired, // Validando que 'nome' é uma string obrigatória
  };

  