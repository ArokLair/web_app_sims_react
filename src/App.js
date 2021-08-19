import './App.css';
import {MiBoton} from './components/MiBoton';

function App() {
  return (
    <div className="App">
      <h1>MSG</h1>
      <MiBoton etiqueta='nuevo valor' className='Miboton' nombre='jlmc' ocultanombre='true'></MiBoton>
    </div>
  );
}

export default App;
