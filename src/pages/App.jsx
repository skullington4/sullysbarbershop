import '../App.css';
import Home from './Home';
import { Route, Routes } from 'react-router';
import Nav from '../components/Nav';
import Cuts from './Cuts';
import About from './About';
import Footer from '../components/footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuts" element={<Cuts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    <footer>
      <Footer />
    </footer>
    </div>
  );
}

export default App;
