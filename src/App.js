import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/footer';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/projects' element={<Projects/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
