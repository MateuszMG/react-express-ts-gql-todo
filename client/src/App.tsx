import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { TodoGraphql } from './pages/TodoGraphql/TodoGraphql';
import { TodoRestApi } from './pages/TodoRestApi/TodoRestApi';

export const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <li>
          <Link to={'/'}>TodoGraphql</Link>
        </li>
        <li>
          <Link to={'/todoRestApi'}>TodoRestApi</Link>
        </li>
      </nav>
      <Routes>
        <Route path='/' element={<TodoGraphql />} />
        <Route path='/todoRestApi' element={<TodoRestApi />} />
      </Routes>
    </BrowserRouter>
  );
};
