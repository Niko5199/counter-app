import PropTypes from 'prop-types';

// * Este es un componente
const PrimeraApp = function ({ saludo }) {
  // const saludo = {
  //   nombre: 'Josue',
  //   age: 23,
  // };

  return (
    <>
      {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
      <h1> {saludo} </h1>
      <p>Mi primera aplicacion</p>
    </>
  );
};

PrimeraApp.propTypes = {
  // * Aqui podemos definir el tipo de las propiedades de este componente
  saludo: PropTypes.string.isRequired,
};

export default PrimeraApp;
