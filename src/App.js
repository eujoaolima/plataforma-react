import './App.css';
import Menu from './components/Aula 2103/menu/menu';
import Blog from './components/Aula 2103/pages/blog/blog';
import Contato from './components/Aula 2103/pages/contato/contato';
import Home from './components/Aula 2103/pages/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Usuarios from './components/Aula 2103/pages/usuarios/usuarios';
import Login from './components/Aula 2103/pages/Login/login';

function App() {
  return (
    <div className="App">
      <Menu />
      <BrowserRouter>
        {/* Aqui dentro teremos o nosso roteamento */}

        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/blog" element={ <Blog /> } />
            <Route path="/ajuda" element={ <Contato /> } />
            <Route path="/usuarios" element={ <Usuarios /> } />
            <Route path="/login" element={ <Login /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
