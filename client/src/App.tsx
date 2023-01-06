import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TodoGraphql } from './pages/TodoGraphql/TodoGraphql';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TodoGraphql />} />
      </Routes>
    </BrowserRouter>
  );
};
