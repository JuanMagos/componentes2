import { useEffect, useState } from 'react';

const CicloVida = ({ validacion }) => {
  const [contador, setContador] = useState(0);
  //   const url = 'http//:dominio';

  const aumentar = () => {
    setContador(contador + 1);
  };

  const mouseMove = ({ x, y }) => {
    console.log(x, y);
  };

  //Antes de desmontar mi componente
  useEffect(() => {
    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);

      console.log('Yo me ejcuto cuando el componente se va a desmontar');
    };
  }, []);

  //Componente montado
  useEffect(() => {
    //fetch petición

    console.log('Yo me ejecuto una vez que el componete se monto');
  }, []);

  //Cuando se actualizan las props
  useEffect(() => {
    console.log('Yo me ejecuto cuando se actualizan las props');
  }, [validacion]);

  //Cuando se actualiza el state
  useEffect(() => {
    console.log('Yo me ejecuto cuando se actualiza el state');
  }, [contador]);

  //Antes de montar el componente
  console.log('Yo me ejecuto antes de que el componente se monte');
  return (
    <>
      <h3>Numero actual {contador}</h3>
      {validacion === true ? <h2>Verdadero</h2> : <h2>Falso</h2>}
      <button onClick={aumentar}>Aumentar contador</button>
    </>
  );
};

export default CicloVida;
