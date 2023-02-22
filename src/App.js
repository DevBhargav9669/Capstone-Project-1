import HomePage from './components/homePage/homePage';
import { Routes, Route } from 'react-router-dom';
import  {MyQuizzes}  from "./components/homePage/MyQuizzes.js";

  return (
    function App() {
      return (
        <Routes>
        <Route path="/my-quizzes" element={<MyQuizzes />} />
        </Routes>

      )
    }
    
  );

export default App;
