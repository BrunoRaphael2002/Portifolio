import PropTypes from 'prop-types';
export default function ListaDeTecnologias( {imagens} ) {
  return (
    <ul>
      {imagens.map((imagem, index) => (
        <li key={index}><img src={imagem} alt="" /></li>
      ))}
    </ul>
  );
}

ListaDeTecnologias.propTypes = {
  imagens: PropTypes.array.isRequired
};