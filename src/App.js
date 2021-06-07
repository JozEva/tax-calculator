import './App.css';
import Calculator from './calculator/Calculator';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <div className="HeaderContainer">
        <Header />
      </div>
      <div>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
