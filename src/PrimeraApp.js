import PropTypes from "prop-types";

// * Este es un componente
const PrimeraApp = function ({ saludo, titulo }) {
  // const saludo = {
  //   nombre: 'Josue',
  //   age: 23,
  // };

  return (
    <>
      {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
      <h1> {saludo} </h1>
      <p>{titulo}</p>
    </>
  );
};

PrimeraApp.propTypes = {
  // * Aqui podemos definir el tipo de las propiedades de este componente
  saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  saludo: "Hola desde DefaultProps",
  titulo: "Mi primera aplicación",
};

export default PrimeraApp;
