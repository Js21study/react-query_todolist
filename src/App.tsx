import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Todo } from './pages/Todo';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
