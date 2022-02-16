import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Carousel></Carousel>
        <Services></Services>       
      </header>
    </div>
  );
}

export default App;
