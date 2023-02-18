import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/Home';
import Navbar from './components/Navbar';
import PlayQuiz from './components/PlayQuiz';
import MyQuiz from './components/MyQuiz';
import CreateQuiz from './components/CreateQuiz';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Playquiz' element={<PlayQuiz />} />
        <Route path='/Myquiz' element={<MyQuiz />} />
        <Route path='/Createquiz' element={<CreateQuiz />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
