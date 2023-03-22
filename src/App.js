import './App.css';

import Menu from './components/Aula 2103/menu/menu';
import Blog from './components/Aula 2103/pages/blog/blog';
import Contato from './components/Aula 2103/pages/contato/contato';
import Home from './components/Aula 2103/pages/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Usuarios from './components/Aula 2103/pages/usuarios/usuarios';
import Login from './components/Aula 2103/pages/Login/login';

import NotFound from './components/Aula 2203/pages/notFound/notfound';
import Root from './components/Aula 2203/pages/root/root';
import Section1 from './components/Aula 2203/pages/sections/section1';
import Section2 from './components/Aula 2203/pages/sections/section2';
import Section3 from './components/Aula 2203/pages/sections/section3';
import EditarUsuario from './components/Aula 2103/pages/usuarios/editarUsuario/editarUsuario';
import Perfil from './components/Aula 2103/pages/perfil/perfil';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Aqui dentro teremos o nosso roteamento */}

        <Routes>

          {/* Aninhamento de rotas 
          
          ANINHAMENTO DE ROTAS são aplicações de roteamento em páginas web onde o conteúdo do componente é alterado em função da rota acessada na página.
            Exemplo: exemplo.com/usuarios/3245/perfil
            Area de "perfil" do usuário "3245" dentro da relação de "usuarios".     

          */}

            <Route path="/" element={ <Root /> }>

              <Route path="/" element={ <Home /> }>
                <Route path="/section1" element={ <Section1 /> } />
                <Route path="/section2" element={ <Section2 /> } />
                <Route path="/section3" element={ <Section3 /> } />
              </Route>

              <Route path="/blog" element={ <Blog /> } />
              <Route path="/ajuda" element={ <Contato /> } />
              <Route path="/usuarios" element={ <Usuarios /> } />
              <Route path="/login" element={ <Login /> } />
              <Route path="*" element={ <NotFound /> } />
              <Route path="/usuarios/editar-usuario/:id" element={ <EditarUsuario /> } /> {/* :id -> Parâmetro de rota */}
              <Route path="/usuarios/perfil/:id" element={ <Perfil /> } />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
