import Banner from './componentes/Banner';
import { useState } from 'react';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    //setColaboradores([...colaboradores, colaborador]);
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Time nome="Programação" />
      <Time nome="Frontend" />
      <Time nome="Data Science" />
      <Time nome="Devops" />
      <Time nome="UX e Design" />
      <Time nome="Mobile" />
      <Time nome="Inovação e Gestão" />
    </div>
  );
}

export default App;
