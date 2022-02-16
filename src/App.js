import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import Services from './Components/Services';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Carousel></Carousel>
        <Services></Services>  
        <Contact></Contact>      
      </header>
    </div>
  );
}

export default App;
