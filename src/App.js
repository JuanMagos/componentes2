import './App.css';
import { useState } from 'react';
// import ClassComponent from './components/ClassComponent/ClassComponent';
import Counter from './components/Counter/Counter';
import CicloVida from './components/CicloVida/CicloVida';

// import Parent from './components/Parent/Parent';

// const Titulo = () => {
//   return <h1>Hola soy el titulo</h1>;
// };

function App() {
  const [validacion, setValidacion] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {/* <h2>Estos es con componenete de Clase</h2> */}
        {/* <ClassComponent /> */}
        {/* <h2>Estos es con componenete de Función</h2> */}
        {validacion === true ? null : <CicloVida validacion={validacion} />}

        <button onClick={() => setValidacion(!validacion)}>
          Actualizó el state
        </button>
        {/* <Counter /> */}
        {/* <Parent esUnComponente={Titulo}>
          <div>
            <h1>Hola soy el children</h1>
          </div>
        </Parent> */}
      </header>
    </div>
  );
}

export default App;
