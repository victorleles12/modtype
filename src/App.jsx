import React from 'react'
import Botao from './Components/Botao'
import BoxInput from './Components/BoxInput'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Conversor de texto</h1>
      <BoxInput />
        <div className="botoes">
            <Botao label="teste"/>
            <Botao label="teste"/>
            <Botao label="teste"/>
            <Botao label="teste"/>
            <Botao label="teste"/>
        </div>
    </div>
  );
}

export default App;
