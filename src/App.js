import "./App.css";
import Navbar from "./Navbar/Navbar";
import Button from './Button';
import QuestionsTable from "./Components/QuestionsTable";

function MyComponent() {
  function handleClick() {
    alert('Button clicked!');
  }

  return (
    <div>
      <Button label="Click me" onClick={handleClick} />
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Navbar/>
      <QuestionsTable />
    </div>
  );
}

export default App;




