// importação do bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// importação do css padrão
import './App.css';

// importação de paginas
import Login from './pages/Login';
import Home from './pages/Home';

// importação de componentes
import NavBarra from './components/NavBarra';
// importação do gerenciador de rotas
import {BrowserRouter, Route, Routes} from 'react-router-dom';




function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBarra/>
     <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
